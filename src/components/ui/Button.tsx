import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-black font-sans uppercase cursor-pointer text-nowrap",

  {
    variants: {
      variant: {
        primary: "bg-primary text-black",
        secondary: "border border-primary bg-transparent text-primary",
        teritiary: "bg-black",
      },
      size: {
        sm: "h-10 px-2.5",
        md: "h-12.5 px-4",
        lg: "h-12.5 w-full px-2.5",
        square: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);
export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export default Button;
