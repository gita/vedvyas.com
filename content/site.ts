/**
 * Single source of truth for site copy and links.
 * Prose was drafted with Codex and reviewed by hand. Keep it em-dash free.
 */

export const site = {
  name: "Ved Vyas Foundation",
  shortName: "Ved Vyas",
  url: "https://vedvyas.org",
  email: "contact@bhagavadgita.io",
  social: {
    github: "https://github.com/gita",
    linkedin: "https://www.linkedin.com/company/vedvyas/",
    twitter: "https://twitter.com/ShriKrishna",
  },
} as const;

export const hero = {
  eyebrow: "Scripture, made accessible",
  headline: "Ancient wisdom, made for life today",
  subhead:
    "We build modern web and mobile apps for Sanatan Dharma scriptures, with clear translations, trusted commentaries, and audio. Every product is free for everyone to use.",
  primaryCta: "Explore projects",
  secondaryCta: "Our mission",
};

export const mission = {
  heading: "Scripture deserves better",
  body: [
    "Too many scripture websites and apps feel dated, crowded, or hard to read. Text is often difficult to search, translations lack context, and basic features fall short. Younger readers expect the same care they find in the products they use every day.",
    "We build scripture experiences that are clear, fast, and easy to use on any screen. Readers can study Sanskrit, explore word-for-word meanings, compare translations and commentaries, hear recitations, save verses, and read in many Indian languages.",
    "Everything we make is free, ad-light, and built by a non-profit foundation. We take our name from Ved Vyas, who compiled the Vedas and authored the Mahabharata. His work preserved sacred knowledge for generations. We aim to carry that service into the present.",
  ],
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  /** Extra links rendered as small secondary actions, e.g. app stores. */
  links?: { label: string; href: string }[];
  /** Devanagari mark shown in the card corner. */
  glyph: string;
  featured?: boolean;
};

export const projectsHeading = "What we build";
export const projectsIntro =
  "Four free products for reading, listening, studying, and applying the teachings of Sanatan Dharma in daily life.";

export const projects: Project[] = [
  {
    name: "BhagavadGita.com",
    tagline: "The Gita, verse by verse",
    description:
      "Read all 700 verses in Sanskrit, with word-for-word meanings, multiple translations and commentaries, and audio recitation. The site supports many Indian languages and serves readers around the world each day.",
    cta: "Read the Gita",
    href: "https://bhagavadgita.com",
    glyph: "गीता",
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
    glyph: "ॐ",
  },
  {
    name: "GitaGPT",
    tagline: "Life questions, answered through the Gita",
    description:
      "Ask a life question and receive an answer grounded in the teachings of the Bhagavad Gita. GitaGPT is available in 16 languages, including Hindi, Telugu, Gujarati, and Bengali.",
    cta: "Ask GitaGPT",
    href: "https://bhagavadgita.com/gitagpt",
    glyph: "कृष्ण",
  },
  {
    name: "Hanuman Chalisa",
    tagline: "Read, understand, and listen with devotion",
    description:
      "Read and listen to the full Hanuman Chalisa, with a clear translation and meaning for every verse. The site helps readers understand the prayer while keeping its original text close at hand.",
    cta: "Open the Chalisa",
    href: "https://hanumanchalisa.net",
    glyph: "श्री",
  },
];

export const vedVyas = {
  heading: "Named after Ved Vyas",
  body: "Ved Vyas is the sage traditionally credited with compiling the Vedas and authoring the Mahabharata, which contains the Bhagavad Gita. He gathered vast teachings and arranged them so others could study, remember, and pass them on. We carry his name with humility. It reminds us that sacred knowledge should be preserved with care, presented clearly, and made available to every sincere reader.",
};

export const cta = {
  heading: "Read, build, or say hello",
  body: "Use our apps, share them with family and friends, contribute to our open-source work on GitHub, or write to us. There is a place for every reader and builder.",
  button: "Get in touch",
};

export const meta = {
  title: "Ved Vyas Foundation | Free Sanatan Dharma Apps",
  description:
    "Ved Vyas Foundation builds free, modern web and mobile apps for the Bhagavad Gita, GitaGPT, Hanuman Chalisa, and Sanatan Dharma scriptures worldwide.",
};
