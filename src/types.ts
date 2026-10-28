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
  heroBottomText?: string;
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
  heroTopText: 'By the boundless grace of Maa Belon Bhawani',
  heroGroomName: 'Shivam',
  heroGroomParents: 'Grandson of the late Smt. Maya Devi and the late Shri Ram Prasad Gupta,\n\nSon of Smt. Meena Gupta and Shri Satish Babu Gupta,',
  groomIntro: '',
  heroMiddleText: 'with',
  heroBrideName: 'Utsavi',
  heroBrideParents: 'Granddaughter of the late Smt. Kaushalya Devi and the late Shri Kishan Das Goyal,\n\nDaughter of Smt. Mohita Goyal and Shri Neeraj Goyal,',
  heroBottomText: 'We cordially invite you to the wedding celebration organised on this auspicious occasion.',
  brideIntro: '',
  groomGrandFather: '',
  groomGrandMother: '',
  brideGrandFather: '',
  brideGrandMother: '',
  dressCodeHeading: '',
  dressCodeTheme: '',
  dressCodeDescription: '',
  showDressCode: false,
  showCreateYoursButton: true,
  createYoursButtonText: 'Create yours',
  openingBgColor: '#DCE8D3',
  embeddedImageUrl: 'https://cdn.phototourl.com/member/2026-10-28-0089eb4b-4116-4045-9622-b4d7505a0eaa.png',
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
  ogImageUrl: 'https://cdn.phototourl.com/member/2026-10-27-7978b97c-df2c-4616-ad46-0e2813bb91e7.png',
  ganeshaIconUrl: 'https://i.ibb.co/3mCLv4Zf/ganesh-idol-Tuby-Yj-SJ.png',
  musicUrl: 'https://www.image2url.com/r2/default/audio/1785770108745-a5a46950-d478-470f-a009-e4114ad223f9.mp3',
  targetDate: '2026-11-20',
  eventDetails: [
    {
      id: 'event-1',
      heading: 'Haldi Carnival',
      detailsColor: '#C9A15A',
      description: 'Theme: Turquoise',
      date: '19th November 2026',
      time: 'Timing: 11:00 AM onwards | Lunch: 1:00 PM onwards',
      venue: 'The Vasdaa Grand Near Lacchiwala National Park Dehradun',
      imageUrl: 'https://i.ibb.co/4ZdnFx9f/file-000000007c048208a93c5954867ca76e.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: false,
    },
    {
      id: 'event-2',
      heading: 'Engagement & Sangeet',
      detailsColor: '#C9A15A',
      description: 'Musical evening and ring ceremony',
      date: '19th November 2026',
      time: 'Timing: 6:00 PM onwards | Dinner: 8:00 PM onwards',
      venue: 'The Vasdaa Grand Near Lacchiwala National Park Dehradun',
      imageUrl: 'https://i.ibb.co/sp4RP4Zp/Sangeet-bg.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: false,
    },
    {
      id: 'event-3',
      heading: 'Baraat',
      detailsColor: '#C9A15A',
      description: 'Baarat Departure & Celebration',
      date: '20th November 2026',
      time: 'Baarat Departure: 10:00 AM | Lunch: 1:30 PM',
      venue: 'The Vasdaa Grand Near Lacchiwala National Park Dehradun',
      imageUrl: 'https://i.ibb.co/7NC15FJh/Mehndi-bg.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: false,
    },
    {
      id: 'event-4',
      heading: 'Wedding Ceremony',
      detailsColor: '#C9A15A',
      description: 'Sacred vows and celebration',
      date: '20th November 2026',
      time: 'Saptpadi: 4:00 PM | Vidaai: 7:00 PM',
      venue: 'The Vasdaa Grand Near Lacchiwala National Park Dehradun',
      imageUrl: 'https://i.ibb.co/prLDW5Sk/wedding-bg.png',
      directionUrl: 'https://maps.app.goo.gl/QNvJdiknLioym4Cw5?g_st=aw',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: false,
    },
    {
      id: 'event-5',
      heading: 'Reception',
      detailsColor: '#C9A15A',
      description: 'Ladies Sangeet & Reception Feast',
      date: '22nd November 2026',
      time: 'Ladies Sangeet: 2:00 PM | Reception Feast: 7:00 PM',
      venue: 'Rajshree farm house, Narora',
      imageUrl: 'https://i.ibb.co/7NC15FJh/Mehndi-bg.png',
      directionUrl: 'https://www.google.com/maps/search/?api=1&query=Rajshree+farm+house+Narora',
      showDescription: true,
      showDate: true,
      showTime: true,
      showVenue: true,
      showCaricature: false,
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
