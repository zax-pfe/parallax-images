// import background from "../../public/images/background.png";
// import intro from "../../public/images/intro.png";

import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

import "../styles/intro.css";
import Image from "next/image";
export default function Intro() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // const { scrollYProgress } = useScroll({
  //   target: backgroundimageref,
  //   offset: ["start start", "end start"],
  // });

  const introImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const introText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleDiv = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div className="intro" style={{ scale: scaleDiv }}>
      <div ref={ref} className="background-image">
        <Image src="/images/background.jpeg" fill={true} alt="background" />
      </div>

      <div className="intro-container">
        <div data-scroll data-scroll-speed="0.3" className="intro-elements">
          <motion.div style={{ y: introImage }} className="intro-image">
            <Image src="/images/intro.png" fill={true} alt="intro" />
          </motion.div>
          <motion.h1 style={{ y: introText }} className="intro-text">
            smooth scroll
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
