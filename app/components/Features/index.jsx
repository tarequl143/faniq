import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const FeatureTag = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-start gap-3 text-[#94A2C9] text-base font-medium leading-7">
      <Image src={icon} height={20} width={20} alt="icon" />
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
      <div className="px-10 pb-7">
        <h6
          className={`text-base font-medium leading-7`}
          style={{ color: circleColor }}
        >
          {label}
        </h6>
        <h3 className="w-[440.34px] text-slate-50 text-[32px] font-semibold leading-[41.60px] mt-5">
          {title}
        </h3>
        <p className="w-[436.44px] text-[#94A2C9] text-base font-normal leading-7 mt-7">
          {description}
        </p>

        <div className="w-[171px] h-[27px] mt-5">
          <button className="flex items-center justify-center gap-3 text-sky-600 text-base font-semibold leading-7 ">
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
    <div className={`relative`}>
      <Image src={src} fill alt="feature-image" />
    </div>
  );
};

const FeatureWrapper = ({ children }) => {
  return <div className="grid grid-cols-2 gap-20 mt-20">{children}</div>;
};

export const Features = () => {
  return (
    <div className="py-[120px] bg-[#0C0C14]">
      <SectionWrapper>
        <div>
          {/* header */}
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="w-[730px] text-center text-slate-50 text-[44px] font-semibold leading-[130%]">
              Upselling &{" "}
              <span className="px-1 textBGPrimary rounded-md">Automation</span>{" "}
              Tools For OnlyFans Agencies
            </h2>

            <p className="w-[570.56px] text-center text-textSecondary text-base font-normal leading-7">
              Nunc rhoncus eget erat eget tempus. In nunc dolor, accumsan eget
              ipsum ut, hendrerit accumsan leo. Nullam ullamcorper ante ac
              fringilla mollis euismod sem dolor
            </p>
          </div>
          {/* header */}

          {/* feature card */}

          <div className="flex flex-col gap-20">
            <FeatureWrapper>
              <FeatureCardDetails
                label={"1:1 Chatting"}
                title={"Make Your Chatters Better At Upselling PPVs"}
                description={
                  "Boost your 1:1 chatting results for all of your chatters with actionable insights on fans and PPVs. Apply a powerful and efficient chatting system with no effort."
                }
                circleColor="#6366F1"
                gradientClass={`from-[#818CF8] via-[#818CF8] to-[#0C0C14]`}
              >
                <div className="mt-10 grid grid-cols-2 gap-4">
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
                gradientClass="from-[#FBBF24] via-[#FBBF24] to-[#0C0C14]"
              >
                <div className="mt-10 grid grid-cols-2 gap-4">
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
                gradientClass={`from-[#84CC16] via-[#84CC16] to-[#0C0C14]`}
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
