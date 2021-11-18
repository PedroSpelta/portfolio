import React, { useState } from "react";

function ArrowdownIcon({setMini, mini}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`flex justify-center items-end h-12 rounded-t-full ${mini? "rotate-180 transform !items-start": ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setMini(!mini)}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={`${hover? "21pt": "20pt"}`}
        height={`${hover? "21pt": "20pt"}`}
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={`${hover ? "white" : "black"}`}
          stroke="none"
        >
          <path
            d="M302 3837 l-302 -302 1280 -1280 1280 -1280 1280 1280 1280 1280
-302 302 -303 303 -977 -977 -978 -978 -978 978 -977 977 -303 -303z"
          />
        </g>
      </svg>
    </div>
  );
}

export default ArrowdownIcon;
