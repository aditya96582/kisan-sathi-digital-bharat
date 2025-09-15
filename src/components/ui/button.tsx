import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-card hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-elegant",
        outline: "border-2 border-gold-200 bg-cream-50 text-gold-700 hover:bg-gradient-gold-light hover:border-gold-500 hover:shadow-card hover:-translate-y-0.5",
        secondary: "bg-gradient-cream text-gold-700 border border-gold-200 hover:bg-gradient-gold-light hover:shadow-card hover:-translate-y-0.5",
        ghost: "text-gold-600 hover:bg-cream-100 hover:text-gold-700 rounded-lg",
        link: "text-gold-600 underline-offset-4 hover:underline hover:text-gold-700",
        nav: "glass text-foreground border border-gold-200 hover:bg-gradient-gold-light hover:shadow-card transition-all hover:-translate-y-1 active:translate-y-0 rounded-xl ring-1 ring-gold-200/30 hover:ring-gold-500/50 backdrop-blur-md",
        premium: "bg-gradient-hero text-cream-50 shadow-elegant hover:shadow-premium hover:-translate-y-1 active:translate-y-0 font-semibold",
        gold: "bg-gradient-primary text-cream-50 shadow-glow hover:shadow-premium hover:-translate-y-1 border border-gold-300",
        saffron: "bg-gradient-to-r from-saffron-500 to-saffron-600 text-cream-50 hover:shadow-elegant hover:-translate-y-0.5",
        success: "bg-gradient-status-success text-cream-50 hover:shadow-elegant hover:-translate-y-0.5",
        floating: "glass border-gold-200 text-gold-700 hover:bg-gradient-gold-light hover:shadow-premium hover:-translate-y-2 transition-all duration-500",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-10 text-base font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
