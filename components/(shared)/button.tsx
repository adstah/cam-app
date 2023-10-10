interface ButtonI {
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  type = "button",
  children,
}: ButtonI) => {
  return (
    <button type={type} className={`btn btn-${variant} mt-2 w-100`}>
      {children}
    </button>
  );
};
