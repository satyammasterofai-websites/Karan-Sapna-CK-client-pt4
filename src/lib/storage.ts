import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const CHUNK_SIZE = 500000; // ~500KB per chunk

/**
 * Sanitizes file IDs to ensure files added in this remix are strictly namespaced
 * and can NEVER overwrite or overlap with official master website files.
 */
export function sanitizeFileIdForRemix(id: string): string {
  let safe = (id || '').trim();
  // Strip any attempts to write to official or legacy templates
  if (
    safe.startsWith('official-wedding-card') ||
    safe.startsWith('remix-v1') ||
    safe.startsWith('main-wedding-data') ||
    safe.startsWith('official-')
  ) {
    safe = safe.replace(/^(official-wedding-card|remix-v1|main-wedding-data|official)-?/, 'remix-template-6-');
    console.warn(`[FILE ISOLATION] Intercepted attempt to write official file. Redirected to isolated ID: ${safe}`);
  }
  // If the ID has no card prefix, attach remix-template-6-
  if (!safe.startsWith('remix-template-6') && !safe.startsWith('template-6')) {
    safe = `remix-template-6-${safe}`;
  }
  return safe;
}

export async function saveLargeFile(id: string, dataUrl: string): Promise<string> {
  const safeId = sanitizeFileIdForRemix(id);
  const chunks = Math.ceil(dataUrl.length / CHUNK_SIZE);
  
  const uploadPromise = async () => {
    // Save metadata FIRST with explicit isolation attributes
    await setDoc(doc(db, 'wedding_invitations', `file-meta-${safeId}`), {
      chunks,
      timestamp: Date.now(),
      fileId: safeId,
      isRemixFile: true,
      template: 'remix-template-6',
      byteLength: dataUrl.length
    });

    // Save chunks in small batches to prevent network congestion
    for (let i = 0; i < chunks; i += 3) {
      const batch = [];
      for (let j = 0; j < 3 && i + j < chunks; j++) {
        const chunkIndex = i + j;
        const chunkData = dataUrl.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
        batch.push(
          setDoc(doc(db, 'wedding_invitations', `file-chunk-${safeId}-${chunkIndex}`), {
            data: chunkData
          })
        );
      }
      await Promise.all(batch);
    }
    
    return `ecard-file://${safeId}`;
  };

  // Add a 45-second timeout to prevent infinite hanging on bad connections
  return Promise.race([
    uploadPromise(),
    new Promise<string>((_, reject) => 
      setTimeout(() => reject(new Error("Upload timed out. Please check your internet connection and try again.")), 45000)
    )
  ]);
}

export async function loadLargeFile(id: string): Promise<string | null> {
  if (!id.startsWith('ecard-file://')) return id;
  const actualId = id.replace('ecard-file://', '');
  
  try {
    const metaSnap = await getDoc(doc(db, 'wedding_invitations', `file-meta-${actualId}`));
    if (!metaSnap.exists()) return null;
    
    const chunks = metaSnap.data().chunks;
    let dataUrl = '';
    
    for (let i = 0; i < chunks; i++) {
      const chunkSnap = await getDoc(doc(db, 'wedding_invitations', `file-chunk-${actualId}-${i}`));
      if (chunkSnap.exists()) {
        dataUrl += chunkSnap.data().data;
      }
    }
    
    return dataUrl;
  } catch (e) {
    console.error("Error loading large file:", e);
    return null;
  }
}
