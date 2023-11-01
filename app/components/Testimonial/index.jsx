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
    <div className="bg-[#0E0F1C] pt-[80px] pb-10 lg:pb-[110px]">
      <SectionWrapper>
        <h2 className="text-center text-slate-50 text-[30px] lg:text-[44px] font-semibold lg:leading-[57.20px]">
          Join 850+ of Top Agencies
        </h2>

        {/*  */}
        <div className="relative w-[90%] lg:w-[666px] mx-auto">
          <div className="relative px-[22px] lg:px-[60px] pt-[72px] pb-[40px] lg:pb-[52px] bg-[#131426] rounded-xl mt-[90px] lg:mt-[120px] z-10">
            {/* avatar */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
              <Image height={72} width={72} src="/Avatar.svg" alt="avatar" />
            </div>
            {/* avatar */}

            <h5 className="text-center text-[#94A2C9] text-lg leading-[150%] lg:text-base font-normal lg:leading-7">
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
          <div className="absolute left-1/2 top-1/2 w-[107%] h-[92%] lg:h-[84%] rounded-xl bg-testimonialBg bg-cover bg-center trandform -translate-x-1/2 -translate-y-1/2 " />
        </div>

        {/*  */}
        <div className="w-full flex gap-6 md:gap-16 flex-wrap items-center justify-center lg:mt-5">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt="brand"
              width={108}
              height={108}
              className="h-20 w-20 md:w-[108px] md:h-[108px]"
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};
