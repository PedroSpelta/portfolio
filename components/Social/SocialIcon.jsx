import React, { useState } from "react";

function SocialIcon({ children, height, width }) {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <a
        className={`w-14 h-14 flex justify-center items-center ${hover? "pb-2": ""} duration-200`}
        href="https://google.com"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          width={width}
          height={height}
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill={`${hover ? "white" : "black"}`}
            stroke="none"
          >
            {children}
          </g>
        </svg>
      </a>
    </div>
  );
}

export default SocialIcon;
