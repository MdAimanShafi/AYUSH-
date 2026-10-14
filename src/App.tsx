import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProblemSolving } from "./components/ProblemSolving";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090F] text-[#F1F5F9] selection:bg-[#4388FF]/30 selection:text-[#48E6FF]">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 3D Canvas */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills & Problem Solving Foundations */}
        <Skills />

        {/* Selected Projects & Live Interactive Sandboxes */}
        <Projects />

        {/* Dedicated Problem Solving Philosophy */}
        <ProblemSolving />

        {/* Education & Learning Journey Timeline */}
        <Journey />

        {/* Direct Inquiries & Contact Form */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
