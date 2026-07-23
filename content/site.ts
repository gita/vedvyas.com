/**
 * Single source of truth for site copy and links.
 * Prose drafted with Codex, reviewed by hand. Keep it free of em dashes.
 */

export const site = {
  name: "Ved Vyas Foundation",
  shortName: "Ved Vyas",
  /**
   * Canonical origin. vedvyas.org holds the domain rating and every backlink,
   * so it is the default. Override with NEXT_PUBLIC_SITE_URL if the canonical
   * ever moves to vedvyas.com.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vedvyas.org",
  /**
   * Split so the address never appears as one scrapable string in the HTML.
   * Reassembled at runtime by components/obfuscated-email.tsx.
   */
  emailUser: "contact",
  emailDomain: "bhagavadgita.io",
  social: {
    github: "https://github.com/gita",
    linkedin: "https://www.linkedin.com/company/vedvyas/",
    twitter: "https://twitter.com/ShriKrishna",
  },
} as const;

export const hero = {
  eyebrow: "Scriptures, made accessible",
  headline: "Ancient wisdom, made for life today",
  subhead:
    "We build modern web and mobile apps for Sanatan Dharma scriptures, from trusted reading tools to scripture grounded AI. Every product is free and ad-free, with no paywall or subscription.",
  primaryCta: "Explore projects",
  secondaryCta: "Our mission",
  note: "Free and ad-free. No ads. No paywall.",
};

export const mission = {
  heading: "Scriptures deserve better",
  intro:
    "Most scripture websites and apps feel dated, built for another era. They fail to reach younger readers who expect the care, speed, and clarity of the products they use every day.",
  pillars: [
    {
      title: "Built for Gen Z",
      body: "Gen Z grew up with thoughtful, well designed apps. We build scripture products that feel natural to read, explore, and return to.",
    },
    {
      title: "Crafted for today",
      body: "State of the art craft makes every screen fast and clear, with Sanskrit, word for word meanings, translations, commentaries, and audio for study.",
    },
    {
      title: "AI grounded in scripture",
      body: "We shipped some of the first AI applications built on a Hindu scripture, and we keep pushing what grounded tools can do.",
    },
    {
      title: "Free for everyone",
      body: "Everything stays free and ad-free forever, with no ads, no paywall, and no subscription. Donations are welcome, but we never ask.",
    },
  ],
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  /** Rendered as small secondary actions that sit above the card-wide link. */
  links?: { label: string; href: string }[];
  /** Path under /public. */
  image: string;
  /** Alt text describing the artwork, not the product. */
  imageAlt: string;
  featured?: boolean;
};

export const projectsHeading = "What we build";
export const projectsIntro =
  "Five free products for reading, listening, studying, and applying the teachings of Sanatan Dharma in daily life.";

export const projects: Project[] = [
  {
    name: "BhagavadGita.com",
    tagline: "The Gita, verse by verse",
    description:
      "Read all 700 verses in Sanskrit, with word-for-word meanings, multiple translations and commentaries, and audio recitation. The site supports many Indian languages and serves readers around the world each day.",
    cta: "Read the Gita",
    href: "https://bhagavadgita.com",
    image: "/art/bhagavad-gita.png",
    imageAlt:
      "A chariot wheel and a bamboo flute, drawn as a manuscript emblem",
    featured: true,
  },
  {
    name: "Bhagavad Gita App",
    tagline: "The Gita, wherever you are",
    description:
      "Carry the complete Bhagavad Gita on iOS and Android. Read offline, receive a daily verse, save bookmarks, listen to recitations, and explore the same translations and commentaries wherever you are.",
    cta: "Get the app",
    href: "https://bhagavadgita.com/bhagavad-gita-app",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/bhagavad-gita-hindi-english/id1602895635",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.gitainitiative.bhagavadgita",
      },
    ],
    image: "/art/gita-app.png",
    imageAlt:
      "Palm-leaf manuscript pages fanning up into the outline of a phone",
  },
  {
    name: "GitaGPT",
    tagline: "Life questions, answered through the Gita",
    description:
      "Ask a life question and receive an answer grounded in the teachings of the Bhagavad Gita. One of the first AI applications built on a Hindu scripture, now available in 16 languages including Hindi, Telugu, Gujarati, and Bengali.",
    cta: "Ask GitaGPT",
    href: "https://bhagavadgita.com/gitagpt",
    image: "/art/gitagpt.png",
    imageAlt: "An upright bamboo flute with arcs of sound radiating outward",
  },
  {
    name: "Hanuman Chalisa",
    tagline: "Read, understand, and listen with devotion",
    description:
      "Read and listen to the full Hanuman Chalisa, with a clear translation and meaning for every verse. The site helps readers understand the prayer while keeping its original text close at hand.",
    cta: "Open the Chalisa",
    href: "https://hanumanchalisa.net",
    image: "/art/hanuman-chalisa.png",
    imageAlt: "A ceremonial mace before a stylised mountain and rising sun",
  },
  {
    name: "Radha Krishna",
    tagline: "Songs and darshan for every day",
    description:
      "Devotional songs, bhajans, and darshan images gathered into one simple space for daily practice. Listen during prayer, reflect through music, or keep a beloved image close through the day.",
    cta: "Visit Radha Krishna",
    href: "https://radhakrishna.com",
    image: "/art/radha-krishna.png",
    imageAlt: "Two peacock feathers crossed behind a lotus flower",
  },
];

export const vedVyas = {
  heading: "Named after Ved Vyas",
  body: "Ved Vyas is the sage traditionally credited with compiling the Vedas and authoring the Mahabharata, which contains the Bhagavad Gita. He gathered vast teachings and arranged them so others could study, remember, and pass them on. We carry his name with humility. It reminds us that sacred knowledge should be preserved with care, presented clearly, and made available to every sincere reader.",
};

export const contribute = {
  heading: "Bring your skills",
  intro:
    "We are volunteer run, and skills of every kind can help us build better scripture products. If you can give your time and care, reach out and tell us how you would like to contribute.",
  roles: [
    {
      title: "Engineering",
      body: "Build fast, accessible web and mobile products for scripture readers.",
    },
    {
      title: "Design",
      body: "Shape clear interfaces that make reading and study feel natural.",
    },
    {
      title: "SEO and growth",
      body: "Help more people find our free scripture products through search.",
    },
    {
      title: "Writing and translation",
      body: "Write, edit, and translate scripture content with care and clarity.",
    },
    {
      title: "Audio and video",
      body: "Record and edit recitations, bhajans, explainers, and devotional videos.",
    },
    {
      title: "Scholarship and review",
      body: "Review verses, translations, commentaries, and sources for accuracy and context.",
    },
  ],
  cta: "Contribute your skills",
};

export const cta = {
  heading: "Read, build, or say hello",
  body: "Use our apps, share them with family and friends, contribute to our open-source work on GitHub, or write to us. There is a place for every reader and builder.",
};

export const meta = {
  title: "Ved Vyas Foundation | Free Sanatan Dharma Apps",
  description:
    "Ved Vyas Foundation builds free, ad-free web and mobile apps for the Bhagavad Gita, GitaGPT, Hanuman Chalisa, and Sanatan Dharma scriptures worldwide.",
};
