import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { vedVyasPage as page } from "@/content/pages";
import { projects, site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.description,
  alternates: { canonical: "/ved-vyas" },
  openGraph: {
    type: "article",
    title: page.title,
    description: page.description,
    url: `${site.url}/ved-vyas`,
  },
};

/**
 * Person + FAQPage + Breadcrumb. The FAQ block mirrors the questions Google
 * already shows in People Also Ask for "ved vyas", which is what answer
 * engines quote from.
 */
function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/ved-vyas#person`,
        name: "Ved Vyas",
        alternateName: ["Vyasa", "Veda Vyasa", "Krishna Dvaipayana", "व्यास"],
        description: page.lede,
        knowsAbout: ["Vedas", "Mahabharata", "Bhagavad Gita", "Puranas"],
        parent: [
          { "@type": "Person", name: "Parashara" },
          { "@type": "Person", name: "Satyavati" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/ved-vyas#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ved Vyas",
            item: `${site.url}/ved-vyas`,
          },
        ],
      },
    ],
  };
}

export default function VedVyasPage() {
  const gita = projects[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <SiteHeader />

      <main>
        <section className="hero-wash border-b border-border/60">
          <div className="container py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="-my-3 inline-block py-3 underline-offset-4 hover:underline">
                    Home
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground">Ved Vyas</li>
              </ol>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
                  {page.h1}
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {page.lede}
                </p>
              </div>
              <div className="lg:col-span-5">
                <Image
                  src="/art/hero.png"
                  alt=""
                  aria-hidden
                  width={1200}
                  height={745}
                  priority
                  sizes="(max-width: 1024px) 280px, 420px"
                  className="mx-auto w-[240px] sm:w-[320px] lg:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts: the compact, extractable block AI answers tend to lift */}
        <section className="border-b border-border/60 py-14">
          <div className="container">
            <h2 className="sr-only">Quick facts about Ved Vyas</h2>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.quickFacts.map((fact) => (
                <div key={fact.label} className="border-t border-border pt-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-pretty font-medium">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-12">
              {page.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 32)}
                        className="text-pretty leading-relaxed text-muted-foreground sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-accent/30 py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Common questions about Ved Vyas
              </h2>
              <dl className="mt-10 space-y-8">
                {page.faqs.map((faq) => (
                  <div key={faq.q} className="border-t border-border pt-6">
                    <dt className="font-serif text-xl font-semibold tracking-tight">
                      {faq.q}
                    </dt>
                    <dd className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <div className="relative size-24">
                <Image
                  src={gita.image}
                  alt={gita.imageAlt}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Read what Ved Vyas composed
              </h2>
              <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                The Bhagavad Gita sits inside the Mahabharata. Read all 700
                verses in Sanskrit with word-for-word meanings, translations,
                commentaries, and audio. Free and ad-free.
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <ButtonLink href={gita.href} size="lg">
                  Read the Bhagavad Gita
                </ButtonLink>
                <ButtonLink href="/about" size="lg" variant="outline">
                  About our foundation
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
