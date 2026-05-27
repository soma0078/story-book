import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const button = cva(
  [
    "inline-flex items-center justify-center cursor-pointer border-0 leading-none",
    "font-[Nunito_Sans,Helvetica_Neue,Helvetica,Arial,sans-serif]",
    "transition-all duration-100 disabled:cursor-not-allowed active:scale-95",
  ],
  {
    variants: {
      variant: {
        filled: "",
        lined: "bg-transparent border",
      },
      color: {
        primary: "",
        secondary: "",
        gray: "",
      },
      size: {
        xs: "h-7 px-2 text-xs rounded-[var(--radius-6)] gap-0.5",
        sm: "h-8 px-3 text-[13px] rounded-[var(--radius-8)] gap-1",
        md: "h-10 px-3 text-sm font-semibold rounded-[var(--radius-8)] gap-1",
        lg: "h-12 px-3 text-base font-semibold rounded-[var(--radius-8)] gap-1",
        full: "h-[52px] px-3 text-lg font-semibold w-full rounded-[var(--radius-12)] gap-1",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        className: "bg-primary-50 text-gray-0 active:bg-primary-60 disabled:bg-primary-30 disabled:text-primary-20",
      },
      {
        variant: "filled",
        color: "secondary",
        className: "bg-primary-10 text-primary-50 active:bg-primary-20 active:text-primary-60 disabled:bg-primary-10 disabled:text-primary-30",
      },
      {
        variant: "filled",
        color: "gray",
        className: "bg-gray-20 text-gray-90 active:bg-gray-30 disabled:bg-gray-30 disabled:text-gray-50",
      },
      {
        variant: "lined",
        color: "primary",
        className: "border-primary-50 text-primary-50 active:bg-primary-10 disabled:border-primary-30 disabled:text-primary-30",
      },
      {
        variant: "lined",
        color: "gray",
        className: "border-gray-30 text-gray-70 active:bg-gray-10 disabled:text-gray-50",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<"button">, "color">,
    VariantProps<typeof button> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button = ({
  variant,
  color,
  size,
  children,
  startIcon,
  endIcon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        button({ variant, color, size }),
        startIcon && size === "xs" && "pl-1",
        startIcon && size !== "xs" && "pl-2",
        endIcon && size === "xs" && "pr-1",
        endIcon && size !== "xs" && "pr-2",
        className
      )}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
