import React from "react";
import HeroSection from "../components/HeroSection";
import WhatIDo from "../components/WhatIDo";
import DesignProjects from "../components/DesignProjects";
import SkillsSection from "../components/SkillsSet";
import ServicesSection from "../components/ServicesSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <WhatIDo />
      <ServicesSection/>
      <DesignProjects />
      <SkillsSection/>
      
    </div>
  );
};

export default Landing;
