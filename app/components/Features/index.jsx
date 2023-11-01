import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const FeatureTag = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-start gap-3 text-[#94A2C9] text-base font-medium leading-7">
      {/* icon */}
      <div className="hidden md:block">
        <Image src={icon} height={20} width={20} alt="icon" />
      </div>
      <div className="block md:hidden">
        <Image src={icon} height={24} width={24} alt="icon" />
      </div>
      {/* icon */}
      {title}
    </div>
  );
};

const FeatureCardDetails = ({
  title,
  description,
  label,
  circleColor,
  gradientClass,
  children,
}) => {
  const wrapperClass = `gradient-container before:bg-gradient-to-b ${gradientClass}"`;
  return (
    <div className={wrapperClass}>
      <div
        className="circle"
        style={{
          backgroundColor: circleColor,
        }}
      />
      <div className="px-8 lg:px-10 pb-7">
        <h6
          className={`text-lg lg:text-base font-medium leading-7`}
          style={{ color: circleColor }}
        >
          {label}
        </h6>
        <h3 className="w-full lg:w-[440px] text-[#F8F8FF] text-[24px] lg:text-[32px] font-semibold leading-[41.60px] mt-5">
          {title}
        </h3>
        <p className="w-full lg:w-[436.44px] text-[#94A2C9] text-lg lg:text-base font-normal leading-7 mt-5 lg:mt-7">
          {description}
        </p>

        <div className="w-max lg:w-[171px] h-[27px] mt-5">
          <button className="flex items-center justify-center gap-3 text-sky-600 hover:text-[#0DA6E9] text-xl lg:text-base font-semibold leading-7 ">
            See how it works{" "}
            <Image
              src="/icons/RightArrow.svg"
              height={20}
              width={20}
              alt="right-arrow-icon"
            />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

const FeatureImage = ({ src }) => {
  return (
    <div className={`hidden xl:block relative`}>
      <Image src={src} fill alt="feature-image" />
    </div>
  );
};

const FeatureWrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 lg:gap-20">
      {children}
    </div>
  );
};

export const Features = () => {
  return (
    <div className="py-20 lg:py-[120px] bg-[#0C0C14]">
      <SectionWrapper>
        <div>
          {/* header */}
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="w-full lg:w-[730px] text-center text-[#F8F8FF] text-3xl lg:text-[44px] font-semibold leading-[140%] lg:leading-[130%]">
              Upselling &{" "}
              <span className="px-1 textBGPrimary rounded-md">Automation</span>{" "}
              Tools For OnlyFans Agencies
            </h2>

            <p className="w-full lg:w-[570px] text-center text-textSecondary text-lg lg:text-base font-normal leading-[150%] lg:leading-7">
              Nunc rhoncus eget erat eget tempus. In nunc dolor, accumsan eget
              ipsum ut, hendrerit accumsan leo. Nullam ullamcorper ante ac
              fringilla mollis euismod sem dolor
            </p>
          </div>
          {/* header */}

          {/* feature card */}
          <div className="mt-20 flex flex-col gap-x-20 gap-y-[60px] lg:gap-y-[120px]">
            <FeatureWrapper>
              <FeatureCardDetails
                label={"1:1 Chatting"}
                title={"Make Your Chatters Better At Upselling PPVs"}
                description={
                  "Boost your 1:1 chatting results for all of your chatters with actionable insights on fans and PPVs. Apply a powerful and efficient chatting system with no effort."
                }
                circleColor="#6366F1"
                gradientClass={`from-[#818CF8] via-[#818df85f] to-[#0C0C14]`}
              >
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FeatureTag title="Fan's CRM" icon={"/icons/Analytics.svg"} />
                  <FeatureTag
                    title="Avoid Freeloaders"
                    icon={"/icons/Block.svg"}
                  />
                  <FeatureTag
                    title="Optimize PPVs"
                    icon={"/icons/Settings.svg"}
                  />
                  <FeatureTag
                    title="Boost Productivity"
                    icon={"/icons/Charger.svg"}
                  />
                </div>
              </FeatureCardDetails>
              <FeatureImage src={"/Chatting.svg"} />
            </FeatureWrapper>

            <FeatureWrapper>
              <FeatureImage src={"/MassMesseging.svg"} />

              <FeatureCardDetails
                reverse
                label={"Mass Messaging"}
                title={"OnlyFans Management Software Optimize Fans Engagements"}
                description={
                  "Supercharge your PPV mass messages with Smart Pricing and expired fans Auto-Follower."
                }
                circleColor="#EBB308"
                gradientClass="from-[#FBBF24] via-[#fbbe245f] to-[#0C0C14]"
              >
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FeatureTag
                    title="Personalized Pricing™"
                    icon={"/icons/Price_change.svg"}
                  />
                  <FeatureTag
                    title="Increase Retention"
                    icon={"/icons/Block.svg"}
                  />
                  <FeatureTag
                    title="Increase Retention"
                    icon={"/icons/Group_add.svg"}
                  />
                  <FeatureTag
                    title="Follow-Back Expired"
                    icon={"/icons/Group_remove.svg"}
                  />
                </div>
              </FeatureCardDetails>
            </FeatureWrapper>

            <FeatureWrapper>
              <FeatureCardDetails
                reverse
                label={"Track TikTok, Instagram & Twitter performance"}
                title={
                  "See how your TikTok, Instagram and Twitter growth helps grow your OnlyFans"
                }
                description={
                  "Track your TikTok, Instagram, and Twitter to understand your fans' demographics and boost your OnlyFans growth. Discover where they're from and their age to tailor your content. Leverage these insights to engage your audience and watch your revenue soar."
                }
                circleColor="#65A30A"
                gradientClass={`from-[#84CC16] via-[#83cc165e] to-[#0C0C14]`}
              ></FeatureCardDetails>
              <FeatureImage src={"/TrackTiktok.svg"} />
            </FeatureWrapper>
          </div>

          {/* feature card */}
        </div>
      </SectionWrapper>
    </div>
  );
};
