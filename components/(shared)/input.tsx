import { InputHTMLAttributes } from "react";

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "main";
}

export const Input = ({ variant = "main", ...props }: InputI) => {
  const VARIANTS = {
    main: "bg-transparent border-b-2 mb-2 ml-2 focus:border-sky-400 outline-none duration-300",
  };
  return <input {...props} className={VARIANTS[variant]} />;
};
