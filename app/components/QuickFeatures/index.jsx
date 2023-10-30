import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="px-[50px]">
      <Image src={icon} height={32} width={32} alt="icon" />

      <h4 className="text-slate-50 text-xl leading-relaxed mt-7">{title}</h4>

      <p className="text-slate-400 text-base font-normal leading-7 mt-5">
        {desc}
      </p>
    </div>
  );
};

export const QuickFeatures = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="grid grid-cols-3 gap-2">
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
