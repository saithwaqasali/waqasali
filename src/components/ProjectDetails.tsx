import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import React, { use, useEffect } from "react";

interface Tag {
  id: string | number;
  name: string;
  path: string;
}

interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href?: string;
  closeModal: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const lenis = useLenis();
  useEffect(() => {
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = "auto";
    };
  }, [lenis]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-[320px] sm:max-w-[600px] 2xl:max-w-[750px] max-h-[80vh] sm:max-h-[95vh] overflow-y-auto border shadow-sm rounded-xl bg-gradient-to-l from-[#06091f] to-[#161a31] border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        data-lenis-prevent
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-lg top-5 right-5 bg-[#06091f] hover:bg-gray-500 border border-white/20"
        >
          <img
            src="assets/close.svg"
            className="w-5 h-5"
          />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription &&
            subDescription.map((subDesc, index) => (
              <p
                key={index}
                className="mb-3 font-normal text-neutral-400"
              >
                {subDesc}
              </p>
            ))}
          <div className="flex items-center gap-4 sm:gap-0 flex-col sm:flex-row justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover:-translate-y-1 duration-200"
                />
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover:-translate-y-1 duration-200 text-[#d6995c]"
              >
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-4"
                />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
