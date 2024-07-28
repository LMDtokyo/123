import React, { useState } from "react";
import ServContent from "../sub/ServContent";
import axios from "axios";

const Hero = () => {
    return (
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <ServContent />
      </div>
    );
  };
  
  export default Hero;