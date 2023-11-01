"use client";

import React, { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const pricings = [
  {
    title: "Basic",
    price: 95,
    desc: "You will never want to miss these features after you try them once.",
    features: [
      {
        title: "Sent media highlighting in the vault",
        available: true,
      },
      {
        title: "Scripts auto completion",
        available: true,
      },
      {
        title: "Better vault with easily accessible tabs and media labeling.",
      },
      {
        title: "Media suggestions in vault when using scripts.",
      },
      {
        title: "Automatic follow up messages after sent out PPVs.",
      },
      {
        title: "Personalised mass messages to online fans.",
      },
    ],
  },
  {
    title: "Advanced",
    price: 165,
    desc: "For the agencies that want to work more efficiently than ever before.",
    features: [
      {
        title: "Sent media highlighting in the vault",
        available: true,
      },
      {
        title: "Scripts auto completion",
        available: true,
      },
      {
        title: "Better vault with easily accessible tabs and media labeling.",
        available: true,
      },
      {
        title: "Media suggestions in vault when using scripts.",
        available: true,
      },
      {
        title: "Automatic follow up messages after sent out PPVs.",
        available: true,
      },
      {
        title: "Personalised mass messages to online fans.",
      },
    ],
  },
  {
    isActive: true,
    banner: "Best Choice",
    title: "Professional",
    price: 242,
    desc: "Advanced tracking + internal management and communication tools to streamline your operations and scale more than you have ever before.",
    features: [
      {
        title: "Sent media highlighting in the vault",
        available: true,
      },
      {
        title: "Scripts auto completion",
        available: true,
      },
      {
        title: "Better vault with easily accessible tabs and media labeling.",
        available: true,
      },
      {
        title: "Media suggestions in vault when using scripts.",
        available: true,
      },
      {
        title: "Automatic follow up messages after sent out PPVs.",
        available: true,
      },
      {
        title: "Personalised mass messages to online fans.",
        available: true,
      },
    ],
  },
];

const PricingCard = ({ title, price, desc, features, banner, isActive }) => {
  const [showAll, setShowAll] = useState(false);

  const featuresToRender = showAll ? features : features.slice(0, 4);
  return (
    <div
      className={`bg-[#131426] py-10 px-5 rounded relative border ${
        isActive ? "border-[#008CCF]" : "border-[#131426]"
      }`}
    >
      {/* banner */}
      {banner && (
        <div
          className="absolute py-[6px] top-0 left-0 right-0 bg-[#008CCF] text-white text-center text-base"
          style={{
            borderRadius: "4px 4px 0px 0px",
          }}
        >
          <p className="leading-[100%]">{banner}</p>
        </div>
      )}

      {/* header   */}
      <p className="text-[#94A2C9] text-base leading-[170%] text-center font-normal">
        {title}
      </p>
      {/* header   */}

      {/* pricing */}
      <div className="text-center pt-10 lg:pt-[72px] pb-[64px] relative">
        <h4 className="text-[#F8F8FF] text-[80px] lg:text-[72px] font-light leading-[100%] ">
          ${price} <sub className="text-[#94A2C9] text-2xl lg:text-xl">/mo</sub>
        </h4>
        <p className="text-[#94A2C9] text-xl font-light leading-[100%] mt-3">
          Creator
        </p>
      </div>

      {/* pricing */}
      <div className="h-auto py-8 lg:py-0 lg:h-[172px] flex items-center justify-center">
        <p className="text-[#94A2C9] leading-[170%] text-center text-lg lg:text-base font-light">
          {desc}
        </p>
      </div>

      {/* trial */}
      <div className="cursor-pointer z-10 w-full py-3 bg-[#008CCF] relative overflow-hidden before:-z-10 before:content-[''] before:absolute before:bg-[#37BDF8] before:right-[105%] before:-top-[80px] before:w-[200%] before:h-[150px] before:rotate-[10deg] before:transition-all before:duration-500 hover:before:right-[-25%] rounded-md justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-base lg:text-sm font-medium">
          Start 7 days Free Trial
        </div>
      </div>
      {/* trial */}

      {/* features */}
      <div className="py-12 flex flex-col gap-5">
        {featuresToRender.map((feature, index) => {
          return (
            <div key={index}>
              <div className="flex items-start gap-3">
                <Image
                  src={feature.available ? "/check.svg" : "/close.svg"}
                  height={24}
                  width={24}
                  alt="check"
                />
                <p
                  className="font-normal leading-[160%] text-lg lg:text-base"
                  style={{
                    color: feature.available ? "#94A2C9" : "#545B77",
                  }}
                >
                  {feature.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* features */}

      {/* button */}
      <div
        className="group cursor-pointer py-3 bg-[#131426] rounded-md flex items-center justify-center gap-4 border border-[#545B77]"
        onClick={() => setShowAll(!showAll)}
      >
        <p className="text-[#94A2C9] text-base lg:text-sm font-medium group-hover:text-[#ffffff]">
          Show all feature
        </p>
        <Image
          src="/expand_more.svg"
          height={20}
          width={20}
          alt="arrow"
          className="group-hover:hidden"
          style={{
            transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
        <Image
          src="/expand_more_white.png"
          height={20}
          width={20}
          alt="arrow"
          className="hidden group-hover:inline-flex"
          style={{
            transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
    </div>
  );
};

const PricingHeader = ({ onChangeAnnual, annualActive }) => {
  return (
    <div className="pt-[80px] lg:pt-[120px] bg-priceHeaderBG bg-cover bg-no-repeat bg-center">
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <h2 className="w-full lg:w-[630px] text-[#F8F8FF] text-[30px] lg:text-[44px] font-semibold  leading-[130%]">
            For every Business, we have the{" "}
            <span className="px-1 textBGPrimary rounded-md">
              Perfect pricing
            </span>{" "}
            plan
          </h2>

          <p className="w-full md:w-[392px] text-[#94A2C9] leading-[170%] font-normal">
            For every onlyFans account you manage, you can choose a different
            license depending on your needs
          </p>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-start gap-4 mt-[60px] lg:mt-20 text-lg lg:text-base">
          <p className="text-[#F8F8FF] font-bold leading-none">Monthly</p>

          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={annualActive}
                onChange={() => onChangeAnnual(!annualActive)}
                className="sr-only"
              />
              <div
                className={`box block h-6 w-14 rounded-full border-2 border-[#6F7FAB] `}
              ></div>
              <div
                className={`absolute -left-[4px] -top-[4px] flex h-8 w-8 items-center justify-center rounded-full bg-white transition ${
                  annualActive ? "translate-x-full" : ""
                }`}
                style={{
                  backgroundImage: "url(/tick.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </label>
          <p className="text-[#94A2C9] font-normal ">
            Annually{" "}
            <span className=" text-[#018CCF] whitespace-nowrap">
              (Save 20%)
            </span>
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <PricingHeader onChangeAnnual={setAnnual} annualActive={annual} />

      <div className="mt-10 lg:mt-[62px]">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {pricings.map((pricing, index) => {
              return <PricingCard {...pricing} key={index} />;
            })}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};
