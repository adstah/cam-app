import { InputHTMLAttributes } from "react";

interface ButtonI extends InputHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  css?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  type = "button",
  children,
  css,
  ...props
}: ButtonI) => {
  const colorVariant = {
    primary:
      "bg-slate-800 text-sky-500 ring-slate-200/20 shadow rounded-md border border-slate-500",
    secondary: "",
    danger: "",
  };
  return (
    <button
      className={`${colorVariant[variant]} hover:brightness-150 font-bold py-2 px-4 rounded ${css}`}
      {...props}
    >
      {children}
    </button>
  );
};
