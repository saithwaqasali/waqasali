import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

import RippleButton from "./RippleButton";
import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import VariableProximity from "./ui/VariableProximity";
import { RetroGrid } from "./ui/RetroGrid";
import WhatsAppRippleButton from "./WhatsAppRippleButton";

const Hero = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Trigger animation immediately on mount
    setIsVisible(true);
  }, []);

  const renderSplitText = (text: string) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className="inline-block transition-all duration-700 ease-out bg-gradient-to-r from-blue-400 via-purple to-blue-400 bg-clip-text text-transparent"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(32px)",
          transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div className="absolute w-screen h-screen left-0 right-0 top-0 pointer-events-none overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-[95%]"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div
        ref={containerRef}
        className="flex justify-center relative mb-20 mt-10 sm:my-20 z-10 px-4 sm:px-6"
      >
        <div className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-[80vw] flex flex-col md:flex-row items-center justify-center gap-8 mx-auto">
          {/* Left side - Text content */}
          <div className="flex flex-col items-center text-center md:w-full animate-fadeIn">
            <div className="mb-6">
              <div className="inline-block relative w-full">
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-center w-full">
                  <span className="hidden sm:block">
                    {renderSplitText("Hi I'm, Saith Waqas Ali")}
                  </span>
                  <span className="sm:hidden block">
                    {renderSplitText("Saith Waqas Ali")}
                  </span>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple mt-2 rounded-full animate-fadeIn"></div>
              </div>
            </div>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-8 mb-6 text-center animate-fadeIn">
              {/* <VariableProximity
                label="AWS Certified Full-Stack Mern Engineer specializing in Web3 and modern JavaScript ecosystems. Skilled in Node, Nest, Express, Next, React, and Vue, I build scalable systems and immersive front-end experiences powered by Three.js and GSAP."
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 700, 'opsz' 40"
                // containerRef={containerRef}
                radius={120}
                falloff="linear"
                className="text-gray-300 variable-proximity"
              /> */}
              <p className="font-medium">
                AWS-Certified Full-Stack Engineer with <b>6+</b> years
                delivering interactive solutions for global teams.
              </p>
              <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-4">
                <p className="font-medium flex items-center gap-2">
                  🌍 Available for Remote Work{" "}
                  <span className="hidden sm:block">(US / EU Timezones)</span>
                </p>
                <p className="font-medium">💼 Open to Contract & Freelance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full sm:w-auto animate-fadeIn">
              <a
                href="https://drive.google.com/file/d/1K-vY5ZlDuT0ZfPhOjVA2bvkISV_3gpH3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full sm:w-auto"
              >
                <RippleButton
                  title="My resume"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a
                href="#contact"
                className="cursor-pointer w-full sm:w-auto"
              >
                <RippleButton
                  title="Get in touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-screen h-screen left-0 right-0 top-0 retro-grid">
        <RetroGrid />
      </div>
      <a
        target="_blank"
        href="https://wa.me/923174394030"
        className="cursor-pointer fixed bottom-8 right-6 md:right-8 z-50 animate-fadeIn"
      >
        <WhatsAppRippleButton
          title="WhatsApp"
          position="right"
        />
      </a>
    </div>
  );
};

export default Hero;
