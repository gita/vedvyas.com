"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Props = {
  user: string;
  domain: string;
  className?: string;
  /** Rendered instead of the address itself, e.g. inside a button. */
  children?: React.ReactNode;
  subject?: string;
};

/**
 * Renders a mailto link whose address never exists as a single string in the
 * served HTML. Scrapers pull static markup and read `user` and `domain` as two
 * unrelated attributes; the href is assembled in the browser after mount.
 *
 * Before mount (and with JS disabled) it degrades to "contact [at] domain",
 * which a person can still read and retype.
 */
export function ObfuscatedEmail({
  user,
  domain,
  className,
  children,
  subject,
}: Props) {
  const [href, setHref] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const address = `${user}@${domain}`;
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    setHref(`mailto:${address}${query}`);
  }, [user, domain, subject]);

  const label =
    children ?? (href ? `${user}@${domain}` : `${user} [at] ${domain}`);

  if (!href) {
    // Server render and pre-hydration: a span, so there is no address to follow.
    return (
      <span className={cn(className)} data-email-placeholder>
        {label}
      </span>
    );
  }

  return (
    <a href={href} className={cn(className)}>
      {label}
    </a>
  );
}
