import Link from "next/link";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  link?: string | null;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  link = null,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "px-3 py-3 text-base font-medium  focus:outline-none transition duration-200";
  const variantClasses = {
    primary:
      "bg-[#FF9500] text-white text-base rounded-[23px] text-center  font-medium font-shatosi hover:bg-[#0037ff] transition-colors duration-300 ease-in-ou",
    secondary:
      "bg-[#FF9500] text-white text-base rounded-[10px] text-center  font-medium font-shatosi",
    outline:
      "bg-[#FF9500]  text-teal-500 text-center text-md px-4 py-1 rounded-[4px]  hover:bg-teal-100",
    ghost:
      "bg-black text-white text-xl rounded-[10px] flex item-center justify-center  font-medium font-shatosi",
  };
  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-2 py-4",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Render Link if href is provided
  if (link) {
    return (
      <Link href={link}>
        <span className={buttonClasses}>{children}</span>
      </Link>
    );
  }

  // Render button if no href is provided
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
