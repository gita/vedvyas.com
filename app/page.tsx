import Image from "next/image";

import { BrowserFrame } from "@/components/browser-frame";
import { ArrowUpRight, Mail } from "lucide-react";

import { Github, Linkedin } from "@/components/brand-icons";

import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import {
  contribute,
  cta,
  hero,
  meta,
  mission,
  projects,
  projectsHeading,
  projectsIntro,
  site,
  vedVyas,
} from "@/content/site";

function Hero() {
  return (
    <section id="top" className="hero-wash relative overflow-hidden">
      <div className="container relative py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 animate-fade-up text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl [animation-delay:60ms]">
            {hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg [animation-delay:120ms]">
            {hero.subhead}
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center [animation-delay:180ms]">
            <ButtonLink href="#projects" size="lg">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#mission" size="lg" variant="outline">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <p className="mt-7 animate-fade-up text-sm text-muted-foreground [animation-delay:240ms]">
            {hero.note}
          </p>
        </div>

        {/* The pitch is "scriptures deserve better", so show the work itself. */}
        <div className="mx-auto mt-14 max-w-4xl animate-fade-up sm:mt-16 [animation-delay:300ms]">
          <BrowserFrame
            src="/shots/bhagavad-gita.webp"
            alt="The BhagavadGita.com home page, showing Krishna and Arjuna on the battlefield of Kurukshetra"
            label="bhagavadgita.com"
            priority
            sizes="(max-width: 768px) 92vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="border-t border-border/60 py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {mission.heading}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {mission.intro}
          </p>
        </div>

        <dl className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {mission.pillars.map((pillar, index) => (
            <div key={pillar.title} className="border-t border-border pt-5">
              <dt className="flex items-baseline gap-3">
                <span
                  aria-hidden
                  className="text-xs font-semibold tabular-nums text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl font-semibold tracking-tight">
                  {pillar.title}
                </span>
              </dt>
              <dd className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">
                {pillar.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border/60 bg-accent/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {projectsHeading}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {projectsIntro}
          </p>
        </div>

        <ul className="mt-12 grid items-stretch gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className={
                "group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-ring " +
                (project.featured
                  ? "border-primary/30 ring-1 ring-primary/10"
                  : "border-border")
              }
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, 560px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
                  {/*
                  Stretched link. The ::after covers the whole card so the card is
                  clickable, while the markup stays one valid anchor per card.
                */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus:outline-none"
                  >
                    {project.name}
                  </a>
                </h3>

                <p className="mt-1.5 text-sm font-medium text-primary">
                  {project.tagline}
                </p>
                <p className="mt-4 max-w-prose text-pretty text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                  <span className="-my-3 inline-flex items-center gap-1 py-3 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.cta}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  {/* z-10 lifts these above the stretched link so they stay clickable */}
                  {project.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 -my-3 inline-flex items-center rounded-md py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function VedVyas() {
  return (
    <section className="border-t border-border/60 py-20 sm:py-28">
      <div className="container">
        <figure className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden
            className="font-dev text-5xl leading-none text-primary/25 sm:text-6xl"
          >
            व्यास
          </span>
          <h2 className="mt-6 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {vedVyas.heading}
          </h2>
          <blockquote className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {vedVyas.body}
          </blockquote>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/ved-vyas" variant="outline" size="lg">
              Read about Ved Vyas
            </ButtonLink>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Contribute() {
  return (
    <section
      id="contribute"
      className="border-t border-border/60 bg-accent/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {contribute.heading}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contribute.intro}
          </p>
        </div>

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contribute.roles.map((role) => (
            <div
              key={role.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <dt className="font-serif text-lg font-semibold tracking-tight">
                {role.title}
              </dt>
              <dd className="mt-2 text-pretty text-[15px] leading-relaxed text-muted-foreground">
                {role.body}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex justify-center">
          <ObfuscatedEmail
            user={site.emailUser}
            domain={site.emailDomain}
            subject="I would like to contribute"
            className={buttonVariants({ size: "lg" })}
          >
            <>
              <Mail aria-hidden />
              {contribute.cta}
            </>
          </ObfuscatedEmail>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {cta.body}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ObfuscatedEmail
              user={site.emailUser}
              domain={site.emailDomain}
              className={buttonVariants({ size: "lg" })}
            >
              <>
                <Mail aria-hidden />
                Email us
              </>
            </ObfuscatedEmail>
            <ButtonLink href={site.social.github} size="lg" variant="outline">
              <Github aria-hidden />
              GitHub
            </ButtonLink>
            <ButtonLink href={site.social.linkedin} size="lg" variant="outline">
              <Linkedin aria-hidden />
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** The page-level node. Organization, WebSite and the product nodes live in the layout. */
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: meta.title,
  description: meta.description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <a
        href="#mission"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <Projects />
        <VedVyas />
        <Contribute />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
