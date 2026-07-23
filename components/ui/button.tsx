import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Shared button styling. Exported on its own so links can wear the button
 * look without pulling in Radix Slot, which calls React.createContext at
 * module scope and therefore cannot be imported by a Server Component.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:brightness-110 active:brightness-95",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:brightness-[0.97]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        // 44px min touch target: Apple HIG and Material both want >= 44px.
        default: "h-11 px-5 py-2",
        lg: "h-12 px-7 text-base",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ButtonVariantProps {}

/** An anchor that looks like a Button. Adds rel/target for external hrefs. */
const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    const isExternal = typeof href === "string" && href.startsWith("http");
    return (
      <a
        ref={ref}
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink };
