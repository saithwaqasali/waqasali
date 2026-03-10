// @ts-nocheck
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button } from "./ui/MovingBorders";
import { workExperiences } from "@/data";

const ExperienceCard = ({
  experience,
}: {
  experience: {
    date: string;
    icon: string;
    iconBg: string;
    title: string;
    company_name: string;
    points: string[];
  };
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      ref={undefined}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] rounded-full object-contain"
          />
        </div>
      }
    >
      <Button
        key={experience.date}
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: "#000000",
          backgroundColor: "#000000",
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="flex flex-col items-start p-4 md:p-8 pb-6 text-left">
          <div className="text-left">
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p
              className="text-white-200 text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className="mt-5 list-disc ml-3 md:ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Button>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="py-20 w-full md:px-8 max-w-7xl mx-auto">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-20">
        <VerticalTimeline>
          {workExperiences?.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
