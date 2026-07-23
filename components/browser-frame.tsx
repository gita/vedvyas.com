import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  /** Shown in the fake address bar. */
  label: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Wraps a product screenshot in light browser chrome so it reads as a real
 * window rather than a floating rectangle. Decorative chrome is aria-hidden;
 * the screenshot itself carries the alt text.
 */
export function BrowserFrame({
  src,
  alt,
  label,
  priority,
  className,
  sizes = "(max-width: 768px) 100vw, 900px",
}: Props) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-foreground/[0.07] ring-1 ring-foreground/5",
        className,
      )}
    >
      <div
        aria-hidden
        className="flex h-9 items-center gap-2 border-b border-border bg-muted/60 px-3.5"
      >
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="ml-2 hidden truncate rounded-md bg-background/70 px-2.5 py-0.5 text-[11px] text-muted-foreground sm:block">
          {label}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={800}
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </figure>
  );
}
