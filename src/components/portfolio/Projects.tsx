"use client";
//Packages import
import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll } from "framer-motion";

//Data import
import { projects } from "@/constants/ProjectsData";

//Dynamic components import
const ProjectSliderCard = dynamic(() => import("@/components/portfolio/ProjectSliderCard"), {
  loading: () => <p>Loading...</p>,
});

const ProjectsDescription = dynamic(() => import("@/components/portfolio/ProjectsDescription"), {
  loading: () => <p>Loading...</p>,
});


const Projects = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  
  return (
    <div className="h-screen overflow-hidden gradient relative flex ">
      <h3
        className="absolute top-24 left-[40vw] uppercase 
         tracking-[20px] text-gray-500 text-2xl"
      >
        Projects
      </h3>
      <div className="flex h-screen  w-screen">
        <div className="h-[100vh] w-[50vw]">
          <>
            <svg
              id="progress"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute bottom-[-2px] left-[10px] -rotate-90 z-20"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="stroke-[15%] stroke-[#fafafa30] fill-none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator stroke-white stroke-[15%] bg-transparent "
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
            <ul
              ref={ref}
              className="flex list-none h-screen overflow-x-scroll w-[50vw] flex-shrink-0"
            >
              {projects.map((item, index) => (
                <li
                  key={index}
                  className="min-w-[46vw] h-screen flex justify-center items-start flex-col mx-[2vw]"
                >
                  <ProjectSliderCard />
                </li>
              ))}
            </ul>
          </>
        </div>
        <div className="h-[100vh] w-[50vw] flex justify-center items-end overflow-hidden">
             <ProjectsDescription />
        </div> 
      </div>
    </div>
  );
};

export default Projects;
