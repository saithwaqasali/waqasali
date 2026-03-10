import { services } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLocationArrow } from "react-icons/fa6";

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="px-4 sm:px-6 md:px-8"
    >
      <div className="pt-20">
        <h2 className="heading">
          I Offer these <span className="text-purple">Services</span>
        </h2>
      </div>
      <div className="w-full py-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.map((item, i) => (
          <div
            key={i}
            className="w-full"
          >
            <Button
              key={i}
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
              <div className="flex flex-col items-center justify-start gap-2 p-4 md:p-6 pt-6 md:pt-8 text-left h-full w-full">
                <h4 className="text-white text-[24px] font-bold text-center mb-2">
                  {item.title}
                </h4>
                <p className="text-white-200 text-[16px] font-semibold w-full">
                  {item.description}
                </p>
                <ul className="text-white-200 text-[16px] font-semibold list-disc mt-2 pl-4">
                  {item.offers.map((offer, idx) => (
                    <li key={idx}>{offer}</li>
                  ))}
                </ul>
              </div>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="https://fiver.com/waqasali365"
          target="_blank"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
        >
          <span className="relative z-10">Visit Freelance Profile</span>
          <FaLocationArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default ServicesGrid;
