"use client";

import React from "react";

interface ButtonProps {
  text: string;
  variant?: "sm" | "lg"; 
  bg: string;
  color: string;
  hoverBg?: string;
  boxShadow?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "sm",
  bg,
  color,
  hoverBg,
  boxShadow,
  onClick,
  className = "",
}) => {
 
  const paddingClasses = variant === "sm"
    ? "px-5 py-2.5 text-base leading-6"   // sm: 16px font, 24px line-height
    : "px-6 py-3 text-sm leading-5 md:py-4 md:text-base md:leading-6"; 


  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: color,
        fontWeight: 500,
        letterSpacing: "0",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: boxShadow,
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => hoverBg && (e.currentTarget.style.backgroundColor = hoverBg)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
      className={`${paddingClasses} font-medium rounded-lg cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
