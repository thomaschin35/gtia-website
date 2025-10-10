import React from "react";

const PlanePathAnimation = () => {
  return (
    <svg
      className="flight-path"
      viewBox="0 0 677 532"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1, // Adjust to fit layering
      }}
    >
      {/* Dotted path from Vector 1.svg */}
      <path
        id="flight-path"
        d="M2 0.5C2 0.5 9.2041 90.9879 64.5 178C124.5 272 254.5 375.5 437 404.5C557.5 423.5 654.5 473 675 528.5"
        stroke="#C8B06D"
        strokeWidth="6"
        fill="none"
        strokeDasharray="16 16"
      />

      {/* Plane SVG moving along the path */}
      <image
        href="/assets/images/plane.svg" // Your actual path to Vector.svg
        width="40"
        height="40"
      >
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#flight-path" />
        </animateMotion>
      </image>
    </svg>
  );
};

export default PlanePathAnimation;