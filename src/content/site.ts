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
  accommodation: "Shared two-bedroom villas (working basis)",
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
  short: "Join list",
  note: "20–22 Nov 2026 (to be confirmed) · Montigo Resorts Nongsa",
} as const;

export const seo = {
  title: "Clarity · Brain health weekend at Montigo Resorts Nongsa",
  description: "Know where your brain stands. Leave with a plan. A small-group brain health weekend in Batam. Join the priority list.",
  ogImageAlt: "Clarity: know where your brain stands, leave with a plan.",
} as const;

export const hero = {
  headline: "Know where your brain stands. *Leave with a plan.*",
  lede: "A brain health weekend built on the FINGER trial. Results before you leave. 15–20 places, a short ferry from Singapore.",
  badge: "Based on the FINGER trial",
};

export const problem = {
  heading: "Sharp mind. *Foggy afternoons?*",
  forWho: "For founders, leaders and senior professionals who want to stay sharp.",
  points: ["Focus fades by mid-afternoon", "You wake up tired", "Coffee does the heavy lifting", "You want to stay sharp for decades"],
};

/** The offer stack: every component named, plus a bonus, a guarantee and a real deadline. */
export const offer = {
  heading: "Everything you get.",
  stack: [
    { name: "The Clarity Baseline", text: `Your private ${partners.assessmentName} brain health check, plus clinician-guided heart and metabolic context.` },
    { name: "The FINGER Weekend", text: "Two nights at Montigo. Meals, movement and sessions across all four FINGER areas." },
    { name: "Your Results, Explained", text: "One-to-one, before you leave on Sunday." },
    { name: "The 20-Day Plan", text: "Two habits you choose, short prompts and two group check-ins." },
    { name: "A Soko session in Singapore", text: "Keep the momentum going with the group back home.", bonus: true },
  ],
  promises: ["Results before you leave", "No fitness level needed", "Villa, meals and programme arranged"],
  guarantee: {
    title: "Our promise",
    text: "[Guarantee to decide, e.g. full refund if you cancel 30+ days before, or if you don't leave with a clear plan.]",
  },
  scarcity: "15–20 places only · Bookings open [date]",
  note: "Proposed package. Final details before bookings open.",
};

export type Pillar = { key: string; code: string; title: string; finger: string; what: string };

/**
 * The four FINGER trial areas and what guests actually do for each one.
 * Used by the hero diagram and the FINGER map directly under the hero.
 */
export const areas: Pillar[] = [
  { key: "move", code: "01", finger: "Exercise", title: "Move", what: "Morning walks, mobility and pickleball, at any fitness level." },
  { key: "eat", code: "02", finger: "Diet", title: "Eat well", what: "Chef-led, plant-rich, heart-healthy meals. No calorie counting." },
  { key: "think", code: "03", finger: "Brain training", title: "Think actively", what: `Your private ${partners.assessmentName} baseline and group brain challenges.` },
  { key: "risks", code: "04", finger: "Heart health", title: "Know your risks", what: "Clinician-guided vascular and metabolic context, with CGM where suitable." },
];

/**
 * PLACEHOLDERS: anything in [square brackets] renders highlighted on the page
 * until it is replaced with confirmed, approved details.
 */
export const guides = {
  heading: "Who's guiding you.",
  people: [
    { initials: "GM", name: "[Lead clinician name]", role: "[Title] · Gray Matter Solutions", bio: "[Credentials and one line on their brain health work]", photo: null as string | null },
    { initials: "GM", name: "[Brain health specialist name]", role: "[Title] · Gray Matter Solutions", bio: "[Credentials and one line on their role at Clarity]", photo: null as string | null },
    { initials: "S", name: "[Host name]", role: "[Title] · Soko", bio: "[One line on hosting the weekend and the 20 days after]", photo: null as string | null },
  ],
};

export const measures = {
  heading: "What we measure.",
  items: [
    { name: `${partners.assessmentName} cognitive baseline`, what: "[What it assesses, in Gray Matter Solutions' words]", tag: "Private" },
    { name: "Continuous glucose monitoring", what: "How your glucose responds to real meals over the weekend.", tag: "Where suitable" },
    { name: "Vascular health", what: "[Checks to confirm, e.g. blood pressure]", tag: "Clinician-guided" },
    { name: "Metabolic health", what: "[Checks to confirm]", tag: "Clinician-guided" },
  ],
};

export const weekend = {
  heading: "Three days.",
  timing: "Leave Friday [2pm]. Back in Singapore Sunday [afternoon].",
  days: [
    {
      day: "Fri",
      theme: "Understand",
      line: "Arrive. Get your baseline.",
      sessions: ["Ferry and welcome", "Cognitive baseline", "CGM set-up (where suitable)", "Dinner together"],
    },
    {
      day: "Sat",
      theme: "Experience",
      line: "Move. Eat. Learn. Rest.",
      sessions: ["Morning movement", "Brain health session", "Nutrition with the chef", "Brain challenge", "Free time", "Recovery session", "Dinner together"],
    },
    {
      day: "Sun",
      theme: "Take it home",
      line: "Your results. Your plan.",
      sessions: ["Gentle movement", "Your results, explained", "Pick two habits", "Leave with your 20-day plan"],
    },
  ],
  more: "See the full schedule",
  note: "Proposed programme",
};

export const moments = {
  heading: "Unhurried. *On purpose.*",
  items: [
    { key: "walk", title: "Sunrise walks", tone: "dawn", src: null as string | null, alt: "Guests walking together along the shore at sunrise" },
    { key: "table", title: "Long lunches", tone: "clay", src: null as string | null, alt: "Guests sharing plant-rich dishes at a long table" },
    { key: "quiet", title: "Real rest", tone: "leaf", src: null as string | null, alt: "A guest reading on a villa terrace" },
    { key: "talk", title: "Good company", tone: "dusk", src: null as string | null, alt: "Guests talking together in the evening" },
  ],
};

export const science = {
  heading: "Four areas from the FINGER trial. *One weekend.*",
  study: "FINGER: a two-year randomised trial of 1,260 adults aged 60–77 in Finland (The Lancet, 2015).",
  linkLabel: "Read the study",
  href: "https://pubmed.ncbi.nlm.nih.gov/25771249/",
  // Evidence boundary. Keep it visible wherever the research is mentioned.
  note: "Inspired by FINGER. Clarity doesn't replicate the trial or promise a clinical outcome.",
};

export const faq = [
  { q: "Is this medical treatment?", a: "No. It's a wellness weekend. It doesn't diagnose, treat or prevent anything." },
  { q: "My brain fog is new or severe.", a: "See your doctor first. Brain fog has many causes." },
  { q: "Do I need to be fit?", a: "No. Every session has an easy option." },
  { q: "Is my data private?", a: "Yes. Your results are shared with you, never the group." },
  { q: "Where do I stay?", a: "A shared two-bedroom villa. [Bring a partner, friend or colleague to share with.]" },
  { q: "Are dates and price set?", a: "Not yet. The priority list hears first. Joining is free and doesn't reserve a place." },
];

export const signup = {
  heading: "Get first access.",
  corporate: "Bringing your leadership team? [Email us about group bookings.]",
  text: "Free. No commitment.",
  disclaimer: "Joining doesn't reserve a place.",
  consent: "I agree that Soko may store my name and email to contact me about Clarity. I can ask to be removed at any time.",
  success: { title: "You're on the list.", text: "We'll be in touch when bookings open." },
};

export const footer = {
  boundary: "A wellness experience, not medical care. Details subject to partner confirmation.",
};

export type ImageSlot = { src: string | null; alt: string; needed: string };

export const images = {
  place: {
    src: null,
    alt: "Morning light over the sea from a villa terrace at Montigo Resorts Nongsa",
    needed: "Villa terrace or pool at golden hour, sea horizon",
  },
} satisfies Record<string, ImageSlot>;

export const nav = [
  { href: "#science", label: "The science" },
  { href: "#offer", label: "What you get" },
  { href: "#weekend", label: "The weekend" },
  { href: "#faq", label: "FAQ" },
];
