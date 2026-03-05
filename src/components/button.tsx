import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  children,
  type,
  onClick,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
