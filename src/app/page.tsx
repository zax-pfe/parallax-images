"use client";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Intro from "@/components/Intro";
import Description from "@/components/Description";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Intro />
      <Description />
      <div className="h-[100vh]" />
    </div>
  );
}
