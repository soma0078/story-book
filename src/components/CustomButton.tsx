import clsx from "clsx";

interface CustomButtonProps {
  size?: "sm" | "md" | "lg";
  label: string;
  variant?: "outline" | "solid";
  backgroundColor?: string;
  color?: string;
}

export const CustomButton = ({
  size = "md",
  label,
  variant = "outline",
  backgroundColor,
  color,
}: CustomButtonProps) => {
  return (
    <button
      className={clsx(
        "font-[Nunito_Sans,Helvetica_Neue,Helvetica,Arial,sans-serif] font-bold border-0 rounded-[3em] cursor-pointer inline-block leading-none",
        variant === "outline" && "bg-white border border-black",
        variant === "solid" && "bg-black text-white",
        size === "sm" && "text-xs px-4 py-2.5",
        size === "md" && "text-sm px-5 py-[11px]",
        size === "lg" && "text-2xl px-6 py-3"
      )}
      style={{ backgroundColor, color }}
    >
      {label}
    </button>
  );
};
