import React from "react";

const About = ({ className }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <path
        d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z"
        fill="currentColor"
        className="transition-color duration-1000 fill-white dark:fill-[#FF9900]"
      />
      <rect x="60" y="54.5" width="8" height="40" />
      <rect x="60" y="35.5" width="8" height="8" />
    </g>
  </svg>
);

export default About;
