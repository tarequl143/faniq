"use client";
import React, { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const placeholderContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit urabitur sem justo, efficitur sit amet cursus evenenatis sed risus. Quisque sollicitudin metuat consectetur ipsum vestibulum. In id dapibus justo. Pellentesque a sem libero.";

const Accordion = ({ title, open = false, children }) => {
  const [show, setShow] = useState(open);
  const iconSrc = show
    ? "/icons/do_not_disturb_on.svg"
    : "/icons/add_circle.svg";
  return (
    <div className="rounded-md bg-quesBg bg-no-repeat bg-cover bg-center py-6 px-5">
      <div className="flex items-start ">
        <h4 className="flex-1 text-[#F8F8FF] text-base font-semibold leading-[130%]">
          {title}
        </h4>
        {/* close btn */}
        <div className="cursor-pointer" onClick={() => setShow(!show)}>
          <Image src={iconSrc} height={20} width={20} alt="icon" />
        </div>
      </div>

      {/* body */}
      {show && (
        <p className="text-slate-400 text-sm font-normal leading-[170%] mt-4">
          {children}
        </p>
      )}
    </div>
  );
};

export const FrequentlyAskedQuestions = () => {
  const accordionWidth = {
    width: "calc(50% - 15px)",
  };
  return (
    <div className="pt-[120px] pb-[80px] bg-[#0E0F1C]">
      <SectionWrapper>
        <h2 className="text-center text-slate-50 text-[44px] font-semibold leading-[57px]">
          Frequently{" "}
          <span className="px-1 textBGPrimary rounded-md">Asked Questions</span>
        </h2>

        <div className="grid grid-cols-2 gap-x-[30px] mt-[86px]">
          <div className="flex flex-col gap-5">
            <Accordion title={"What is FansIQ?"} open={true}>
              {placeholderContent}
            </Accordion>
            <Accordion title={"What is FansIQ OnlyFans AI?"} open={false}>
              {placeholderContent}.
            </Accordion>
            <Accordion title={"Is FansIQ safe for OnlyFans?"} open={false}>
              {placeholderContent}
            </Accordion>
            <Accordion
              title={"How does FansIQ enhance the OnlyFans experience?"}
              open={false}
            >
              {placeholderContent}
            </Accordion>
          </div>
          <div className="flex flex-col gap-5">
            <Accordion
              title={"How does FansIQ benefit an OnlyFans agency?"}
              open={false}
            >
              {placeholderContent}
            </Accordion>
            <Accordion
              title={"How does FansIQ benefit an OnlyFans creator?"}
              open={false}
            >
              {placeholderContent}
            </Accordion>
            <Accordion
              title={"How does FansIQ benefit an OnlyFans assistant?"}
              open={false}
            >
              {placeholderContent}
            </Accordion>
            <Accordion
              title={"How does FansIQ benefit an OnlyFans consultant?"}
              open={false}
            >
              {placeholderContent}
            </Accordion>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
