
"use client";

import { useState } from "react";
import FaqCard from "./FaqCard";

interface FaqListProps {
    showCount?: number; // number of FAQs to show, undefined = show all
}

const faqData = [
    {
        question: "What’s the benefit of joining the waitlist?",
        answer: "You’ll get early access to the app, priority support, and exclusive launch rewards for being one of the first to join Parkly."
    },
    {
        question: "Is this app free to join?",
        answer: "Yes, joining the waitlist is completely free."
    },
    {
        question: "When will the app be launched?",
        answer: "We are planning to launch in Q2 2026. Join the waitlist to stay updated."
    },
    {
        question: "What’s the benefit of joining the waitlist?",
        answer: "You’ll get early access to the app, priority support, and exclusive launch rewards for being one of the first to join Parkly."
    },
    {
        question: "Is this app free to join?",
        answer: "Yes, joining the waitlist is completely free."
    },
    {
        question: "When will the app be launched?",
        answer: "We are planning to launch in Q2 2026. Join the waitlist to stay updated."
    },
    {
        question: "Is this app free to join?",
        answer: "Yes, joining the waitlist is completely free."
    },
    {
        question: "When will the app be launched?",
        answer: "We are planning to launch in Q2 2026. Join the waitlist to stay updated."
    }
];

export default function FaqList({ showCount }: FaqListProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? -1 : index));
    };

    // If showCount is provided, slice the faqData
    const faqsToShow = showCount ? faqData.slice(0, showCount) : faqData;

    return (
        <div className="flex flex-col gap-5">
            {faqsToShow.map((faq, index) => (
                <FaqCard
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isActive={activeIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
