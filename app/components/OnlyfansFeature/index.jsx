import React from "react";
import { SectionWrapper } from "../SectionWrapper";

export const OnlyFansFeatures = () => {
  return (
    <div className="bg-[#0E0F1C] pt-[120px] pb-[84px]">
      <SectionWrapper>
        <div className="flex justify-around align-center">
          <h2 className="w-[434px] text-[#F8F8FF] text-[44px] font-semibold leading-[57px]">
            Made For{" "}
            <span className="px-1 textBGPrimary rounded-md">OnlyFans</span>{" "}
            Agencies Success
          </h2>
          <p className="w-[418.25px] text-slate-400 text-base font-normal leading-7">
            Nunc rhoncus eget erat eget tempus. In nunc dolor, accumsan eget
            ipsum ut, hendrerit accumsan leo. Nullam ullamcorper ante ac
            fringilla mollis euismod sem dolor
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};
