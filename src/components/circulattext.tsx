// components/CircularText.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const CircularText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate }}
      className="flex items-center justify-center relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text
          fill="#f97316"
          fontSize="4"
          fontWeight="bold"
          letterSpacing="2"
        >
          <textPath href="#circlePath" startOffset="0%">
          HARSH NESARI • SOFTWARE ENGINEER • TECH EXPLORER •          </textPath>
        </text>
      </svg>

      {/* Glowing center dot */}
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full shadow-md shadow-black/20" />
    </motion.div>
  );
};

export default CircularText;
