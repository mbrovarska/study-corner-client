import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className: string;
};

const Button = ({
  children,
  type,
  onClick,
  disabled,
  loading,
  className,
}: ButtonProps) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
