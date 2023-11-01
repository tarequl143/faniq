import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="px-5 lg:px-[54px] py-10 lg:gradient-stripe-bg first:border-l-0">
      <Image
        src={icon}
        height={32}
        width={32}
        alt="icon"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <h4 className="relative text-slate-50 text-lg leading-relaxed mt-7 before:block before:absolute before:h-[38px] before:w-[4px] before:rounded-xl before:bg-[#5249E0] before:-left-[20px] lg:before:-left-[57px]">
        {title}
      </h4>

      <p className="text-[#94A2C9] text-base font-normal leading-7 mt-5">
        {desc}
      </p>
    </div>
  );
};

export const QuickFeatures = () => {
  return (
    <div className="bg-[#0E0F1C]">
      <SectionWrapper>
        <div className="grid lg:grid-cols-3 bg-stripeBG bg-cover bg-no-repeat">
          <Card
            icon="/icons/Price_change.svg"
            title="Maximize Earnings"
            desc="Stop losing potential revenue! Ensure you always send optimal PPVs on both chatting and mass messaging."
          />
          <Card
            icon="/icons/Bolt.svg"
            title="Boost Productivity"
            desc="Make more sales in less time.Build an efficient and smart system that focuses on what matters."
          />
          <Card
            icon="/icons/Inbox_customize.svg"
            title="Easy Operations"
            desc="Daily operations and management are made easy.Take control of your chatters’ workflow and messaging."
          />
        </div>
      </SectionWrapper>
    </div>
  );
};
