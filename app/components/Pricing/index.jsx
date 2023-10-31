import React from "react";
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

const PricingCard = ({ title, price, desc, features, banner }) => {
  return (
    <div className="bg-[#131426] py-10 px-5 rounded relative">
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
      <div className="text-center pt-[72px] pb-[64px] relative">
        <h4 className="text-[#F8F8FF] text-[72px] font-light leading-[100%] ">
          ${price} <sub className="text-[#94A2C9] text-xl">/mo</sub>
        </h4>
        <p className="text-[#94A2C9] text-xl font-light leading-[100%] mt-3">
          Creator
        </p>
      </div>

      {/* pricing */}
      <div className="h-[172px] flex items-center justify-center">
        <p className="text-[#94A2C9] leading-[170%] text-center text-base font-light">
          {desc}
        </p>
      </div>

      {/* trial */}
      <div className="cursor-pointer w-full py-3 bg-[#008CCF] rounded-md justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-medium">
          Start 7 days Free Trial
        </div>
      </div>
      {/* trial */}

      {/* features */}
      <div className="py-12 flex flex-col gap-5">
        {features.map((feature, index) => {
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
                  className="font-normal leading-[160%] text-base"
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
      <div className="cursor-pointer py-3 bg-[#131426] rounded-md flex items-center justify-center gap-4 border border-[#545B77]">
        <p className="text-[#94A2C9] text-sm font-medium">Show all feature</p>
        <Image src="/expand_more.svg" height={20} width={20} alt="arrow" />
      </div>
    </div>
  );
};

const PricingHeader = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <h2 className="w-[630px] text-[#F8F8FF] text-[44px] font-semibold  leading-[130%]">
            For every Business, we have the{" "}
            <span className="px-1 textBGPrimary rounded-md">
              Perfect pricing
            </span>{" "}
            plan
          </h2>

          <p className="w-[392px] text-[#94A2C9] leading-[170%] font-normal">
            For every onlyFans account you manage, you can choose a different
            license depending on your needs
          </p>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-start gap-4 mt-20">
          <p className="text-[#F8F8FF] text-base font-bold leading-none">
            Monthly
          </p>

          <Image src="/switch.svg" height={20} width={40} alt="switch" />

          <p className="text-[#94A2C9] text-base font-normal ">
            Annually <span className="text-[#018CCF]">(Save 20%)</span>
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export const Pricing = () => {
  return (
    <div>
      <PricingHeader />

      <div className="mt-[62px]">
        <SectionWrapper>
          <div className="grid grid-cols-3 gap-[30px]">
            {pricings.map((pricing, index) => {
              return <PricingCard {...pricing} key={index} />;
            })}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};
