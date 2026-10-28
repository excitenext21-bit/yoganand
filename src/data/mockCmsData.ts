// Mock Headless CMS Data Engine
// Represents the Content Schema from Sanity / Payload CMS

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  category: 'Matri Seva' | 'Healthcare' | 'Heart Of Seva' | 'Animal Welfare' | 'Nutrition';
  tagline: string;
  description: string;
  image: string;
  impactMetric: string;
  beneficiariesCount: string;
  monthlyGoal: number;
  raisedAmount: number;
  details: string[];
}

export interface MatajiStory {
  id: string;
  name: string;
  age: number;
  origin: string;
  quote: string;
  background: string;
  image: string;
  supportedSince: string;
  program: string;
}

export interface DonorRecord {
  id: string;
  date: string;
  donorName: string;
  email: string;
  phone: string;
  panNumber: string;
  amount: number;
  currency: 'INR' | 'USD';
  program: string;
  paymentMode: 'UPI' | 'Credit Card' | 'NetBanking' | 'Razorpay' | 'Razorpay (UPI/Cards)' | 'Razorpay International';
  receipt80GNumber: string;
  status: 'Captured' | 'Pending';
}

export const initialPrograms: ProgramItem[] = [
  {
    id: 'prog-1',
    slug: 'matri-seva-ashram',
    title: 'Matri Seva Ashram',
    category: 'Matri Seva',
    tagline: 'A Sanctum of Lifelong Shelter, Care & Spiritual Peace',
    description: 'Providing safe, dignified residential living, comfortable bedding, and round-the-clock loving care for elderly destitute Matas who have no family or home.',
    image: '/images/hero-seva.jpg',
    impactMetric: '280+ Mothers',
    beneficiariesCount: '280 Residents',
    monthlyGoal: 450000,
    raisedAmount: 382000,
    details: [
      '24/7 Caregivers and dedicated nurses',
      'Clean, comfortable individual living quarters',
      'Daily morning and evening prayer gatherings',
      'Warm seasonal bedding and clothing support'
    ]
  },
  {
    id: 'prog-2',
    slug: 'matri-seva-community',
    title: 'Matri Seva Community (Ashram Without Walls)',
    category: 'Matri Seva',
    tagline: 'Supporting Matas Right in Their Rented Rooms Across Vrindavan',
    description: 'Over 1,200 elderly Matas choose to reside independently in humble quarters across Vrindavan and Radhakund. We deliver monthly rations, fresh milk, vegetables, and living stipends directly to their doorsteps.',
    image: '/images/matri-seva.jpg',
    impactMetric: '1,200+ Matas',
    beneficiariesCount: '1,200+ Registered',
    monthlyGoal: 850000,
    raisedAmount: 764000,
    details: [
      'Monthly door-to-door grocery & ration kits',
      'Daily pure milk and fresh vegetable distribution',
      'Direct monthly rental stipends',
      'Solar lanterns and seasonal heating aid'
    ]
  },
  {
    id: 'prog-3',
    slug: 'aarogyavardhan',
    title: 'Aarogyavardhan Medical Program',
    category: 'Healthcare',
    tagline: 'Free Multispecialty Medical, Bedside & Surgical Care',
    description: 'Committed to making comprehensive healthcare completely free for destitute women and sadhus. Covers regular OPD consultations, chronic medicines for diabetes and hypertension, major surgeries, and cancer treatments.',
    image: '/images/aarogyavardhan.jpg',
    impactMetric: '5,600+ Surgeries & OPDs',
    beneficiariesCount: '5,600+ Patients',
    monthlyGoal: 600000,
    raisedAmount: 512000,
    details: [
      'Free OPD consultations with specialized doctors',
      'Free monthly supplies of chronic medications',
      'Sponsored cataract and vision-restoring surgeries',
      'Emergency bedside hospice and palliative care'
    ]
  },
  {
    id: 'prog-4',
    slug: 'pashu-seva',
    title: 'Pashu Seva (Animal Welfare)',
    category: 'Animal Welfare',
    tagline: 'Sacred Cow Seva & Stray Animal Rescue in Holy Vrindavan',
    description: 'Extending compassion to Vrindavan’s sacred cows, abandoned calves, and street animals. We provide daily fresh green fodder, veterinary medical treatments, and shelter for injured animals.',
    image: '/images/pashu-seva.jpg',
    impactMetric: '480+ Animals Daily',
    beneficiariesCount: '480 Animals',
    monthlyGoal: 250000,
    raisedAmount: 215000,
    details: [
      'Daily fresh green grass, jaggery, and fodder for Gaushala cows',
      'On-call veterinary medical emergency care',
      'Sterilization, vaccination, and rabies prevention',
      'Winter protective coats and bedding for street animals'
    ]
  },
  {
    id: 'prog-5',
    slug: 'meal-heals',
    title: 'Meal Heals (Annapurna Seva)',
    category: 'Nutrition',
    tagline: 'Pure, Sattvic Daily Nutrition Prepared with Devotion',
    description: 'Hot, hygienic, nutritious vegetarian meals cooked fresh in our ashram kitchen every morning. Delivered to impoverished mothers, disabled sadhus, and pilgrimage seekers who cannot cook for themselves.',
    image: '/images/meal-heals.jpg',
    impactMetric: '3,200+ Meals Daily',
    beneficiariesCount: '3,200 Daily Plates',
    monthlyGoal: 400000,
    raisedAmount: 391000,
    details: [
      'Pure ghee, pulses, grains, and seasonal vegetables',
      'Special soft, low-spice diets for elderly mothers',
      'Hygienic stainless-steel delivery containers',
      'Festival special feast distributions'
    ]
  },
  {
    id: 'prog-6',
    slug: 'circle-of-love',
    title: 'Circle of Love & Emotional Well-Being',
    category: 'Heart Of Seva',
    tagline: 'Eradicating Loneliness Through Devotional Fellowship',
    description: 'A dedicated initiative to combat the silent epidemic of loneliness. Volunteers connect regularly via phone calls, community kirtans, festive celebrations, and hand-crafting sessions.',
    image: '/images/circle-of-love.jpg',
    impactMetric: '750+ Connections',
    beneficiariesCount: '750+ Mothers',
    monthlyGoal: 150000,
    raisedAmount: 142000,
    details: [
      'Weekly devotional chanting and Bhajan circles',
      'International companion phone-buddy system',
      'Festive celebration of Holi, Diwali & Raksha Bandhan',
      'Garland making and therapeutic craft activities'
    ]
  }
];

export const initialStories: MatajiStory[] = [
  {
    id: 'story-aalo-maa',
    name: 'Aalo Maa',
    age: 74,
    origin: 'Gurgaon & Vrindavan',
    quote: 'I had a ruptured urinary system. I came to Vrindavan and lived under a neem tree. One day, a Sevak took me to the Ashram. They took me to a hospital in Gurgaon for treatment.',
    background: '“My parents didn’t help me. My family abandoned me out of worry and shame. Who would take care of a sick person? I have no one else in the world except for the staff of the Yogananda Trust. They are my mother, my father, my everything.”',
    image: '/images/aalo-maa.jpg',
    supportedSince: '2019',
    program: 'Aarogyavardhan Healthcare & Ashram Care'
  },
  {
    id: 'story-bhakti-manaa',
    name: 'Bhakti Manaa Maa',
    age: 78,
    origin: 'West Bengal',
    quote: 'After my husband threw me out, I returned to my brother’s house. The community shunned me. With the blessings of Guruji and Radha Rani, I came straight to the care home of the Yogananda Trust.',
    background: '“My brother and sister don’t call me, and neither do I. I want to forget that life and those connections. I am very happy here, and I am going to be here till I die. I feel blessed that the Yogananda Trust will do my death rites with utmost sincerity, love, and compassion.”',
    image: '/images/bhakti-manaa-maa.jpg',
    supportedSince: '2017',
    program: 'Matri Seva Ashram Haven'
  },
  {
    id: 'story-pushpa-daasi',
    name: 'Pushpa Daasi Maa',
    age: 80,
    origin: 'Uttar Pradesh',
    quote: 'My husband became a sadhu & left me alone. I came to Vrindavan, rented a place & started living with the blessing of my "Thakur" (God).',
    background: '“I had unofficially adopted a child who acted like a loving son. But he cheated me out of my property by getting me to sign papers and threw me out. I lived on the streets, ate whatever I got by begging until I collapsed. Now the Trust gives me warm food, care, and loving family dignity.”',
    image: '/images/pushpa-daasi-maa.jpg',
    supportedSince: '2019',
    program: 'Matri Seva Community & Rations'
  },
  {
    id: 'story-deepali-maa',
    name: 'Deepali Maa',
    age: 71,
    origin: 'Vrindavan',
    quote: 'An Ashram without walls is what I feel the Yogananda Trust is. It feels like one big family. They treat me like their own.',
    background: '“I am assured of my daily supply of milk, vegetables and even my monthly ration. They take me to the hospital, get my OPD card made and bring me medicines. I wouldn’t get admission to the hospital if it weren’t for them.”',
    image: '/images/deepali-maa.jpg',
    supportedSince: '2020',
    program: 'Matri Seva Doorstep Healthcare'
  },
  {
    id: 'story-dulal-baba',
    name: 'Dulal Baba',
    age: 82,
    origin: 'Vrindavan Dham',
    quote: 'The story of Dulal Baba and His last Wish: "I don’t know, I have to eat Rajbhog only. Go to the market and buy from the shop and bring me Rajbhog."',
    background: 'Like a small child insisting on his favorite treat, Dulal Baba insisted on Rajbhog while hospitalized. When hospital rules restricted outside sweets, our team immediately arranged fresh Rajbhog within half an hour, bringing unconditional joy to Baba in his fragile days.',
    image: '/images/dulal-baba.jpg',
    supportedSince: '2018',
    program: 'Palliative Care & Special Seva'
  }
];

export const officeLocations = {
  vrindavan: {
    title: 'Head Office (Vrindavan)',
    type: 'Head Office & Seva Kendra',
    address: '235 Radha Niwas, Near Old Bus Stand, Vrindavan - 281121',
    phone: '+91 8433147393 / +91 86509 11000',
    email: 'communication@yoganandatrust.org',
    hours: 'Monday – Sunday: 8:00 AM – 7:00 PM',
    mapUrl: 'https://www.google.com/maps/place/Radha+Niwas,+Mathura+-+Vrindavan+Marg,+Gaura+Nagar+Colony,+Vrindavan,+Uttar+Pradesh+281121/@27.5756659,77.6936576,17z/data=!4m10!1m2!2m1!1s235+Radha+Niwas,+Near+Old+Bus+Stand,+Vrindavan+-+281121!3m6!1s0x39736e325e70f83b:0x6c54812cc825f207!8m2!3d27.5756612!4d77.6962325!15sCjcyMzUgUmFkaGEgTml3YXMsIE5lYXIgT2xkIEJ1cyBTdGFuZCwgVnJpbmRhdmFuIC0gMjgxMTIxkgEUcmVzaWRlbnRpYWxfYnVpbGRpbmfgAQA!16s%2Fg%2F11c5bl0tsw?entry=ttu',
    mapQuery: '235 Radha Niwas, Near Old Bus Stand, Vrindavan - 281121'
  },
  delhi: {
    title: 'Registered Office (New Delhi)',
    type: 'Registered Legal Office',
    address: '4th Floor, Gopal Das Bhawan, 28, Barakhamba Road, New Delhi - 110001',
    phone: '+91 8433147393 / +91 86509 11000',
    email: 'communication@yoganandatrust.org',
    hours: 'Monday – Friday: 9:30 AM – 6:00 PM',
    mapUrl: 'https://maps.google.com/?q=4th+Floor+Gopal+Das+Bhawan+28+Barakhamba+Road+New+Delhi+110001',
    mapQuery: '4th Floor, Gopal Das Bhawan, 28, Barakhamba Road, New Delhi - 110001'
  }
};

export const sampleDonors: DonorRecord[] = [
  {
    id: 'TXN-98214',
    date: '2026-10-18',
    donorName: 'Vikramaditya Sharma',
    email: 'vikram.sharma@gmail.com',
    phone: '+91 98201 44512',
    panNumber: 'ABCPS1234F',
    amount: 10000,
    currency: 'INR',
    program: 'Aarogyavardhan (Cataract Surgery)',
    paymentMode: 'UPI',
    receipt80GNumber: 'PYT/80G/2026/0412',
    status: 'Captured'
  },
  {
    id: 'TXN-98215',
    date: '2026-10-17',
    donorName: 'Ananya Deshmukh',
    email: 'ananya.d@outlook.com',
    phone: '+91 94220 89100',
    panNumber: 'BKRPA9876K',
    amount: 3000,
    currency: 'INR',
    program: 'Matri Seva Community (Monthly Kit)',
    paymentMode: 'NetBanking',
    receipt80GNumber: 'PYT/80G/2026/0413',
    status: 'Captured'
  },
  {
    id: 'TXN-98216',
    date: '2026-10-16',
    donorName: 'Michael R. Henderson',
    email: 'm.henderson@usa.net',
    phone: '+1 415 890 2211',
    panNumber: 'FCRA-USA-9021',
    amount: 150,
    currency: 'USD',
    program: 'Meal Heals & Animal Seva',
    paymentMode: 'Credit Card',
    receipt80GNumber: 'PYT/FCRA/2026/0098',
    status: 'Captured'
  }
];
