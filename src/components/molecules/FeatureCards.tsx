"use client";

import Image, { StaticImageData } from "next/image";
import Typography from "@/components/Typography/Typograpghy";

interface FeatureCardProps {
    mainIcon: StaticImageData;
    mainIconAlt: string;
    title: string;
    subtitle: string;
    chipText: string;
    chipIcon?: StaticImageData;     // optional
    chipIconAlt?: string;
    chipIconBg?: boolean;           // default true → shows blue bg
}

export default function FeatureCard({
    mainIcon,
    mainIconAlt,
    title,
    subtitle,
    chipText,
    chipIcon,
    chipIconAlt = "",
    chipIconBg = true,
}: FeatureCardProps) {
    return (
        <div className="feature-card bg-white px-6 py-[30px] shadow-[0px_2px_12px_0px_#8888881F] rounded-2xl flex flex-col gap-5 lg:min-w-[340px]">

            {/* Main Blue Icon */}
            <div className="p-2.5 bg-[#59A6FF] rounded-xl flex items-center relative w-4 lg:w-[46px] h-4 lg:h-[46px]">
                <Image
                    src={mainIcon}
                    alt={mainIconAlt}
                    width={26}
                    height={26}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Title + Subtitle */}
            <div className="flex flex-col gap-3">
                <Typography variant="h3" weight={600} className="text-black-900">
                    {title}
                </Typography>
                <Typography variant="para" weight={400} className="text-black-600">
                    {subtitle}
                </Typography>
            </div>

            {/* Chip Row */}
            <div className="flex gap-2 items-center">
                <div
                    className={`rounded-xl flex items-center p-1.5 relative ${
                        chipIconBg ? "bg-[#59A6FF]" : ""
                    }`}
                >
                    {/* Only show the icon when passed */}
                    {chipIcon && (
                        <Image
                            src={chipIcon}
                            alt={chipIconAlt}
                            width={12}
                            height={12}
                            className="object-contain"
                            priority
                        />
                    )}
                </div>

                <Typography variant="chip" weight={600} lineHeight={21} className="text-blue-900">
                    {chipText}
                </Typography>
            </div>
        </div>
    );
}
