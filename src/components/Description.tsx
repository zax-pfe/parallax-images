"use client";
import React from "react";
import "../styles/description.css";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const phrases = [
  "men are you kidding me ",
  "ma men the proximus is stressing me out",
  "this thing is crazy dude",
  "thanks god i m a country boy",
];

const paraWrapper = {
  visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
  hidden: { x: -50, opacity: 0 },
};

const paraVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  hidden: { x: -50, opacity: 0 },
};

export default function Description() {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.5 });

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  useEffect(() => {
    console.log(ref.current);
    console.log(`the element ${isInView ? "is" : "is NOT"} in view"}`);
  }, [isInView]);
  return (
    <motion.div
      variants={paraWrapper}
      // animate={isInView ? "visible" : "hidden"}
      whileInView="visible"
      initial="hidden"
      // viewport={{ once: true }}
      className="description"
      ref={ref}
    >
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </motion.div>
  );
}

function AnimatedText({ children }: { children: React.ReactNode }) {
  return <motion.p variants={paraVariants}>{children}</motion.p>;
}
