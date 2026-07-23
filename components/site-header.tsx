import { ButtonLink } from "@/components/ui/button";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Ved Vyas", href: "/ved-vyas" },
  { label: "Contribute", href: "/#contribute" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          className="flex h-11 shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {/*
            The Devanagari line box puts ॐ high in its em square, so flex
            centring alone leaves it visibly above the disc centre. Measured
            offset of the glyph's ink box at 36px is ~5px, hence the nudge.
          */}
          <span
            aria-hidden
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-dev text-[19px] leading-none text-primary"
          >
            <span className="translate-y-[5px]">ॐ</span>
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Ved Vyas
            <span className="hidden sm:inline"> Foundation</span>
          </span>
        </a>

        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:block"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="/#contact" className="ml-1 h-11 lg:h-9 lg:px-4">
            Get in touch
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
