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
  secondary: "See what you get",
  note: "15–20 places · Dates and package subject to partner confirmation",
} as const;

export const seo = {
  title: "Clarity · Brain health weekend at Montigo Resorts Nongsa",
  description:
    "Know where your brain stands. Leave with a plan. A small-group brain health weekend at Montigo Resorts Nongsa, Batam. Join the priority list.",
  ogImageAlt: "Clarity: know where your brain stands, leave with a plan.",
} as const;

export const hero = {
  headline: "Know where your brain stands. *Leave with a plan.*",
  lede: "One weekend at Montigo Resorts Nongsa. A private brain health baseline, expert guidance, and a 20-day plan built around two habits.",
};

export const audience = {
  kicker: "Who it's for",
  heading: "Sharp mind. *Foggy afternoons?*",
  intro: "Long weeks and short nights add up. Clarity helps you see what's behind the fog, and what to change.",
  forYou: [
    "Your focus fades by mid-afternoon",
    "You wake up tired",
    "Coffee is doing the heavy lifting",
    "You want facts, not guesses",
    "You want to stay sharp for decades",
  ],
  notFor: ["You need a diagnosis or treatment", "You want a quick fix", "You want a spa weekend"],
  note: "Brain fog has many causes. New, sudden or worrying symptoms? See your doctor first.",
};

export type Tag = "Private" | "Group" | "Your choice" | "Where suitable" | "Free time" | "Take-home";
export type Item = { label: string; tag?: Tag };
export type Pillar = { key: string; code: string; title: string; domain: string; summary: string; details: Item[] };

/** The at-a-glance strip under the hero: time, outcome, credibility, group. */
export const specs = [
  { label: "Time away", value: "Friday to Sunday", detail: "Short ferry from Singapore" },
  { label: "You get", value: "Your baseline + a plan", detail: "Private results. Two habits. 20 days of support." },
  { label: "Science by", value: "Gray Matter Solutions", detail: "Clinician-guided" },
  { label: "Group", value: "15–20 people", detail: "No fitness level needed" },
];

export const science = {
  kicker: "The programme",
  heading: "Four areas. *One weekend.*",
  intro: "Research points to four areas that shape brain health. You'll practise all four.",
  pillars: [
    {
      key: "move",
      code: "01",
      title: "Move",
      domain: "Physical activity",
      summary: "Movement you'll repeat at home.",
      details: [
        { label: "Morning walk and mobility", tag: "Group" },
        { label: "Pickleball or an easier option", tag: "Your choice" },
        { label: "Any fitness level" },
      ],
    },
    {
      key: "eat",
      code: "02",
      title: "Eat well",
      domain: "Nutrition",
      summary: "Generous food, not a diet.",
      details: [
        { label: "Chef-led, plant-rich menus", tag: "Group" },
        { label: "Heart-healthy choices, explained" },
        { label: "No calorie counting" },
      ],
    },
    {
      key: "think",
      code: "03",
      title: "Think actively",
      domain: "Cognitive activity",
      summary: "A private baseline. A social challenge.",
      details: [
        { label: `${partners.assessmentName} baseline`, tag: "Private" },
        { label: "Group brain challenges", tag: "Group" },
        { label: "Your results stay yours" },
      ],
    },
    {
      key: "risks",
      code: "04",
      title: "Know your risks",
      domain: "Heart and metabolic health",
      summary: "Your health context, explained.",
      details: [
        { label: "Vascular and metabolic context", tag: "Private" },
        { label: "Glucose monitoring (CGM)", tag: "Where suitable" },
        { label: "Plain language. No alarm." },
      ],
    },
  ] satisfies Pillar[],
  thread: {
    title: "Built in, every day",
    text: "Good company and proper rest.",
  },
  evidence: {
    text: "Inspired by multidomain brain health research, including the two-year FINGER trial. This retreat introduces practical habits; it does not replicate that intervention or promise a clinical outcome.",
    linkLabel: "Read the FINGER study (The Lancet, 2015)",
    href: "https://pubmed.ncbi.nlm.nih.gov/25771249/",
  },
};

/** Published facts about the reference study. Keep these exact; they are cited. */
export const research = {
  kicker: "The science",
  heading: "Built on research. *Honest about limits.*",
  intro: "Clarity is structured around the four areas the FINGER trial tested together.",
  study: {
    name: "FINGER",
    fullName: "Finnish Geriatric Intervention Study to Prevent Cognitive Impairment and Disability",
    citation: "Ngandu et al., The Lancet, 2015",
    facts: [
      { label: "Design", value: "Randomised controlled trial" },
      { label: "Participants", value: "1,260 adults aged 60–77 in Finland, at increased risk" },
      { label: "Duration", value: "2 years" },
      { label: "Areas", value: "Diet · Exercise · Brain training · Heart health monitoring" },
    ],
  },
  takes: ["The four areas", "Doing, not just hearing", "A plan for home"],
  doesNot: ["Replicate a two-year trial", "Promise to prevent dementia", "Diagnose or treat anything"],
};

export type Day = { code: string; day: string; date: string; theme: string; summary: string; moments: Item[] };

export const weekend = {
  kicker: "The weekend",
  heading: "Three days. *Here's the plan.*",
  status: "Proposed programme · to be confirmed",
  days: [
    {
      code: "Day 01",
      day: "Friday",
      date: "20 Nov",
      theme: "Understand",
      summary: "Arrive. Get your baseline.",
      moments: [
        { label: "Ferry and welcome", tag: "Group" },
        { label: "Cognitive baseline", tag: "Private" },
        { label: "CGM set-up", tag: "Where suitable" },
        { label: "Dinner together", tag: "Group" },
      ],
    },
    {
      code: "Day 02",
      day: "Saturday",
      date: "21 Nov",
      theme: "Experience",
      summary: "Move. Eat. Learn. Rest.",
      moments: [
        { label: "Morning movement", tag: "Your choice" },
        { label: "Brain health session", tag: "Group" },
        { label: "Nutrition with the chef", tag: "Group" },
        { label: "Brain challenge", tag: "Group" },
        { label: "Free time at the resort", tag: "Free time" },
        { label: "Recovery session", tag: "Group" },
        { label: "Dinner together", tag: "Group" },
      ],
    },
    {
      code: "Day 03",
      day: "Sunday",
      date: "22 Nov",
      theme: "Take it home",
      summary: "Your results. Your plan.",
      moments: [
        { label: "Gentle movement", tag: "Group" },
        { label: "Your results, explained", tag: "Private" },
        { label: "Pick two habits", tag: "Private" },
        { label: "Leave with a 20-day plan", tag: "Take-home" },
      ],
    },
  ] satisfies Day[],
  leisureNote: "Plenty of free time. The resort is part of the programme.",
};

export const insight = {
  kicker: "Your data",
  heading: "Private. Clear. *No alarm.*",
  items: [
    { label: "Baseline", title: "Private baseline", text: "Shared with you. Never ranked, never shown to the group." },
    { label: "Context", title: "Health context", text: "What matters for long-term brain health, and what you control." },
    { label: "CGM", title: "Glucose, in context", text: "Not a diagnosis. One meal never makes a food bad." },
    { label: "Summary", title: "A short summary", text: "Plain language. Two habits you chose." },
  ],
  boundary: "A wellness experience, not medical care. If anything needs follow-up, we'll point you to your doctor.",
};

export const people = {
  kicker: "Who's behind it",
  heading: "Three partners. *One weekend.*",
  roles: [
    { name: partners.hospitality.fullName, role: partners.hospitality.role, text: "The setting. Villas by the sea, food, space to move." },
    { name: partners.brainHealth.name, role: partners.brainHealth.role, text: "The science. Your baseline, the sessions, clinician-guided context." },
    { name: partners.organiser.name, role: partners.organiser.role, text: "The host. Runs the weekend and the 20 days after." },
  ],
};

export const included = {
  kicker: "What you get",
  heading: "One package. *Before, during, after.*",
  status: "Proposed · final package confirmed before bookings open",
  phases: [
    {
      when: "Before",
      title: "Ready to go",
      items: [
        { label: "Programme and travel details" },
        { label: "CGM suitability check", tag: "Where suitable" },
        { label: "One contact for questions" },
      ],
    },
    {
      when: "The weekend",
      title: "Two nights at Montigo",
      items: [
        { label: "Shared two-bedroom villa" },
        { label: "All meals" },
        { label: "The full programme", tag: "Group" },
        { label: `${partners.assessmentName} baseline`, tag: "Private" },
        { label: "Clinician-guided health context", tag: "Private" },
        { label: "Glucose monitoring", tag: "Where suitable" },
      ],
    },
    {
      when: "20 days after",
      title: "Keep it going",
      items: [
        { label: "Your summary", tag: "Take-home" },
        { label: "Short prompts for your two habits" },
        { label: "Two group check-ins", tag: "Group" },
        { label: "A Soko activity in Singapore" },
      ],
    },
  ] satisfies { when: string; title: string; items: Item[] }[],
  // Keep this honest: list what isn't confirmed, including how follow-up is delivered.
  toConfirm: ["Ferry and transfers", "Private rooms", "Follow-up format", "Price"],
};

export const faq = [
  { q: "Who is this for?", a: "Executives and professionals, roughly 40–60, who want to stay sharp. 15–20 people." },
  { q: "Do I need to be fit?", a: "No. Every session has an easier option." },
  { q: "Is this medical treatment?", a: "No. It's a wellness experience. It doesn't diagnose, treat or prevent any condition." },
  { q: "Is my data private?", a: "Yes. Your results are shared with you, never with the group." },
  { q: "Will I share a villa?", a: "Yes, that's the plan: two guests per two-bedroom villa. Private options aren't confirmed yet." },
  { q: "What's included?", a: "See \"What you get\" above. Transfers, private rooms and price are still being confirmed." },
  { q: "How do I join?", a: "Join the priority list. You'll hear first when bookings open. No commitment, and it doesn't reserve a place." },
];

export const signup = {
  kicker: "Priority list",
  heading: "Get first access. *No commitment.*",
  text: "Name and email. You'll get dates, programme and price before anyone else.",
  disclaimer: "Joining doesn't reserve a place.",
  consent: "I agree that Soko may store my name and email to contact me about Clarity. I can ask to be removed at any time.",
  success: {
    title: "You're on the list.",
    text: "We'll be in touch when bookings open.",
  },
};

export const footer = {
  boundary:
    "A wellness experience informed by brain health research. Not medical care. Programme, dates and inclusions subject to partner confirmation.",
};

/**
 * Moments: the human side of the weekend. Shown as soft cards until real,
 * licensed photography arrives. Aim for a mixed group of men and women,
 * roughly 40 to 60, doing the actual activities.
 */
export const moments = {
  kicker: "How it feels",
  heading: "Precise science. *Unhurried weekend.*",
  intro: "Early walks. Long meals. Good people. Real rest.",
  items: [
    { key: "walk", title: "Sunrise walk", caption: "Move", tone: "dawn", src: null as string | null, alt: "Guests walking together along the shore at sunrise" },
    { key: "table", title: "Long lunch", caption: "Eat", tone: "clay", src: null as string | null, alt: "Guests sharing plant-rich dishes at a long table" },
    { key: "quiet", title: "Your own time", caption: "Rest", tone: "leaf", src: null as string | null, alt: "A guest reading on a villa terrace" },
    { key: "talk", title: "Good company", caption: "Connect", tone: "dusk", src: null as string | null, alt: "Guests talking together in the evening" },
  ],
};

/**
 * Image slots. Add approved, licensed photos to /public/images and set `src`.
 * While `src` is null, the page renders a designed placeholder that names the
 * shot we still need. Do not use photos copied from partner websites.
 */
export type ImageSlot = { src: string | null; alt: string; needed: string };

export const images = {
  place: {
    src: null,
    alt: "Morning light over the sea from a villa terrace at Montigo Resorts Nongsa",
    needed: "Villa terrace or pool at golden hour, sea horizon",
  },
} satisfies Record<string, ImageSlot>;

export const nav = [
  { href: "#audience", label: "Who it's for" },
  { href: "#included", label: "What you get" },
  { href: "#weekend", label: "The weekend" },
  { href: "#programme", label: "Programme" },
  { href: "#faq", label: "FAQ" },
];
