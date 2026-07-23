import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Inter, Noto_Serif_Devanagari } from "next/font/google";
import Script from "next/script";

import { meta, projects, site } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: meta.title,
    template: `%s | ${site.name}`,
  },
  description: meta.description,
  applicationName: site.name,
  keywords: [
    "Ved Vyas",
    "Ved Vyas Foundation",
    "Bhagavad Gita",
    "GitaGPT",
    "Hanuman Chalisa",
    "Sanatan Dharma",
    "Hindu scriptures",
    "Mahabharata",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  category: "Religion and Spirituality",
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: meta.title,
    description: meta.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    site: "@ShriKrishna",
    creator: "@ShriKrishna",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Warm cream in light, charcoal in dark, so the iOS status bar blends in.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#262625" },
  ],
};

/**
 * Entity graph. This is what tells Google's Knowledge Graph and the AI answer
 * engines what "Ved Vyas Foundation" is, that it is a non-profit, and which
 * products belong to it. Each product is its own node so it can be cited on
 * its own while still resolving back to the foundation.
 */
function buildJsonLd() {
  const org = `${site.url}/#organization`;

  const productNodes = projects.map((project) => ({
    "@type": project.links?.length ? "MobileApplication" : "WebSite",
    "@id": `${site.url}/#${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name: project.name,
    url: project.href,
    description: project.description,
    ...(project.links?.length
      ? {
          applicationCategory: "ReferenceApplication",
          operatingSystem: "iOS, Android",
        }
      : {}),
    publisher: { "@id": org },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NGO", "Organization"],
        "@id": org,
        name: site.name,
        alternateName: ["Ved Vyas Foundation", "VedVyas Foundation"],
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        // Deliberately no plain `email` field: it would put the address in the
        // served HTML for scrapers. Point at the contact section instead.
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "general enquiries",
          url: `${site.url}/#contact`,
        },
        description: meta.description,
        slogan: "Ancient wisdom, made for life today",
        nonprofitStatus: "Nonprofit501c3",
        sameAs: [site.social.github, site.social.linkedin, site.social.twitter],
        knowsAbout: [
          "Bhagavad Gita",
          "Mahabharata",
          "Vedas",
          "Sanatan Dharma",
          "Hanuman Chalisa",
          "Sanskrit scripture",
          "Ved Vyas",
        ],
        owns: productNodes.map((node) => ({ "@id": node["@id"] })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: meta.description,
        publisher: { "@id": org },
        inLanguage: "en",
      },
      ...productNodes,
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimson.variable} ${devanagari.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // Build-time constant. No user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </head>
      <body className="font-sans">
        {children}
        {/* Privacy-friendly analytics by Plausible */}
        <Script
          defer
          src="https://plausible.io/js/pa-eWni10AKQXa1Di3h6Xoaf.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
