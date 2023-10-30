import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="py-[100px] bg-hero_pattern bg-center bg-no-repeat bg-cover">
      <SectionWrapper>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-slate-50 text-6xl font-semibold leading-[130%]">
            Grow your{" "}
            <span className="px-1 textBGPrimary rounded-md">OnlyFans</span>{" "}
            <br />
            revenue with AI Powers✨
          </h1>
          <div className="w-[594px] text-center text-textSecondary text-base font-normal leading-[170%] mt-3">
            FansIQ helps you and your chatters focus on fans that make you the
            most revenue and provide AI chatting tools to grow your revenue.
          </div>

          <div className="w-40 h-12 p-4 bg-sky-600 rounded-md justify-center items-center gap-2.5 inline-flex mt-6">
            <button className="text-white text-sm font-medium">
              Get Started - free
            </button>
          </div>

          <div className="mt-[60px]">
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