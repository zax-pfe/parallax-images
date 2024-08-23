"use client";
import React from "react";
import "../styles/description.css";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "men are you kidding me ",
  "ma men the proximus is stressing me out",
  "this thing is crazy dude",
  "thanks god i m a country boy",
];

export default function Description() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div className="description">
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}
