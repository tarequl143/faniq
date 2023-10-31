"use client";

import React, { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Image src="/Logo.svg" alt="Logo" width={28} height={34} />
      <p className="text-center text-slate-50 text-[26px] ">FansIQ</p>
    </div>
  );
};

const LinkItem = ({ props, children }) => {
  return (
    <span
      className="text-[#686B95] hover:text-slate-50 text-sm font-normal cursor-pointer"
      {...props}
    >
      {children}
    </span>
  );
};

const Links = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <LinkItem>Features</LinkItem>
      <LinkItem>Testimonials</LinkItem>
      <LinkItem>Pricing</LinkItem>
      <LinkItem>OnlyFans Academy</LinkItem>
    </div>
  );
};

const MobileLinks = () => {
  return (
    <div className="absolute z-50 bg-[#0E0F1C] bottom-0 left-0 right-0 transform translate-y-full py-4 flex flex-col md:hidden items-center justify-center gap-6">
      <LinkItem>Features</LinkItem>
      <LinkItem>Testimonials</LinkItem>
      <LinkItem>Pricing</LinkItem>
      <LinkItem>OnlyFans Academy</LinkItem>
      <div className=" inline-flex w-40 h-9 px-4 py-2.5 bg-violet-200 rounded-md border justify-center items-center gap-2.5 ">
        <button className="text-gray-900 text-sm font-medium">
          Get Started - free
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="py-5 md:p-5 bg-[#0E0F1C] relative">
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:block">
            <Links />
          </div>

          <div className="hidden md:inline-flex w-40 h-9 px-4 py-2.5 bg-violet-200 rounded-md border justify-center items-center gap-2.5 ">
            <button className="text-gray-900 text-sm font-medium">
              Get Started - free
            </button>
          </div>

          {/* mobile */}
          <div
            className="block md:hidden"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <Image src="/burger.svg" height={50} width={50} alt="burger" />
          </div>
          {showMobileNav && <MobileLinks />}
          {/* mobile */}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Navbar;
