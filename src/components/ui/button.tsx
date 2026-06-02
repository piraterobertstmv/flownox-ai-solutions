import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:bg-foreground/90 shadow-sm hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border-2 border-foreground/20 bg-transparent text-foreground hover:bg-secondary hover:border-foreground/40",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70 shadow-sm",
        ghost:
          "hover:bg-secondary hover:text-secondary-foreground",
        link:
          "text-accent underline-offset-4 hover:underline",
        /* ── Hero CTAs ── */
        hero:
          "bg-foreground text-background font-bold shadow-md hover:shadow-lg hover:bg-foreground/90 hover:scale-[1.02] transform",
        heroOutline:
          "border-2 border-foreground/25 bg-transparent text-foreground hover:bg-foreground/6 hover:border-foreground/50",
        /* ── Accent (emerald) ── */
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-glow",
        /* ── Dark sections (on dark bg) ── */
        darkHero:
          "bg-white text-foreground font-bold shadow-md hover:bg-white/95 hover:shadow-lg hover:scale-[1.02] transform",
        darkOutline:
          "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60",
        /* ── Nav ── */
        nav:
          "text-muted-foreground hover:text-foreground hover:bg-transparent",
        navDark:
          "text-white/70 hover:text-white hover:bg-white/8",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm:      "h-9 px-4 text-xs",
        lg:      "h-13 px-8 text-base",
        xl:      "h-15 px-10 text-lg",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
