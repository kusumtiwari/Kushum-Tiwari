"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  const [activeNav, setactiveNav] = useState("ABOUT");

  return (
    <main className="flex flex-row items-center gap-10 bg-secondary w-full h-screen justify-center p-10 xl:px-20">
      <div className="w-1/2">
      <HeroSection activeNav={activeNav} setActiveNav={setactiveNav} />
      </div>
      <div className="w-1/2">
        {activeNav === "ABOUT" ? <AboutMe /> : activeNav === "EXPERIENCE" ? <Experience/> : activeNav === "SKILLS" && <Skills/>}
      </div>
    </main>
  );
}
