"use client";

import { useState } from "react";
import FaqCard from "./FaqCard";

interface FaqListProps {
    showCount?: number;
}

const faqData = [
    {
        question: "What is Parkly?",
        answer:
            "Parkly is a smart, verified parking platform that connects drivers with private parking spaces near stadiums, arenas, and high-traffic destinations. It helps you find, list, or reserve safe parking spots through an easy-to-use app."
    },
    {
        question: "How does Parkly verify parking listings?",
        answer:
            "Before a listing goes live, Parkly uses a multi-step verification process.",
        points: [
            "Confirming the address and ownership",
            "Verifying the host’s identity",
            "Reviewing the type of parking space",
            "Approving photos and descriptions"
        ]
    },
    {
        question: "Can I list my private parking space?",
        answer:
            "Yes. If you have a driveway, garage spot, or assigned parking space, you can earn extra income by listing it on Parkly. Upload photos, set your availability, and add your price — Parkly handles the rest."
    },
    {
        question: "Are there any listing or booking fees?",
        answer:
            "Listing a space is free. Parkly charges a small service fee on each booking to support payment processing, verification, and customer support."
    },
    {
        question: "Can I cancel my booking?",
        answer:
            "Yes. Drivers and hosts can cancel bookings directly through the app. Cancellation rules depend on the host’s selected policy and are shown at checkout."
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Yes. All payments are processed through secure, PCI-compliant providers. Your financial information is fully encrypted and never stored on Parkly servers."
    },
    {
        question: "What happens if someone parks in my spot?",
        answer:
            "If a driver arrives and the reserved space is unavailable, Parkly support will contact the host, help find a nearby alternative if possible, and provide a refund or credit if needed. Hosts who repeatedly violate guidelines may be removed."
    },
    {
        question: "When do hosts get paid?",
        answer:
            "Hosts receive payouts 24 to 48 hours after the reservation begins. Payments go directly to the host’s selected payout method."
    }
];

export default function FaqList({ showCount }: FaqListProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? -1 : index));
    };

    const faqsToShow = showCount ? faqData.slice(0, showCount) : faqData;

    return (
        <div className="flex flex-col gap-4 md:gap-5">
            {faqsToShow.map((faq, index) => (
                <FaqCard
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    points={faq.points}     
                    isActive={activeIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
