import React from "react";
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
      className="text-slate-500 hover:text-slate-50 text-sm font-normal cursor-pointer"
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

const Navbar = () => {
  return (
    <div className="p-5 bg-[#0E0F1C]">
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <Logo />
          <Links />

          <div className="w-40 h-9 px-4 py-2.5 bg-violet-200 rounded-md border justify-center items-center gap-2.5 inline-flex">
            <button className="text-gray-900 text-sm font-medium">
              Get Started - free
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Navbar;
