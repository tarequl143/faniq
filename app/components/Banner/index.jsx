import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-[#0E0F1C] py-20">
      <SectionWrapper>
        <div className="relative">
          <div className="z-10 relative flex items-center justify-between py-20 px-[166px] bg-bannerBG bg-cover bg-no-repeat bg-center">
            <div className="w-[400px]">
              <div className=" text-slate-50 text-[32px] font-semibold leading-[41px]">
                It&rsquo;s time to work like the professionals.
              </div>
            </div>

            <div className="p-4 bg-white rounded-md border justify-center items-center gap-2.5 inline-flex cursor-pointer z-10">
              <div className="text-neutral-900 text-sm font-medium ">
                Get Started - free
              </div>
            </div>

            {/* icon */}
            <div
              className="absolute right-[56px]"
              style={{
                zIndex: -0,
              }}
            >
              <Image src="/BannerIcon.png" height={210} width={172} alt="" />
            </div>
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
