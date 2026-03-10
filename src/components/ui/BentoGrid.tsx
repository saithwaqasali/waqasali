import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";

import Lottie from "lottie-react";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import CollaborationNetwork from "./CollaborationNetwork";
import { Button } from "./MovingBorders";
import { FaReact, FaNodeJs, FaAws, FaEthereum, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiMongodb,
  SiSolana,
  SiFramer,
  SiThreedotjs,
} from "react-icons/si";

export const leftLists = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Framer", icon: <SiFramer /> },
];

export const rightLists = [
  { name: "AWS Pro", icon: <FaAws className="text-[#FF9900]" /> },
  { name: "Nest.JS", icon: <SiNestjs className="text-[#E0234E]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Web3/Wagmi", icon: <FaEthereum /> },
  { name: "Solana", icon: <SiSolana className="text-[#14F195]" /> },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "saithwaqasali@outlook.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  const handleCall = () => {
    window.open("https://calendly.com/saithwaqasali/30min", "_blank");
  };

  return (
    <div
      // className={cn(
      //   // Updated styling for pure black background with sleek outer border
      //   "row-span-1 relative overflow-hidden rounded-3xl border-2 border-white/[0.2] group/bento hover:shadow-xl hover:border-white/[0.4] transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
      //   className,
      // )}
      className={cn(
        "row-span-1 relative overflow-hiddenhover:shadow-xl hover:border-white/[0.4] transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        // Pure black background
        background: "#000000",
        backgroundColor: "#000000",
      }}
    >
      <Button
        key={id}
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: "#000000",
          backgroundColor: "#000000",
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        containerClassName="h-full w-full"
        className="h-full w-full flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div
          className={`relative h-full w-full ${id === 3 ? "text-center" : "text-left"}`}
        >
          <div className={`${id === 6 && "flex justify-center"} h-full`}>
            <div className="w-full h-full absolute">
              {img && (
                <img
                  src={img}
                  alt={img}
                  className={cn(imgClassName, "object-cover object-center ")}
                />
              )}
            </div>
            <div
              className={`absolute right-0 -bottom-5 ${
                id === 5 && "w-full opacity-80"
              } `}
            >
              {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  //   width={220}
                  className="object-cover object-center w-full h-full"
                />
              )}
            </div>
            {id === 6 && (
              // add background animation , remove the p tag
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>
            )}

            {/* Special layout for email card with MovingBorders */}
            {id === 6 ? (
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="flex-1 text-white h-full bg-black rounded-[1.75rem] border border-slate-800">
                  <div className="flex flex-col items-center justify-center p-3 py-6 md:p-5 lg:p-10 gap-4 h-full">
                    <div className="text-center">
                      <h1 className="text-start text-xl md:text-2xl font-bold mb-4">
                        {title}
                      </h1>
                    </div>

                    <div className="relative">
                      <div
                        className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
                      >
                        <Lottie
                          animationData={animationData}
                          loop={copied}
                          autoplay={copied}
                          style={{ height: 200, width: 400 }}
                        />
                      </div>

                      <MagicButton
                        title={"Book Discussion Call"}
                        icon={<IoCallOutline />}
                        position="left"
                        handleClick={handleCall}
                        otherClasses="!bg-[#161A31]"
                      />
                      {/* <MagicButton
                        title={
                          copied ? "Email is Copied!" : "Copy my email address"
                        }
                        icon={<IoCopyOutline />}
                        position="left"
                        handleClick={handleCopy}
                        otherClasses="!bg-[#161A31]"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : id === 1 ? (
              <div className="relative h-full w-full flex flex-col pt-4 sm:pt-0">
                {/* Collaboration Network Visual - Top */}
                <div className="flex-1 relative">
                  <CollaborationNetwork />
                </div>

                {/* Text Content - Bottom */}
                <div className="px-5 pb-5 lg:px-10 lg:pb-10">
                  <div className="font-sans font-extralight text-sm text-[#C1C2D3] mb-2 z-10">
                    {description}
                  </div>
                  <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                    {title}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={cn(
                  titleClassName,
                  "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                )}
              >
                <div
                  className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                >
                  {title}
                </div>
                <div
                  className={`font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 mt-1`}
                >
                  {description}
                </div>

                {/* for the github 3d globe */}
                {id === 2 && <GridGlobe />}

                {/* Tech stack list div */}
                {id === 5 && (
                  <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 overflow-hidden h-full">
                    {/* Left Column Marquee */}
                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 animate-marquee">
                      {[...leftLists, ...leftLists].map((item, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132E] text-white"
                        >
                          {item.icon}
                          {item.name}
                        </span>
                      ))}
                    </div>

                    {/* Right Column Marquee (Delayed or Reversed) */}
                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 animate-marquee-reverse">
                      {[...rightLists, ...rightLists].map((item, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132E] text-white"
                        >
                          {item.icon}
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Button>
    </div>
  );
};
