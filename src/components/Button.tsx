import type { ButtonProps } from "../types/button";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface";

const variantStyles = {
  primary: "bg-accent text-slate-950 hover:bg-sky-300",
  ghost: "border border-borderSoft bg-panel text-slate-200 hover:border-sky-400 hover:text-white",
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
