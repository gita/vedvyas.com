import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import {
  cta,
  hero,
  mission,
  projects,
  projectsHeading,
  projectsIntro,
  site,
  vedVyas,
} from "@/content/site";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex h-11 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            aria-hidden
            className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 font-dev text-xl leading-none text-primary"
          >
            ॐ
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Ved Vyas
            <span className="hidden sm:inline"> Foundation</span>
          </span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <a
            href="#mission"
            className="hidden rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block"
          >
            Mission
          </a>
          <a
            href="#projects"
            className="hidden rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:block"
          >
            Projects
          </a>
          <ButtonLink href="#contact" className="h-11 lg:h-9 lg:px-4">
            Get in touch
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-wash relative overflow-hidden">
      <div className="container relative py-20 sm:py-28 lg:py-36">
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
            Free, non-profit, and open source.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="border-t border-border/60 py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {mission.heading}
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-8 lg:pt-1">
            {mission.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
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
                project.featured
                  ? "group relative flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 shadow-sm ring-1 ring-primary/10 transition-shadow hover:shadow-md sm:p-7"
                  : "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
              }
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-3 select-none font-dev text-6xl leading-none text-primary/[0.09] transition-colors group-hover:text-primary/[0.14] sm:text-7xl"
              >
                {project.glyph}
              </span>

              <div className="relative">
                <h3 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-primary">
                  {project.tagline}
                </p>
                <p className="mt-4 max-w-prose text-pretty text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="relative mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="-my-3 inline-flex items-center gap-1 rounded-md py-3 text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {project.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {project.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="-my-3 inline-flex items-center rounded-md py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </a>
                ))}
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
        </figure>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Email us", href: `mailto:${site.email}`, Icon: Mail },
    { label: "GitHub", href: site.social.github, Icon: Github },
    { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  ];

  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-accent/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {cta.body}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {links.map(({ label, href, Icon }, index) => (
              <ButtonLink
                key={label}
                href={href}
                size="lg"
                variant={index === 0 ? "default" : "outline"}
              >
                <Icon aria-hidden />
                {label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-center sm:text-right">
          Made as an offering. Free for everyone.
        </p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <a
        href="#mission"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Projects />
        <VedVyas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
