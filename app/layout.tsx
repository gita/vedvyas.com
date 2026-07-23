import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Inter, Noto_Serif_Devanagari } from "next/font/google";
import Script from "next/script";

import { meta, site } from "@/content/site";

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
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
 * Organization + WebSite structured data. This is the entity anchor for
 * Google's Knowledge Graph and for AI answer engines deciding what
 * "Ved Vyas Foundation" is and what it owns.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["NGO", "Organization"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: ["Ved Vyas Foundation", "VedVyas Foundation"],
      url: site.url,
      email: site.email,
      description: meta.description,
      nonprofitStatus: "Nonprofit501c3",
      sameAs: [site.social.github, site.social.linkedin, site.social.twitter],
      knowsAbout: [
        "Bhagavad Gita",
        "Mahabharata",
        "Vedas",
        "Sanatan Dharma",
        "Hanuman Chalisa",
        "Sanskrit scripture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: meta.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

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
          // Trusted, build-time constant. No user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
