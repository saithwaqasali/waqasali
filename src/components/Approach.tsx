import React from "react";
import ApproachCard from "./ui/ApproachCard";

const Approach = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-20  sm:px-0 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <ApproachCard
          title="Strategy & Architecture"
          phase="Phase 1"
          description="We define business goals, user flows, and technical requirements, then design a scalable architecture and clear roadmap for execution."
          cardType={1}
        />

        <ApproachCard
          title="Development & Iteration"
          phase="Phase 2"
          description="I build robust, maintainable full-stack solutions with clean code, secure APIs, and optimized frontend performance—sharing steady progress along the way."
          cardType={2}
        />

        <ApproachCard
          title="Optimization & Deployment"
          phase="Phase 3"
          description="Before launch, I refine performance, strengthen security, implement testing, and deploy with a reliable setup built for scale."
          cardType={3}
        />
      </div>
    </section>
  );
};

export default Approach;
