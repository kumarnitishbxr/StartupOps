import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  className,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? "Processing..." : children}
    </button>
  );
};

export default Button;
