import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground tracking-[-0.15px] leading-[20px] xl:text-[0.94rem] 2xl:text-[1rem] 3xl:text-[1.125rem] font-[400]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#181A1E] underline-offset-4 ",
        dropdown:
          "bg-transparent text-[#181A1E] text-[13px] 2xl:text-[14px] 3xl:text-[16px] border-[1px] border-[#EAEBEC] rounded-[24px] min-w-[130px] 3xl:min-w-[164px] justify-between flex items-center",
      },
      size: {
        default:
          "px-[34px] 3xl:px-[51px] py-[12px] 3xl:py-[20px] 3xl:py-[17px] rounded-[60px] 3xl:rounded-[100px]",
        sm: "px-[27px] 3xl:px-[40px] py-[12px] 3xl:py-[16px] 3xl:py-[16px] rounded-[60px] 3xl:rounded-[100px]",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10",
        xs: "rounded-full h-8 px-3 py-1",
        dropdown: "px-[16px] py-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
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
