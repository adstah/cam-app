interface ButtonI {
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit";
  css?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  type = "button",
  children,
  css,
}: ButtonI) => {
  const colorVariant = {
    primary:
      "bg-slate-800 text-sky-500 ring-slate-200/20 shadow rounded-md border border-slate-500",
    secondary: "",
    danger: "",
  };
  return (
    <button
      type={type}
      className={`${colorVariant[variant]} hover:border-2 hover:brightness-110 font-bold py-2 px-4 rounded ${css}`}
    >
      {children}
    </button>
  );
};
