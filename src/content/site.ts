/**
 * Clarity — all changeable facts live here.
 *
 * Edit this file to update dates, venue, partners, copy, programme, FAQ and
 * pricing. Nothing else in the codebase should hard-code these details.
 *
 * Anything marked `confirmed: false` is still a working detail until all
 * partners sign off. Keep `showPricing` false until prices are approved.
 */

export const event = {
  name: "Clarity",
  tagline: "An executive brain health retreat",
  dates: {
    display: "20–22 November 2026",
    eyebrow: "20–22 NOVEMBER 2026",
    startISO: "2026-11-20",
    endISO: "2026-11-22",
    confirmed: false,
  },
  venue: {
    name: "Montigo Resorts Nongsa",
    short: "Montigo Resorts Nongsa",
    location: "Nongsa, Batam, Indonesia",
    travel: "A short ferry ride from Tanah Merah, Singapore, to Nongsapura",
  },
  groupSize: { min: 15, max: 20 },
  format: "Three days, two nights",
  followThroughDays: 20,
  homeCity: "Singapore",
} as const;

export const partners = {
  organiser: { name: "Soko", role: "Organised by" },
  hospitality: { name: "Montigo", fullName: "Montigo Resorts", role: "Hospitality partner" },
  brainHealth: { name: "Gray Matter Solutions", short: "GMS", role: "Brain health partner" },
  assessmentName: "ReCOGnAIze",
} as const;

export const contact = {
  // TODO: replace with the real inbox before launch.
  email: "hello@soko.example",
  confirmed: false,
};

export const pricing = {
  /** Keep false until every partner approves costs and inclusions. */
  showPricing: false,
  currency: "S$",
  founding: { price: 998, places: 5, label: "Founding place" },
  standard: { price: 1500, label: "Standard place" },
  basis: "Per person, shared two-bedroom villa",
  hiddenMessage: "Join the priority list for first access when bookings open.",
} as const;

export const cta = {
  primary: "Join the priority list",
  secondary: "Explore the experience",
  note: "15–20 places planned · Dates and package subject to partner confirmation",
} as const;

export const seo = {
  title: "Clarity — an executive brain health retreat · Montigo Resorts Nongsa",
  description:
    "A small-group, three-day brain health retreat at Montigo Resorts Nongsa, Batam, organised by Soko with Gray Matter Solutions. Join the priority list.",
  ogImageAlt: "Clarity — a different kind of weekend for your brain.",
} as const;

export const hero = {
  headline: "A different kind of weekend for your brain.",
  lede: "Clarity brings science, movement, food and good company together in a small-group executive brain health retreat.",
};

export const idea = {
  kicker: "The idea",
  line: "Understand more. Do more. Keep going together.",
  paragraphs: [
    "Brain health is shaped less by a single breakthrough than by everyday habits — how we move, eat, think, sleep and spend time with other people.",
    "Rather than another talk about those habits, Clarity lets you live them for a weekend, in good company, somewhere beautiful.",
    `It starts with private insight into where you are now. It ends with a short, achievable plan to take home to ${event.homeCity}.`,
  ],
};

export type Pillar = { key: string; title: string; summary: string; details: string[] };

export const science = {
  kicker: "The science becomes the schedule",
  heading: "Four everyday domains, built into the weekend.",
  intro:
    "Research into brain health points to several areas of daily life that work together. Clarity turns each of them into something you actually do.",
  pillars: [
    {
      key: "move",
      title: "Move",
      summary: "Movement you'll want to repeat.",
      details: ["Morning walks and mobility", "Pickleball, or an accessible alternative", "Options for every fitness level"],
    },
    {
      key: "eat",
      title: "Eat well",
      summary: "Food that is generous, not restrictive.",
      details: ["Chef-led, plant-rich menus", "Heart-healthy choices explained", "Shared tables, no calorie counting"],
    },
    {
      key: "think",
      title: "Think actively",
      summary: "A private baseline and a good challenge.",
      details: [
        `Private ${partners.assessmentName} cognitive baseline`,
        "Separate, sociable group cognitive challenges",
        "Your results stay yours",
      ],
    },
    {
      key: "risks",
      title: "Know your risks",
      summary: "Health context, guided by clinicians.",
      details: [
        "Clinician-guided vascular and metabolic context",
        "Continuous glucose monitoring (CGM) where suitable",
        "Plain-language explanations, no alarm",
      ],
    },
  ] satisfies Pillar[],
  thread: {
    title: "Running through it all",
    text: "Good company and proper rest. Shared meals, unhurried conversation, downtime and sleep are woven through every day — part of the experience, not a treatment.",
  },
  evidence: {
    text: "Inspired by multidomain brain health research, including the two-year FINGER trial. This retreat introduces practical habits; it does not replicate that intervention or promise a clinical outcome.",
    linkLabel: "Read the FINGER study (The Lancet, 2015)",
    href: "https://pubmed.ncbi.nlm.nih.gov/25771249/",
  },
};

export type Day = { day: string; date: string; theme: string; summary: string; moments: string[] };

export const weekend = {
  kicker: "The weekend",
  heading: "Three days, one arc.",
  status: "Proposed programme · timings and sessions to be confirmed with partners",
  days: [
    {
      day: "Friday",
      date: "20 Nov",
      theme: "Understand",
      summary: "Arrive, settle in and get a private picture of where you are.",
      moments: [
        "Ferry from Singapore and a warm welcome at Montigo",
        "Private cognitive baseline",
        "CGM onboarding, where suitable",
        "Shared dinner",
      ],
    },
    {
      day: "Saturday",
      date: "21 Nov",
      theme: "Experience",
      summary: "A full, unhurried day of doing — with plenty of time to yourself.",
      moments: [
        "Your choice of morning movement",
        "Brain health session",
        "Chef-led nutrition discussion",
        "Social cognitive challenge",
        "Personal downtime at the resort",
        "Recovery session",
        "Shared dinner",
      ],
    },
    {
      day: "Sunday",
      date: "22 Nov",
      theme: "Take it home",
      summary: "Make sense of it all and choose what comes next.",
      moments: [
        "Gentle movement",
        "Private interpretation of your insights",
        "Choose two habits to keep",
        "Depart with your 20-day plan",
      ],
    },
  ] satisfies Day[],
  leisureNote: "Every day leaves room for the pool, the beach, a nap or a book. The resort is part of the programme.",
};

export const insight = {
  kicker: "Personal insight, handled with care",
  heading: "Your information, explained in plain language.",
  items: [
    {
      title: "A private baseline",
      text: `A short ${partners.assessmentName} cognitive assessment gives you a personal starting point. It is shared with you privately — never on a leaderboard, never with the group.`,
    },
    {
      title: "Relevant health context",
      text: "Clinicians help you understand vascular and metabolic factors that matter for long-term brain health, and what is within your control.",
    },
    {
      title: "Glucose, in context",
      text: "Where CGM is suitable, readings are discussed in context. They do not diagnose disease, and one meal never makes a food good or bad.",
    },
    {
      title: "A practical take-home summary",
      text: "You leave with a short, readable summary and two habits you have chosen yourself — not a stack of numbers.",
    },
  ],
  boundary:
    "Clarity is a wellness experience, not medical treatment or diagnosis. If anything warrants follow-up, we'll suggest you speak with your own doctor.",
};

export const people = {
  kicker: "The place and the people",
  heading: "Three partners, one weekend.",
  roles: [
    {
      name: partners.hospitality.fullName,
      role: partners.hospitality.role,
      text: "The setting: villas by the sea, the kitchen, spaces to move, and the quiet hospitality that makes a weekend feel like a proper break.",
    },
    {
      name: partners.brainHealth.name,
      role: partners.brainHealth.role,
      text: "The science: the cognitive baseline, brain health sessions and clinician-guided context, delivered with care.",
    },
    {
      name: partners.organiser.name,
      role: partners.organiser.role,
      text: "The journey: curating the weekend, hosting the group and staying with you through the 20 days that follow.",
    },
  ],
};

export const after = {
  kicker: "What happens after Batam",
  heading: "The weekend ends. The habits don't have to.",
  intro:
    "The hardest part of any retreat is Monday. So Clarity continues for 20 days after you get home, helping you put your two chosen habits into practice.",
  steps: [
    { label: "Short prompts", text: "Brief, friendly nudges tied to the two habits you chose." },
    { label: "Two group check-ins", text: "Reconnect with the people you met and compare notes." },
    { label: "A local invitation", text: `An invitation to a Soko activity in ${event.homeCity}, so the momentum has somewhere to go.` },
  ],
  // Keep this honest: describe the channel that will actually exist at launch.
  channelNote: "Delivered by email and message; the exact format will be confirmed before bookings open.",
};

export const faq = [
  {
    q: "Who is this for?",
    a: "Executives and professionals, broadly aged 40 to 60, who care about long-term health and want a weekend with real substance. The group is kept small — 15 to 20 people.",
  },
  {
    q: "Do I need to be fit?",
    a: "No. Every movement session has an accessible option, and you choose what suits you. The aim is to find things you'll enjoy repeating, not to test you.",
  },
  {
    q: "Is this medical treatment?",
    a: "No. Clarity is a wellness experience informed by brain health research. The assessments give personal insight and context; they do not diagnose, treat or prevent any condition. If anything warrants follow-up, we'll suggest you speak with your own doctor.",
  },
  {
    q: "Will I share a villa?",
    a: "The working plan is shared two-bedroom villas, with two guests per villa. Room arrangements and any private options can't be promised until Montigo confirms them.",
  },
  {
    q: "What is included?",
    a: "The proposed package covers accommodation, meals, the full programme, your private cognitive baseline, health context sessions and the 20-day follow-through. Final inclusions — including transport and CGM — will be confirmed before bookings open.",
  },
  {
    q: "How do I join?",
    a: "Join the priority list below. You'll hear first when bookings open, with confirmed details. Joining doesn't commit you to anything, and it doesn't reserve a place.",
  },
];

export const signup = {
  kicker: "Priority list",
  heading: "Be first to hear when bookings open.",
  text: "Places are limited to a small group. Leave your name and email and we'll send confirmed dates, programme and pricing before anyone else.",
  disclaimer: "Joining the priority list does not reserve a place or commit you to booking.",
  consent:
    "I agree that Soko may store my name and email to contact me about Clarity. I can ask to be removed at any time.",
  success: {
    title: "You're on the list.",
    text: "Thank you. We'll be in touch when bookings open. Joining doesn't reserve a place — but you'll hear first.",
  },
};

export const footer = {
  boundary:
    "Clarity is a wellness experience informed by brain health research. It is not medical care and does not diagnose, treat or prevent any condition. Programme, dates and inclusions are subject to partner confirmation.",
};

/**
 * Image slots. Add approved, licensed photos to /public/images and set `src`.
 * While `src` is null, the page renders a designed placeholder that names the
 * shot we still need. Do not use photos copied from partner websites.
 */
export type ImageSlot = { src: string | null; alt: string; needed: string };

export const images = {
  hero: {
    src: null,
    alt: "Morning light over the sea from a villa terrace at Montigo Resorts Nongsa",
    needed: "Villa terrace at golden hour, sea horizon",
  },
  place: {
    src: null,
    alt: "A villa at Montigo Resorts Nongsa among tropical planting",
    needed: "Villa exterior or pool, warm light",
  },
  food: {
    src: null,
    alt: "A shared table of plant-rich dishes",
    needed: "Long table, plant-rich dishes, hands reaching in",
  },
  move: {
    src: null,
    alt: "Guests walking together along the shoreline",
    needed: "Small group walking on the beach, early morning",
  },
} satisfies Record<string, ImageSlot>;

export const nav = [
  { href: "#idea", label: "The idea" },
  { href: "#programme", label: "Programme" },
  { href: "#weekend", label: "The weekend" },
  { href: "#faq", label: "FAQ" },
];
