"use client";

import React, { useState } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import Image from "next/image";

const productLinks = [
  {
    name: "For Agencies",
    link: "#",
  },
  {
    name: "For Independent Creators",
    link: "#",
  },
  {
    name: "Features",
    link: "#",
  },
  {
    name: "Case Studies",
    link: "#",
  },
];

const quickLinks = [
  {
    name: "About us",
    link: "#",
  },
  {
    name: "OnlyFans Academy",
    link: "#",
  },
  {
    name: "How To Promote Only fans",
    link: "#",
  },
  {
    name: "OnlyFans Alternatives",
    link: "#",
  },
  {
    name: "Terms of Use",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
];

const Logo = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Image src="/Logo.svg" alt="Logo" width={28} height={34} />
      <p className="text-center text-slate-50 text-[26px] ">FansIQ</p>
    </div>
  );
};

const MobileLinks = ({ header, links, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-[#94A2C9] text-base font-medium">{header}</h4>
        <Image
          src="/arrow_forward_ios.svg"
          height={20}
          width={20}
          alt="icon"
          style={{
            transform: open ? "rotate(0deg)" : "rotate(90deg)",
          }}
        />
      </div>
      {open && (
        <div>
          {links && (
            <ul className="text-[#6C7695] text-sm font-[300] leading-9 list-square list-inside mt-4">
              {quickLinks.map((link) => (
                <li
                  className="cursor-pointer hover:text-textPrimary"
                  key={link.name}
                >
                  {link.name}
                </li>
              ))}
              <li>About us</li>
            </ul>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Logo />
        <h4 className=" text-slate-500 text-sm font-light leading-normal text-center md:text-left mt-6 pb-6">
          Lores opossum of dollar is a text sadipiscing elit arbiter sem justo
          site amen .
        </h4>
      </div>

      <MobileLinks header="Our Product" links={productLinks} />
      <MobileLinks header="Quick Link" links={quickLinks} />
      <MobileLinks header="Contact us">
        <ul className="list-square list-inside text-[#6C7695] font-light text-[14px] mt-5">
          <li>
            Phone: <br />
            <span className="inline-block pl-5">
              (704) 555-0127 <br />
              (316) 555-0116
            </span>
          </li>
          <li className="mt-5">
            Email Us: <br />
            <span className="inline-block pl-5">bill.sanders@example.com</span>
          </li>

          <div>
            <div className="w-full mt-[20px]">
              <input
                type="text"
                placeholder="Enter your Message"
                className="text-textSecondary py-[14px] px-4 text-[12px] w-full placeholder:text-[#686B95] placeholder:font-light rounded-md"
              />

              <div className="relative overflow-hidden before:-z-10 before:content-[''] before:absolute before:bg-[#37BDF8] before:right-[110%] before:-top-[32px] before:w-[200%] before:h-[200%] before:rotate-[15deg] before:transition-all before:duration-500 hover:before:right-[-10%] z-10 w-[109px] h-[31px] px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-700 rounded justify-center items-center gap-2.5 inline-flex mt-[18px]">
                <button className="min-w-max outline-none border-none py-2 px-4 text-white text-xs font-medium">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </ul>
      </MobileLinks>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="bg-[#0E0F1C]">
      <div className="bg-footerBG bg-cover bg-no-repeat bg-center">
        <SectionWrapper>
          <div className="pb-12 md:pb-20">
            {/* mobile */}
            <div className="block md:hidden">
              <MobileFooter />
            </div>
            {/* mobile */}

            {/* desktop */}
            <div className="hidden md:flex flex-wrap items-start justify-between gap-5 lg:gap-0">
              {/*  */}
              <div className="w-full md:w-[236px] flex flex-col justify-start items-center  md:items-start gap-6">
                <Logo />
                <h4 className=" text-slate-500 text-sm font-light leading-normal text-center md:text-left">
                  Lores opossum of dollar is a text sadipiscing elit arbiter sem
                  justo site amen .
                </h4>
              </div>

              {/* desktop links */}
              <div className="hidden md:block">
                <h4 className="text-[#94A2C9] text-sm font-medium">
                  Our Product
                </h4>
                <ul className="text-[#6C7695] text-sm font-light leading-9 list-square list-inside  mt-9">
                  {productLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-textPrimary"
                      key={link.name}
                    >
                      {link.name}
                    </li>
                  ))}
                  <li>About us</li>
                </ul>
              </div>
              {/*  */}
              <div>
                <h4 className="text-[#94A2C9] text-sm font-medium">
                  Quick Links
                </h4>
                <ul className="text-[#6C7695] text-sm font-[300] leading-9 list-square list-inside mt-9">
                  {quickLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-textPrimary"
                      key={link.name}
                    >
                      {link.name}
                    </li>
                  ))}
                  <li>About us</li>
                </ul>
              </div>
              {/* contact */}
              <div>
                <h4 className="text-[#94A2C9] text-sm font-medium">
                  Contact us
                </h4>
                <div>
                  <ul className="list-square list-inside text-[#6C7695] font-light text-[14px] mt-9">
                    <li>
                      Phone: <br />
                      <span className="inline-block pl-5">
                        (704) 555-0127 <br />
                        (316) 555-0116
                      </span>
                    </li>
                    <li className="mt-5">
                      Email Us: <br />
                      <span className="inline-block pl-5">
                        bill.sanders@example.com
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="w-[256px] mt-[28px]">
                    <input
                      type="text"
                      placeholder="Enter your Message"
                      className="text-textSecondary py-[14px] px-4 text-[12px] w-full placeholder:text-[#686B95] placeholder:font-light rounded-md"
                    />

                    <div className="relative overflow-hidden before:-z-10 before:content-[''] before:absolute before:bg-[#37BDF8] before:right-[110%] before:-top-[32px] before:w-[200%] before:h-[200%] before:rotate-[15deg] before:transition-all before:duration-500 hover:before:right-[-10%] z-10 w-[109px] h-[31px] px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-700 rounded justify-center items-center gap-2.5 inline-flex mt-[18px]">
                      <button className="min-w-max outline-none border-none py-2 px-4 text-white text-xs font-medium">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
                {/* desktop links */}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* bottom footer */}
      <div>
        <SectionWrapper>
          <div className="py-5 md:py-10 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
            <p className="text-center text-[#686B95] text-xs font-light">
              Copyright © 2023 FansIQ. All rights reserved.
            </p>

            <div>
              <Image
                src="/icons/social.svg"
                height={40}
                width={210}
                alt="social"
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};
