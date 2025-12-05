"use client";

import { useState } from "react";
import ChevronDown from "@/assets/svgs/ChevronDown";
import Typography from "@/components/Typography/Typograpghy";

interface FaqCardProps {
    question: string;
    answer: string;
    isActive: boolean;
    onToggle: () => void;
}

export default function FaqCard({ question, answer, isActive, onToggle }: FaqCardProps) {
    return (
        <div
            className={`single-faq flex flex-col transition-all duration-300
                border-[1.2px] p-6 rounded-2xl w-full cursor-pointer
                ${isActive ? "border-[#8EC7FF]" : "border-[#D0D0D0]"}
            `}
            onClick={onToggle}
        >
            {/* Question Row */}
            <div className="question flex justify-between items-center">
                <Typography
                    variant="body"
                    lineHeight={28}
                    weight={500}
                    className={`${isActive ? "text-blue-700" : "text-black-700"}`}
                >
                    {question}
                </Typography>

                <div
                    className={`transition-all duration-300 
                        ${isActive ? "rotate-180 text-[#144DE1]" : "rotate-0 text-black-700"}
                    `}
                >
                    <ChevronDown />
                </div>
            </div>

            {/* Answer */}
            <div
                className={`answer overflow-hidden transition-all duration-300 
                    ${isActive ? "mt-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <Typography
                    variant="para"
                    lineHeight={26}
                    weight={400}
                    className="text-black-500"
                >
                    {answer}
                </Typography>
            </div>
        </div>
    );
}