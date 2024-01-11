import React from "react";

export const PawIcon = ({ color, width }) => {
  const defaultWidth = 40;
  const height = (width || defaultWidth) * 0.95;

  return (
    <svg
      width={width || defaultWidth}
      height={height}
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="21.1261"
        cy="23.5693"
        rx="8.75434"
        ry="8.71258"
        transform="rotate(-25.2468 21.1261 23.5693)"
        fill={color || "white"}
      />
      <ellipse
        cx="7.40998"
        cy="22.032"
        rx="2.99593"
        ry="3.06333"
        transform="rotate(-25.2468 7.40998 22.032)"
        fill={color || "white"}
      />
      <ellipse
        cx="12.0199"
        cy="12.4686"
        rx="3.54064"
        ry="3.6203"
        transform="rotate(-25.2468 12.0199 12.4686)"
        fill={color || "white"}
      />
      <ellipse
        cx="21.0522"
        cy="7.8135"
        rx="3.89082"
        ry="3.97835"
        transform="rotate(-25.2468 21.0522 7.8135)"
        fill={color || "white"}
      />
      <ellipse
        cx="30.9086"
        cy="12.8423"
        rx="3.11265"
        ry="3.18268"
        transform="rotate(-25.2468 30.9086 12.8423)"
        fill={color || "white"}
      />
    </svg>
  );
};
