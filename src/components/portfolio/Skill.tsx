"use client";
//Packages import
import Image from "next/image";
import { motion } from "framer-motion";

//Data import
import abs from "@/assets/abs.png";
import { webTechStack, otherTechStack } from "@/constants/Skills";

const Skill = () => {
  return (
    <div className="flex h-screen flex-col space-y-8 items-center justify-center overflow-hidden gradient relative ">
      <div
        className="h-screen flex flex-col 
        relative text-center md:text-left md:flex-row 
       max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3
          className="absolute top-24 uppercase 
         tracking-[20px] text-gray-500 text-2xl"
        >
          Skills
        </h3>
      </div>
      <div className="primaryGradient md:h-12 h-24 flex items-center justify-end absolute top-[30vh] left-0 w-screen z-0 p-4">
        This is the collection of technology stacks that I frequently use and
        feel at ease with, but it's expected that the list will expand
        continuously.
      </div>
      <div className="secondaryGradient md:h-12 h-24 flex items-center absolute md:top-[90vh] top-[80vh] left-0 w-screen z-0 p-4">
        Although these technologies aren't specifically related to web
        development, I possess a strong comprehension of them.
      </div>
      <Image
        src={abs}
        alt="abstract"
        className="absolute md:top-[4vh] top-20 left-[0vw] md:w-[400px] w-48 z-10"
      />
      <motion.div
        initial={{
          y: -40,
          x: 0,
          rotate: 45,
        }}
        animate={{
          y: [0, -40, 0],
          x: [-40, 0, -40],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-[18vh] left-[5vw] md:w-40 md:h-40 w-10 h-10 glassEffect bg-[#f7ac0a1e] rounded-full z-20"
      />
      <div className="absolute w-full rotate-[-35deg] left-[13vw] top-[36vh]">
        <div className="climbingPlane z-30 absolute top-96">
          <div className="climbingCube" />
        </div>
      </div>
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: [-3000, 0, 0, -3000],
        }}
        transition={{
          duration: [10, 0, 10],
          repeat: Infinity,
        }}
        className="absolute md:top-[340px] top-[400px] left-0 flex justify-start items-center gap-8 w-[6000px] slider"
      >
        {webTechStack.map((item) => (
          <div
            key={item.key}
            className="h-[100px] w-[268px] elevatedEffect slide flex justify-center items-center gap-6 uppercase tracking-[5px] text-gray-500"
          >
            <span className="text-[30px]">
              <item.icon />
            </span>
            <p>{item.name}</p>
          </div>
        ))}
        {webTechStack.map((item) => (
          <div
            key={item.key}
            className="h-[100px] w-[268px] elevatedEffect slide flex justify-center items-center gap-6 uppercase tracking-[5px] text-gray-500"
          >
            <span className="text-[30px]">
              <item.icon />
            </span>
            <p>{item.name}</p>
          </div>
        ))}
      </motion.div>
      <div className="absolute md:top-[76vh] top-[68vh] left-[24px] z-10 lg:w-[800px] w-[100vw]  md:gap-6 gap-2 flex justify-start flex-wrap items-center">
        {otherTechStack.map((item) => (
          <div
            key={item.key}
            className=" md:w-[200px] md:h-[80px] border border-[#f7ac0a44] rounded-xl uppercase tracking-[4px] text-gray-500 p-2 flex justify-center items-center"
          >
            {" "}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill
