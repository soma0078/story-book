import clsx from "clsx";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color?: "primary" | "secondary" | "gray";
  variant?: "lined" | "filled";
  size?: "xs" | "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button = ({
  color = "primary",
  variant = "filled",
  size = "md",
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
        "inline-flex items-center justify-center cursor-pointer border-0 leading-none transition-all duration-100",
        "font-[Nunito_Sans,Helvetica_Neue,Helvetica,Arial,sans-serif]",
        "disabled:cursor-not-allowed active:scale-95",

        // variant + color
        variant === "filled" && color === "primary" && "bg-primary-50 text-gray-0 active:bg-primary-60 disabled:bg-primary-30 disabled:text-primary-20",
        variant === "filled" && color === "secondary" && "bg-primary-10 text-primary-50 active:bg-primary-20 active:text-primary-60 disabled:bg-primary-10 disabled:text-primary-30",
        variant === "filled" && color === "gray" && "bg-gray-20 text-gray-90 active:bg-gray-30 disabled:bg-gray-30 disabled:text-gray-50",
        variant === "lined" && color === "primary" && "bg-transparent border border-primary-50 text-primary-50 active:bg-primary-10 disabled:border-primary-30 disabled:text-primary-30",
        variant === "lined" && color === "gray" && "bg-transparent border border-gray-30 text-gray-70 active:bg-gray-10 disabled:text-gray-50",

        // size
        size === "xs" && "h-7 px-2 text-xs rounded-[var(--radius-6)] gap-0.5",
        size === "sm" && "h-8 px-3 text-[13px] rounded-[var(--radius-8)] gap-1",
        size === "md" && "h-10 px-3 text-sm font-semibold rounded-[var(--radius-8)] gap-1",
        size === "lg" && "h-12 px-3 text-base font-semibold rounded-[var(--radius-8)] gap-1",
        size === "full" && "h-[52px] px-3 text-lg font-semibold w-full rounded-[var(--radius-12)] gap-1",

        // icon padding
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
