"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const [activeNav, setactiveNav] = useState("ABOUT");

  return (
    <main className="flex flex-col md:flex-row items-center gap-10 bg-secondary w-full min-h-screen justify-center p-6 md:p-10 xl:px-20">
      {/* Left Side - Hero Section */}
      <div className="w-full md:w-1/2">
        <HeroSection activeNav={activeNav} setActiveNav={setactiveNav} />
      </div>

      {/* Right Side - Conditional Component Rendering */}
      <div className="w-full md:w-1/2">
        {activeNav === "ABOUT" ? (
          <AboutMe />
        ) : activeNav === "EXPERIENCE" ? (
          <Experience />
        ) : activeNav === "SKILLS" ? (
          <Skills />
        ) : activeNav === "PROJECTS" ? (
          <Projects />
        ) : null}
      </div>
    </main>
  );
}
