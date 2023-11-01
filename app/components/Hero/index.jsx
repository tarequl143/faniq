import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="py-[60px] lg:py-[100px] bg-hero_pattern bg-center bg-no-repeat bg-cover">
      <SectionWrapper>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-slate-50 text-[36px] md:text-6xl font-semibold leading-[130%]">
            Grow your{" "}
            <span className="px-1 textBGPrimary rounded-md">OnlyFans</span>{" "}
            <br />
            revenue with AI Powers✨
          </h1>
          <div className="w-full lg:w-[594px] text-center text-textSecondary text-xl lg:text-base font-normal leading-[150%] lg:leading-[170%] mt-5 lg:mt-3">
            FansIQ helps you and your chatters focus on fans that make you the
            most revenue and provide AI chatting tools to grow your revenue.
          </div>

          <div className="w-auto md:w-40 h-12 p-4 z-10 bg-[#0DA6E9] relative overflow-hidden before:-z-10 before:content-[''] before:absolute before:bg-[#37BDF8] before:right-[110%] before:-top-[44px] before:w-[200%] before:h-[200%] before:rotate-[15deg] before:transition-all before:duration-500 hover:before:right-[-10%] rounded-md justify-center items-center gap-2.5 inline-flex mt-6">
            <button className="text-white text-base md:text-sm font-medium">
              Get Started - free
            </button>
          </div>

          <div className="hidden xl:block mt-[60px]">
            <Image
              src="/Dashboard.svg"
              height={626}
              width={920}
              alt="Hero-image"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
