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

export const audience = {
  kicker: "Who it's for",
  heading: "For sharp people who've started to notice the fog.",
  intro:
    "Long weeks, short nights and back-to-back decisions add up. If your focus slips by mid-afternoon, or you simply want to protect the brain your work depends on, Clarity helps you see what's driving it and which everyday habits you can change.",
  forYou: [
    "Your focus fades faster than it used to, especially later in the day",
    "You wake up tired, or lean on caffeine to feel sharp",
    "You want to know where your brain health stands now, instead of guessing",
    "You want a practical plan to stay sharp for the decades ahead",
    "You'd rather try the habits with peers than sit through another talk",
  ],
  notFor: [
    "You need a diagnosis or treatment for a medical condition",
    "You're after a quick fix or a supplement stack",
    "You want a spa-only break",
  ],
  note: "Brain fog has many possible causes. Clarity explores everyday factors like sleep, movement, food and stress. If your symptoms are new, sudden or worrying, please speak to your doctor first.",
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

export type Tag = "Private" | "Group" | "Your choice" | "Where suitable" | "Free time" | "Take-home";
export type Item = { label: string; tag?: Tag };
export type Pillar = { key: string; code: string; title: string; domain: string; summary: string; details: Item[] };

/**
 * The at-a-glance strip under the hero. Written for a busy executive deciding
 * whether this is worth a weekend: what it costs in time, what they get, who
 * is behind it, and how private it is.
 */
export const specs = [
  {
    label: "Time away",
    value: "Friday to Sunday",
    detail: "A short ferry from Singapore",
  },
  {
    label: "You leave with",
    value: "Your baseline and a plan",
    detail: "Private cognitive baseline, two chosen habits, 20 days of support",
  },
  {
    label: "Guided by",
    value: "Gray Matter Solutions",
    detail: "Brain health science and clinician-guided context",
  },
  {
    label: "Group",
    value: "15–20 executives",
    detail: "Small by design. Your results stay private",
  },
];

export const science = {
  kicker: "The science becomes the schedule",
  heading: "Four domains of brain health, built into one weekend.",
  intro:
    "Brain health research points to several areas of daily life that work together. Clarity turns each one into something you do, not something you're told.",
  pillars: [
    {
      key: "move",
      code: "01",
      title: "Move",
      domain: "Physical activity",
      summary: "Movement you'll want to repeat at home.",
      details: [
        { label: "Morning walk and mobility", tag: "Group" },
        { label: "Pickleball, or an accessible alternative", tag: "Your choice" },
        { label: "Options for every fitness level" },
      ],
    },
    {
      key: "eat",
      code: "02",
      title: "Eat well",
      domain: "Nutrition",
      summary: "Food that is generous, not restrictive.",
      details: [
        { label: "Chef-led, plant-rich menus", tag: "Group" },
        { label: "Heart-healthy choices, explained" },
        { label: "Shared tables, no calorie counting" },
      ],
    },
    {
      key: "think",
      code: "03",
      title: "Think actively",
      domain: "Cognitive activity",
      summary: "A private baseline and a sociable challenge.",
      details: [
        { label: `${partners.assessmentName} cognitive baseline`, tag: "Private" },
        { label: "Group cognitive challenges", tag: "Group" },
        { label: "Your results stay yours" },
      ],
    },
    {
      key: "risks",
      code: "04",
      title: "Know your risks",
      domain: "Vascular and metabolic health",
      summary: "Health context, guided by clinicians.",
      details: [
        { label: "Clinician-guided vascular and metabolic context", tag: "Private" },
        { label: "Continuous glucose monitoring (CGM)", tag: "Where suitable" },
        { label: "Plain language, no alarm" },
      ],
    },
  ] satisfies Pillar[],
  thread: {
    title: "Running through every day",
    text: "Good company and proper rest. Shared meals, unhurried conversation, downtime and sleep are part of the experience, not a treatment.",
  },
  evidence: {
    text: "Inspired by multidomain brain health research, including the two-year FINGER trial. This retreat introduces practical habits; it does not replicate that intervention or promise a clinical outcome.",
    linkLabel: "Read the FINGER study (The Lancet, 2015)",
    href: "https://pubmed.ncbi.nlm.nih.gov/25771249/",
  },
};

/** Published facts about the reference study. Keep these exact; they are cited. */
export const research = {
  kicker: "Research basis",
  heading: "Why several domains, not one.",
  intro:
    "The FINGER trial tested whether combining changes across several areas of life, rather than one at a time, could support cognition in older adults at increased risk of decline.",
  study: {
    name: "FINGER",
    fullName: "Finnish Geriatric Intervention Study to Prevent Cognitive Impairment and Disability",
    citation: "Ngandu et al., The Lancet, 2015",
    facts: [
      { label: "Design", value: "Randomised controlled trial" },
      { label: "Participants", value: "1,260 adults aged 60–77 in Finland, at increased risk" },
      { label: "Duration", value: "2 years" },
      { label: "Domains", value: "Diet · Exercise · Cognitive training · Vascular risk monitoring" },
    ],
  },
  takes: ["The four domains as a way to structure a weekend", "Doing the habits together, not just hearing about them", "A plan to continue at home"],
  doesNot: ["Replicate the two-year intervention", "Promise to prevent dementia or improve cognition", "Diagnose or treat any condition"],
};

export type Day = { code: string; day: string; date: string; theme: string; summary: string; moments: Item[] };

export const weekend = {
  kicker: "The weekend",
  heading: "Three days. Understand, experience, take it home.",
  status: "Proposed programme · to be confirmed with partners",
  days: [
    {
      code: "Day 01",
      day: "Friday",
      date: "20 Nov",
      theme: "Understand",
      summary: "Arrive, settle in and get a private picture of where you are.",
      moments: [
        { label: "Ferry from Singapore, welcome at Montigo", tag: "Group" },
        { label: "Cognitive baseline", tag: "Private" },
        { label: "CGM onboarding", tag: "Where suitable" },
        { label: "Shared dinner", tag: "Group" },
      ],
    },
    {
      code: "Day 02",
      day: "Saturday",
      date: "21 Nov",
      theme: "Experience",
      summary: "A full, unhurried day of doing, with time to yourself.",
      moments: [
        { label: "Morning movement", tag: "Your choice" },
        { label: "Brain health session", tag: "Group" },
        { label: "Chef-led nutrition discussion", tag: "Group" },
        { label: "Social cognitive challenge", tag: "Group" },
        { label: "Downtime at the resort", tag: "Free time" },
        { label: "Recovery session", tag: "Group" },
        { label: "Shared dinner", tag: "Group" },
      ],
    },
    {
      code: "Day 03",
      day: "Sunday",
      date: "22 Nov",
      theme: "Take it home",
      summary: "Make sense of it all and choose what comes next.",
      moments: [
        { label: "Gentle movement", tag: "Group" },
        { label: "Interpretation of your insights", tag: "Private" },
        { label: "Choose two habits to keep", tag: "Private" },
        { label: "Depart with your 20-day plan", tag: "Take-home" },
      ],
    },
  ] satisfies Day[],
  leisureNote: "Every day leaves room for the pool, the beach, a nap or a book. The resort is part of the programme.",
};

export const insight = {
  kicker: "Your data, handled with care",
  heading: "Personal insight, explained in plain language.",
  items: [
    {
      label: "Baseline",
      title: "A private baseline",
      text: `A short ${partners.assessmentName} cognitive assessment gives you a personal starting point. It is shared with you privately — never on a leaderboard, never with the group.`,
    },
    {
      label: "Context",
      title: "Relevant health context",
      text: "Clinicians help you understand vascular and metabolic factors that matter for long-term brain health, and what is within your control.",
    },
    {
      label: "CGM",
      title: "Glucose, in context",
      text: "Where CGM is suitable, readings are discussed in context. They do not diagnose disease, and one meal never makes a food good or bad.",
    },
    {
      label: "Summary",
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

export const included = {
  kicker: "What's included",
  heading: "What the package covers, from first email to day 20.",
  status: "Proposed inclusions · final package confirmed before bookings open",
  phases: [
    {
      when: "Before you arrive",
      title: "Prepared, not overloaded",
      items: [
        { label: "Confirmed programme and travel details" },
        { label: "A short suitability check for CGM", tag: "Where suitable" },
        { label: "One point of contact for questions" },
      ],
    },
    {
      when: "On the weekend",
      title: "Two nights at Montigo Resorts Nongsa",
      items: [
        { label: "Shared two-bedroom villa, two guests per villa" },
        { label: "Meals throughout your stay" },
        { label: "The full movement, food and brain health programme", tag: "Group" },
        { label: `Your ${partners.assessmentName} cognitive baseline`, tag: "Private" },
        { label: "Clinician-guided health context", tag: "Private" },
        { label: "Continuous glucose monitoring", tag: "Where suitable" },
      ],
    },
    {
      when: "The 20 days after",
      title: "Support while habits take hold",
      items: [
        { label: "A plain-language take-home summary", tag: "Take-home" },
        { label: "Short prompts tied to your two habits" },
        { label: "Two group check-ins", tag: "Group" },
        { label: "An invitation to a Soko activity in Singapore" },
      ],
    },
  ] satisfies { when: string; title: string; items: Item[] }[],
  toConfirm: ["Ferry and resort transfers", "Private-room options", "Final pricing"],
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
    a: "See \"What's included\" above for the proposed package: accommodation, meals, the full programme, your private baseline, health context and the 20-day follow-through. Transport, private-room options and pricing will be confirmed before bookings open.",
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
  place: {
    src: null,
    alt: "Morning light over the sea from a villa terrace at Montigo Resorts Nongsa",
    needed: "Villa terrace or pool at golden hour, sea horizon",
  },
} satisfies Record<string, ImageSlot>;

export const nav = [
  { href: "#audience", label: "Who it's for" },
  { href: "#programme", label: "Programme" },
  { href: "#weekend", label: "The weekend" },
  { href: "#included", label: "What's included" },
  { href: "#faq", label: "FAQ" },
];
