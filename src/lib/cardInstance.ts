/**
 * cardInstance.ts
 * Manages unique database identification, remix isolation, and URL synchronization.
 * Guarantees that remixed websites in AI Studio never overlap or overwrite data from the official website.
 */

export const MASTER_CARD_ID = 'official-wedding-card';
export const OFFICIAL_APPLET_ID = 'a96df12c-9a53-491f-9834-0d2693a3ab95';
export const OFFICIAL_SUBDOMAIN = 'zu6oj4k573mqstevuaebw5';
export const OFFICIAL_WEBSITE_NAME = 'Riyansh & Priyanshi Premium Template-3';

export const PROTECTED_MASTER_CARD_IDS = [
  'official-wedding-card',
  'remix-v1',
  'main-wedding-data',
  'official',
  'master'
];

export interface ClientProfile {
  id: string;
  name: string;
  group: string;
}

export const CLIENT_PROFILES: ClientProfile[] = [
  { id: 'remix-template-6', name: 'Template 6 (Default)', group: 'Template 6 Profiles' },
  { id: 'template-6-client-1', name: 'Template 6 Client 1', group: 'Template 6 Profiles' },
  { id: 'template-6-client-2', name: 'Template 6 Client 2', group: 'Template 6 Profiles' },
  { id: 'template-6-client-3', name: 'Template 6 Client 3', group: 'Template 6 Profiles' },
  { id: 'template-6-client-4', name: 'Template 6 Client 4', group: 'Template 6 Profiles' },
  { id: 'template-6-client-5', name: 'Template 6 Client 5', group: 'Template 6 Profiles' },
];

export const REMIX_DEFAULT_CARD_ID = 'remix-template-6';
export const REMIX_WEBSITE_NAME = 'Karan & Sapna - Wedding Invitation';
export const TEMPLATE_STORAGE_KEY = 'wedding_template_6_card_id';

/**
 * Returns true ONLY if the running code is in the official template container.
 * In this remix applet ('Remix Hindu wedding template 6'), this function
 * ALWAYS returns false to strictly guarantee that no files, documents,
 * or edits can ever overwrite or overlap with the official website.
 */
export function isOfficialWebsite(): boolean {
  // This applet is permanently an isolated remix of Template 6.
  // It must never identify as the official website under any domain or deployment.
  return false;
}

/**
 * Returns client profile info for a given database/card ID
 */
export function getClientProfile(cardId: string): ClientProfile {
  if (cardId === MASTER_CARD_ID) {
    return { id: MASTER_CARD_ID, name: OFFICIAL_WEBSITE_NAME, group: 'Official Template' };
  }
  const match = CLIENT_PROFILES.find(p => p.id === cardId);
  if (match) return match;
  const friendlyName = cardId.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { id: cardId, name: friendlyName, group: 'Custom Client' };
}

/**
 * Returns the website name based on whether it is running on the official template or a remix
 */
export function getWebsiteName(cardId?: string): string {
  if (isOfficialWebsite()) {
    return OFFICIAL_WEBSITE_NAME;
  }
  if (cardId && cardId !== MASTER_CARD_ID && cardId !== REMIX_DEFAULT_CARD_ID) {
    const profile = getClientProfile(cardId);
    return `${profile.name} - Wedding Invitation`;
  }
  return REMIX_WEBSITE_NAME;
}

/**
 * Detects the AI Studio applet subdomain from window.location.hostname
 */
export function detectAppletSubdomain(): string | null {
  if (typeof window === 'undefined' || !window.location) return null;
  const hostname = window.location.hostname || '';
  const match = hostname.match(/^ais-(?:dev|pre)-([a-zA-Z0-9]+)/i);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Generates or retrieves a unique isolated database ID for a remix container
 */
export function getRemixDefaultId(): string {
  return REMIX_DEFAULT_CARD_ID;
}

/**
 * Determines the appropriate card/database ID for this remix instance.
 * Strictly guarantees that this remix never uses official master documents.
 */
export function determineInitialCardId(): string {
  if (typeof window !== 'undefined') {
    // 1. Explicit URL parameter (if user provides custom client ID)
    try {
      const params = new URLSearchParams(window.location.search);
      const queryId = params.get('id') || params.get('remix') || params.get('card');
      if (queryId && queryId.trim() !== '') {
        const trimmed = queryId.trim();
        // A remix is strictly forbidden from accessing or overwriting the master card
        if (PROTECTED_MASTER_CARD_IDS.includes(trimmed.toLowerCase())) {
          return REMIX_DEFAULT_CARD_ID;
        }
        return trimmed;
      }
    } catch (e) {
      console.warn('Error reading URL search params:', e);
    }

    // 2. Saved card ID preference from isolated localStorage
    try {
      const savedCardId = localStorage.getItem(TEMPLATE_STORAGE_KEY) || localStorage.getItem('wedding_custom_card_id');
      if (savedCardId && savedCardId.trim() !== '') {
        const trimmed = savedCardId.trim();
        // Disallow remix from reading master card ID or obsolete IDs from other templates
        if (
          !PROTECTED_MASTER_CARD_IDS.includes(trimmed.toLowerCase()) &&
          !trimmed.startsWith('oct-nov') &&
          !trimmed.startsWith('nitin-sir')
        ) {
          return trimmed;
        }
      }
    } catch (e) {}
  }

  // Default isolated database document for this remix
  return REMIX_DEFAULT_CARD_ID;
}

/**
 * Security guard: ensures a remix CAN NEVER write to official master documents
 */
export function sanitizeCardIdForSave(targetCardId: string): string {
  if (!targetCardId || typeof targetCardId !== 'string') {
    return REMIX_DEFAULT_CARD_ID;
  }
  const clean = targetCardId.trim().toLowerCase();
  if (PROTECTED_MASTER_CARD_IDS.includes(clean)) {
    console.warn(`[DATA ISOLATION] Blocked remix from writing to official template '${targetCardId}'. Redirected to '${REMIX_DEFAULT_CARD_ID}'.`);
    return REMIX_DEFAULT_CARD_ID;
  }
  return targetCardId.trim();
}

/**
 * Returns isolated localStorage key for a specific card ID
 */
export function getStorageKey(cardId: string): string {
  const safeId = sanitizeCardIdForSave(cardId);
  return `wedding-ecard-template-6-${safeId}`;
}

/**
 * Saves settings to localStorage with card isolation
 */
export function saveToLocalStorage(cardId: string, settings: any): void {
  try {
    const safeCardId = sanitizeCardIdForSave(cardId);
    localStorage.setItem(getStorageKey(safeCardId), JSON.stringify(settings));
    localStorage.setItem(TEMPLATE_STORAGE_KEY, safeCardId);
  } catch (e) {
    console.warn(`Local storage quota exceeded or blocked for ${cardId}:`, e);
  }
}

/**
 * Gets settings from localStorage with fallback to global key
 */
export function getFromLocalStorage(cardId: string): any | null {
  try {
    const scoped = localStorage.getItem(getStorageKey(cardId));
    if (scoped) return JSON.parse(scoped);
  } catch (e) {
    console.warn(`Error reading localStorage for ${cardId}:`, e);
  }
  return null;
}

/**
 * Generates the full shareable URL with the card ID query param
 */
export function getShareableUrl(cardId: string): string {
  if (typeof window === 'undefined' || !window.location) return `?id=${cardId}`;
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('id', cardId);
    return url.toString();
  } catch (e) {
    return `${window.location.origin}${window.location.pathname}?id=${cardId}`;
  }
}

/**
 * Returns true if this card is the original master template
 */
export function isMasterTemplate(cardId: string): boolean {
  return cardId === MASTER_CARD_ID || cardId === 'official-wedding-card';
}
