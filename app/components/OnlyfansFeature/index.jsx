import React from "react";
import { SectionWrapper } from "../SectionWrapper";

export const OnlyFansFeatures = () => {
  return (
    <div className="bg-[#0E0F1C] pt-[80px] md:pt-[120px] pb-[60px] md:pb-[84px]">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-around align-center">
          <h2 className="w-full md:w-[434px] text-[#F8F8FF] text-[30px] md:text-[44px] text-center md:text-left font-semibold md:leading-[57px]">
            Made For{" "}
            <span className="px-1 textBGPrimary rounded-md">OnlyFans</span>{" "}
            Agencies Success
          </h2>
          <p className="w-full md:w-[418px] text-[#94A2C9] text-lg lg:text-base text-center md:text-left font-normal leading-7">
            Nunc rhoncus eget erat eget tempus. In nunc dolor, accumsan eget
            ipsum ut, hendrerit accumsan leo. Nullam ullamcorper ante ac
            fringilla mollis euismod sem dolor
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};
