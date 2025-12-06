"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Typography from "@/components/Typography/Typograpghy";

interface EffortCardProps {
  number: string; // Content for before pseudo-element
  bgColor: string; // Background color for icon wrapper
  icon: StaticImageData; // Image source for the icon
  title: string;
  subtitle?: string;
}

const EffortCard: React.FC<EffortCardProps> = ({ number, bgColor, icon, title, subtitle }) => {
  return (
    <div
      className="effort-card relative flex flex-col items-center gap-5 md:gap-[30px] w-full bg-[url('/bg-net.svg')] bg-cover bg-center "
      style={{
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--number' as any]: `"${number}"`,
      }}
    >
      <style jsx>{`
  .effort-card::before {
    content: var(--number);
    position: absolute;
    top: 0;
    right: 1.75rem;
    font-weight: 800;
    font-size: 70px;
    line-height: 50px;
    letter-spacing: 0.01rem;
    color: #E6E6E6;
  }

  /* For screens smaller than md (768px) */
  @media (max-width: 767px) {
    .effort-card::before {
    font-size: 60px;
    line-height: 40px;
      top: -20px;
    }
  }
`}</style>

      <div
        className={`min-w-[58px] min-h-[58px] md:min-h-20 p-3.5 md:p-5 rounded-xl md:rounded-[20px] inline-flex items-center justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center relative w-[30px] lg:w-10 h-[30px] lg:h-10">
          <Image src={icon} alt={title} fill className="object-contain" sizes="100%" priority />
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center">
        <Typography variant="h3" weight={600} className="text-[#101010] text-center -tracking-[0.05rem] leading-7! md:leading-8!">
          {title}
        </Typography>
        <Typography variant="h4" weight={500} lineHeight={36} className="text-center text-[#2B2B2B]">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default EffortCard;
