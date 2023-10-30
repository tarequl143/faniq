import React from "react";

export const SectionWrapper = ({ props, children }) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};
