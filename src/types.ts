export interface TextElement {
  id: string;
  text: string;
  top: number;
  left: number;
  color: string;
  fontFamily: string;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
}

export interface EventDetail {
  id: string;
  heading: string;
  detailsColor?: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  imageUrl: string;
  directionUrl?: string;
  caricatureUrl?: string;
  showCaricature?: boolean;
  caricatureSize?: number;
  caricatureBottom?: number;
  caricatureLeft?: number;
  showDescription?: boolean;
  showDate?: boolean;
  showTime?: boolean;
  showVenue?: boolean;
}

export interface ECardSettings {
  remixOf?: string;
  openingBgColor: string;
  embeddedImageUrl: string;
  embeddedImageTop: number;
  embeddedImageLeft: number;
  embeddedImageWidth: number;
  textElements: TextElement[];
  heroImageUrl: string;
  ogImageUrl?: string;
  ganeshaIconUrl?: string;
  musicUrl: string;
  targetDate: string;
  eventDetails: EventDetail[];
  eventsBgColor: string;
  eventsSectionHeadingColor?: string;
  eventsSectionHeadingFont?: string;
  eventsImageHeadingColor?: string;
  eventsHeadingColor?: string; // keeping for backward compatibility
  sectionsBgColor?: string;
  mapHeading?: string;
  mapSubHeading?: string;
  mapAddress?: string;
  googleMapUrl?: string;
  showMap?: boolean;
  
  // New section options
  invitationMessageHeading?: string;
  invitationMessageBody?: string;

  familyInviteHeading?: string;
  familyInviteSubHeading1?: string;
  familyInviteSubHeading2?: string;
  familyNames?: string;
  familyInviteBgColor?: string;
  
  contactHeading?: string;
  contactName?: string;
  contactPhone?: string;
  contactAddress?: string;
  contactBgColor?: string;
  
  footerInviteHeading?: string;
  footerInviteNames?: string;
  footerInviteDate?: string;
  footerHashtag?: string;
  footerInviteFamilies?: string;
  footerInviteBgColor?: string;
  
  // New section option for holding page
  paymentPending?: boolean;
  paymentPendingText?: string;
  adminPassword?: string;
  heroTopText?: string;
  heroGroomName?: string;
  heroGroomParents?: string;
  heroMiddleText?: string;
  heroBrideName?: string;
  heroBrideParents?: string;
  groomIntro?: string;
  brideIntro?: string;
  groomGrandFather?: string;
  groomGrandMother?: string;
  brideGrandFather?: string;
  brideGrandMother?: string;
  dressCodeHeading?: string;
  dressCodeTheme?: string;
  dressCodeDescription?: string;
  showDressCode?: boolean;
  showCreateYoursButton?: boolean;
  createYoursButtonText?: string;
  customFields?: Record<string, string>;
  isRemix?: boolean;
  remixTemplate?: string;
  remixCardId?: string;
  remixInstanceId?: string;
  createdAt?: number;
  updatedAt?: number;
}

export const defaultSettings: ECardSettings = {
  heroTopText: 'We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of',
  heroGroomName: 'Karan Vachheta',
  heroGroomParents: 'S/o Mrs. Urmilaben \n& Mr. Ashok Bhai Vachheta',
  groomIntro: '',
  heroMiddleText: 'with',
  heroBrideName: 'Sapna Dhindhoriya',
  heroBrideParents: 'D/o Mrs. Bhavnaben \n& Mr. Vijay Bhai Dhindhoriya',
  brideIntro: '',
  groomGrandFather: 'Bansilal ji',
  groomGrandMother: 'Santa Ben',
  brideGrandFather: 'Sankarlal ji',
  brideGrandMother: 'Santa Devi',
  dressCodeHeading: 'Dress Code & Royal Theme',
  dressCodeTheme: 'Rajputi poshak and Rajput theme',
  dressCodeDescription: 'We warmly invite our esteemed family and friends to grace our wedding celebration in traditional Rajputi Poshak and royal Rajput theme.',
  showDressCode: true,
  showCreateYoursButton: true,
  createYoursButtonText: 'Create yours',
  openingBgColor: '#DCE8D3',
  embeddedImageUrl: 'https://i.ibb.co/qY2S0Wfm/file-0000000038a882088dd609cbd193300b.png',
  embeddedImageTop: 46,
  embeddedImageLeft: 50,
  embeddedImageWidth: 84,
  textElements: [
    {
      id: 'migrated-1',
      text: 'You are invited!',
      top: 63,
      left: 14,
      color: '#000000',
      fontFamily: 'Cinzel',
      fontSize: 2,
      textAlign: 'center',
    },
    {
      id: 'text-1785678639587',
      text: 'Tap envelop to reveal Invitation ',
      top: 69,
      left: 23,
      color: '#000000',
      fontFamily: 'Great Vibes',
      fontSize: 1.3,
      textAlign: 'center',
    }
  ],
  heroImageUrl: 'https://i.ibb.co/PzwNNBD6/file-00000000ae748211873325400fc9bd40.png',
  ogImageUrl: 'https://cdn.phototourl.com/member/2026-10-25-67da288c-0fae-4bda-b359-01075d1a0647.png',
  ganeshaIconUrl: 'https://i.ibb.co/3mCLv4Zf/ganesh-idol-Tuby-Yj-SJ.png',
  musicUrl: 'https://www.image2url.com/r2/default/audio/1785770108745-a5a46950-d478-470f-a009-e4114ad223f9.mp3',
  targetDate: '2026-12-03',
  eventDetails: [
    {
      id: 'event-1',
      heading: 'Haldi Ceremony',
      detailsColor: '#C9A15A',
      description: 'A vibrant morning filled with haldi, laughter, music, and beautiful family moments as we begin the wedding celebrations.',
      date: '2 December 2026 (Wednesday)',
      time: '12:00 PM – 2:00 PM',
      venue: 'Sweet Home, 28/400 Geeta Appartment, Nr Balkrishna Temple, Ranip AHEMDABAD-382480',
      imageUrl: 'https://i.ibb.co/4ZdnFx9f/file-000000007c048208a93c5954867ca76e.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: true,
      caricatureUrl: 'https://i.supaimg.com/b43c386e-b172-419b-9f38-7856075f2e77/d9eb2632-7dbe-42eb-92b8-4ab74977cd5a.png',
      caricatureSize: 50,
      caricatureBottom: 0,
      caricatureLeft: 50
    },
    {
      id: 'event-1785691647794',
      heading: 'Mehndi Ceremony',
      detailsColor: '#C9A15A',
      description: 'An evening of intricate mehndi designs, music, dance, and joyful celebrations with family and friends.',
      date: '1 December 2026 (Tuesday)',
      time: '6:00 PM – 8:00 PM',
      venue: 'Sweet Home, 28/400 Geeta Appartment, Nr Balkrishna Temple, Ranip AHEMDABAD-382480',
      imageUrl: 'https://i.ibb.co/7NC15FJh/Mehndi-bg.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: true,
      caricatureUrl: 'https://i.supaimg.com/b43c386e-b172-419b-9f38-7856075f2e77/39878101-cb43-48d1-9dc1-49eb6e780148.png',
      caricatureSize: 50,
      caricatureBottom: 0,
      caricatureLeft: 50
    },
    {
      id: 'event-1785691683471',
      heading: 'Sangeet Ceremony',
      detailsColor: '#C9A15A',
      description: 'Get ready for a magical evening of music, dance, performances, and unforgettable memories as both families come together.',
      date: '2 December 2026 (Wednesday)',
      time: '9:00 PM – 11:00 PM',
      venue: 'Sweet Home, 28/400 Geeta Appartment, Nr Balkrishna Temple, Ranip AHEMDABAD-382480',
      imageUrl: 'https://i.ibb.co/sp4RP4Zp/Sangeet-bg.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: true,
      caricatureUrl: 'https://i.supaimg.com/b43c386e-b172-419b-9f38-7856075f2e77/5de9845c-dd9d-468b-b9a0-82d0a9f4928b.png',
      caricatureSize: 50,
      caricatureBottom: 0,
      caricatureLeft: 48
    },
    {
      id: 'event-1785691714818',
      heading: 'Wedding Ceremony',
      detailsColor: '#C9A15A',
      description: 'With the blessings of our loved ones and elders, we invite you to witness the beginning of our forever as we exchange sacred vows.',
      date: '3 December 2026 (Thursday)',
      time: '9:00 AM – 11:00 AM',
      venue: 'Rukshmaniben Bhavsar Community Hall, 16, Bulakhidas Rd, Ram Nagar, Sabarmati, Ahmedabad, Gujarat 380005',
      imageUrl: 'https://i.ibb.co/prLDW5Sk/wedding-bg.png',
      directionUrl: 'https://maps.app.goo.gl/44GCcPMTqRYPiHhV9?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: true,
      caricatureUrl: 'https://i.supaimg.com/b43c386e-b172-419b-9f38-7856075f2e77/e10a5293-c733-42ef-9329-aefe7ef4ce04.png',
      caricatureSize: 50,
      caricatureBottom: 0,
      caricatureLeft: 50
    }
  ],
  eventsBgColor: '#FAF5EA',
  eventsSectionHeadingColor: '#8D2342',
  eventsSectionHeadingFont: 'Great Vibes',
  eventsImageHeadingColor: '#000000',
  eventsHeadingColor: '#000000',
  sectionsBgColor: '#FAF5EA',
  mapHeading: 'Where We Celebrate',
  mapSubHeading: 'VENUE',
  mapAddress: 'Rukshmaniben Bhavsar Community Hall, 16, Bulakhidas Rd, Ram Nagar, Sabarmati, Ahmedabad, Gujarat 380005',
  showMap: true,
  invitationMessageHeading: 'Awaiting Your Noble Presence',
  invitationMessageBody: 'Because meeting two souls requires twice the joy — and you!',
  familyInviteHeading: 'WITH LOVE',
  familyInviteSubHeading1: 'The Families',
  familyInviteSubHeading2: 'AWAITING YOUR GRACIOUS PRESENCE',
  familyNames: "Groom's Side:\nGrand Father: Bansilal ji  |  Grand Mother: Santa Ben\nParents: Mr. Ashok Bhai Vachheta & Mrs. Urmilaben Vachheta\n\nBride's Side:\nGrand Father: Sankarlal ji  |  Grand Mother: Santa Devi\nParents: Mr. Vijay Bhai Dhindhoriya & Mrs. Bhavnaben Dhindhoriya",
  familyInviteBgColor: '#DCE8D3',
  contactHeading: 'CONTACT DETAILS:',
  contactName: 'ASHOK BHAI VACHHETA',
  contactPhone: '+91 9456411569',
  contactAddress: '16, Bulakhidas Rd, Ram Nagar, Sabarmati, Ahmedabad, Gujarat 380005',
  contactBgColor: '',
  footerInviteHeading: 'WITH LOVE',
  footerInviteNames: 'KARAN & SAPNA',
  footerInviteDate: '3rd December 2026',
  footerHashtag: '#KARANWEDSSAPNA',
  footerInviteFamilies: 'VACHHETA & DHINDHORIYA FAMILIES',
  footerInviteBgColor: '#3B291F',
  paymentPending: false,
  paymentPendingText: '',
};
