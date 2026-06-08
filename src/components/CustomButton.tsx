import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const customButton = cva(
  [
    "font-[Nunito_Sans,Helvetica_Neue,Helvetica,Arial,sans-serif] font-bold border-0 rounded-[3em] cursor-pointer inline-block leading-none",
  ],
  {
    variants: {
      variant: {
        outline: "bg-white border border-black",
        solid: "bg-black text-white",
      },
      size: {
        sm: "text-xs px-4 py-2.5",
        md: "text-sm px-5 py-[11px]",
        lg: "text-2xl px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

interface CustomButtonProps
  extends Omit<React.ComponentPropsWithRef<"button">, "color">,
    VariantProps<typeof customButton> {
  label: string;
}

export const CustomButton = ({
  variant,
  size,
  label,
  className,
  ...props
}: CustomButtonProps) => {
  return (
    <button className={cn(customButton({ variant, size }), className)} {...props}>
      {label}
    </button>
  );
};
