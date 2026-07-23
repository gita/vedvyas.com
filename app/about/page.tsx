import type { Metadata } from "next";
import Image from "next/image";

import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { aboutPage as page } from "@/content/pages";
import { contribute, projects, site } from "@/content/site";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: page.title,
    description: page.description,
    url: `${site.url}/about`,
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${site.url}/about#webpage`,
        url: `${site.url}/about`,
        name: page.title,
        description: page.description,
        about: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${site.url}/about`,
          },
        ],
      },
    ],
  };
}

export default function AboutPage() {
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
                <li className="text-foreground">About</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {page.lede}
              </p>
            </div>
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
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              What we build
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-ring"
                >
                  <div className="relative size-16 shrink-0">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="64px"
                      className="object-contain object-left"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus:outline-none"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1.5 text-sm text-primary">
                    {project.tagline}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border/60 py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                {contribute.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                {contribute.intro}
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
                <ObfuscatedEmail
                  user={site.emailUser}
                  domain={site.emailDomain}
                  subject="I would like to contribute"
                  className={buttonVariants({ size: "lg" })}
                >
                  {contribute.cta}
                </ObfuscatedEmail>
                <ButtonLink href="/ved-vyas" size="lg" variant="outline">
                  Who was Ved Vyas
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
