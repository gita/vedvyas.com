import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { projects, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-accent/20 py-14">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Free, ad-free apps for the Bhagavad Gita and the scriptures of
              Sanatan Dharma.
            </p>
          </div>

          <nav aria-labelledby="footer-projects">
            <p
              id="footer-projects"
              className="text-sm font-semibold text-foreground"
            >
              Projects
            </p>
            <ul className="mt-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-3 text-sm leading-5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-foundation">
            <p
              id="footer-foundation"
              className="text-sm font-semibold text-foreground"
            >
              Foundation
            </p>
            <ul className="mt-2">
              {[
                { label: "About us", href: "/about" },
                { label: "Who was Ved Vyas", href: "/ved-vyas" },
                { label: "Our mission", href: "/#mission" },
                { label: "Contribute", href: "/#contribute" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm leading-5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-connect">
            <p
              id="footer-connect"
              className="text-sm font-semibold text-foreground"
            >
              Connect
            </p>
            <ul className="mt-2">
              <li>
                <ObfuscatedEmail
                  user={site.emailUser}
                  domain={site.emailDomain}
                  className="block py-3 text-sm leading-5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Email us
                </ObfuscatedEmail>
              </li>
              {[
                { label: "GitHub", href: site.social.github },
                { label: "LinkedIn", href: site.social.linkedin },
                { label: "X", href: site.social.twitter },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-3 text-sm leading-5 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p>Made as an offering. Free and ad-free for everyone.</p>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground/80">
          Ved Vyas Foundation is a registered non-profit in India. CIN:
          U85300HR2022NPL106949.
        </p>
      </div>
    </footer>
  );
}
