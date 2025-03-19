"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const WorldMap = ({ dots }) => {
  const svgRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const convertToSVGCoordinates = (lat, lng) => {
    // Convert latitude and longitude to SVG coordinates
    const x = ((lng + 180) * 800) / 360;
    const y = ((90 - lat) * 400) / 180;
    return { x, y };
  };

  const renderDots = () => {
    return dots.map((dot, index) => {
      const start = convertToSVGCoordinates(dot.start.lat, dot.start.lng);
      const end = convertToSVGCoordinates(dot.end.lat, dot.end.lng);

      return (
        <g key={index}>
          {/* Connection line */}
          <motion.path
            d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${
              Math.min(start.y, end.y) - 50
            } ${end.x} ${end.y}`}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: index * 0.5 }}
            className="text-neutral-500"
          />

          {/* Start dot */}
          <motion.circle
            cx={start.x}
            cy={start.y}
            r="4"
            className="fill-neutral-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          />

          {/* End dot */}
          <motion.circle
            cx={end.x}
            cy={end.y}
            r="4"
            className="fill-neutral-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 + 1 }}
          />
        </g>
      );
    });
  };

  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      <svg
        ref={svgRef}
        width="800"
        height="400"
        viewBox="0 0 800 400"
        className="w-full h-full"
        style={{ background: "transparent" }}
      >
        {/* World Map Outline */}
        <path
          d="M0 0 L800 0 L800 400 L0 400 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-neutral-500/20"
        />
        {/* Simple World Map Grid */}
        <g className="text-neutral-500/10">
          {[...Array(8)].map((_, i) => (
            <path
              key={`vertical-${i}`}
              d={`M${(i + 1) * 100} 0 L${(i + 1) * 100} 400`}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <path
              key={`horizontal-${i}`}
              d={`M0 ${(i + 1) * 100} L800 ${(i + 1) * 100}`}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </g>
        {renderDots()}
      </svg>
    </div>
  );
}; 