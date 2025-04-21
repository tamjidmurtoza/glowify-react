import React from "react";

const SectionHeading = ({ title, variant }) => {
  return (
    <h3
      className={`${variant}`}
      dangerouslySetInnerHTML={{ __html: title }}
    ></h3>
  );
};

export default SectionHeading;
