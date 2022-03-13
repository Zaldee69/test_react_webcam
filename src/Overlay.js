import React from "react";

const Overlay = () => {
  return (
    <svg
      preserveAspectRatio="none"
      style={{ borderRadius: "4px", width: "100%" }}
      viewBox="0 0 265 200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="overlay"
    >
      <defs>
        <mask id="overlay-mask" x="0" y="0" width="100%" height="100%">
          <rect
            style={{ width: "100%", height: "100%" }}
            x="0"
            y="0"
            fill="white"
          />
          <ellipse id="overlay-circle" cx="50%" cy="50%" rx="55" ry="70" />
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        mask="url(#overlay-mask)"
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default Overlay;
