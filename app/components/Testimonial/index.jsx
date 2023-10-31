import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const brands = [
  "/brands/Heiss.png",
  "/brands/Heights.png",
  "/brands/Match.png",
  "/brands/Ema.png",
  "/brands/Hush.png",
];

export const Testimonial = () => {
  return (
    <div className="bg-[#0E0F1C] pt-[120px] pb-[110px]">
      <SectionWrapper>
        <h2 className="text-center text-slate-50 text-[44px] font-semibold leading-[57.20px]">
          Join 850+ of Top Agencies
        </h2>

        {/*  */}
        <div className="relative w-[666px] mx-auto">
          <div className="relative px-[60px] pt-[72px] pb-[52px] bg-[#131426] rounded-xl mt-[120px] z-10">
            {/* avatar */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
              <Image height={72} width={72} src="/Avatar.svg" alt="avatar" />
            </div>
            {/* avatar */}

            <h5 className="text-center text-[#94A2C9] text-base font-normal leading-7">
              After using FansIQ for almost a month my PPV sales have doubled.
              It&apos;s really helped me being able to automatically follow all
              my old subs. Makes my inbox super organised and the AI chat
              suggestions leave me speechless... I almost don&apos;t need to
              type anymore. I would recommend this app.
            </h5>
            <div className="text-center text-slate-50 text-base font-semibold leading-[170%] mt-8">
              -Ae Asia
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 w-[107%] h-[84%] rounded-xl bg-testimonialBg bg-cover bg-center trandform -translate-x-1/2 -translate-y-1/2 " />
        </div>

        {/*  */}

        <div className="w-full flex gap-16 items-center justify-center mt-5">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt="brand"
              width={108}
              height={108}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};
