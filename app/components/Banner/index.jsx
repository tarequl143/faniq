import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-[#0E0F1C] py-[60px] lg:py-20">
      <SectionWrapper>
        <div className="relative">
          <div className="z-10 relative rounded-xl flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between py-[46px] lg:py-20 px-[36px] lg:px-[166px] bg-bannerBG bg-cover bg-no-repeat bg-center">
            <div className="w-full lg:w-[400px] text-center lg:text-left">
              <div className="text-slate-50 text-[28px] lg:text-[32px] font-semibold leading-[41px]">
                It&rsquo;s time to work like the professionals.
              </div>
            </div>

            <div className="p-4 bg-white rounded-md border justify-center items-center gap-2.5 inline-flex cursor-pointer z-10">
              <div className="text-neutral-900 text-sm font-medium">
                Get Started - free
              </div>
            </div>

            {/* icon */}
            <div
              className="hidden lg:block absolute right-[56px]"
              style={{
                zIndex: -0,
              }}
            >
              <Image src="/BannerIcon.png" height={210} width={172} alt="" />
            </div>
            {/* onmobile */}
            <div
              className="block lg:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 "
              style={{
                zIndex: -0,
              }}
            >
              <Image src="/BannerIcon.png" height={210} width={172} alt="" />
            </div>
            {/* onmobile */}
          </div>

          {/* decoration */}
          <div
            className="hidden 2xl:block h-[90px] absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3 z-0 bg-cover bg-no-repeat bg-center banner-decoration "
            style={{
              backgroundImage: "url(/BannerDecoration.png)",
            }}
          ></div>
        </div>
      </SectionWrapper>
    </div>
  );
};
