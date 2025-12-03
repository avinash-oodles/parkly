"use client";

import React from "react";

interface ButtonProps {
    text: string;
    variant?: "sm" | "lg"; // default: sm
    bg: string;             // background color
    color: string;          // text color
    onClick?: () => void;
    className?: string; 
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant = "sm",
    bg,
    color,
    onClick,
    className = "",
}) => {
    // padding based on variant
    const padding =
        variant === "sm" ? { padding: "10px 20px" } : { padding: "16px 24px" };

    return (
        <button
            onClick={onClick}
            style={{
                ...padding,
                backgroundColor: bg,
                color: color,
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
            }}
            className={`font-medium text-base leading-6 rounded-lg cursor-pointer  ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
