"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import pixarBabyMe from "../assets/pixarBabyMe.jpg";

const About = () => {
  return (
    <div className="relative">
      <div
        className="h-screen flex flex-col 
    relative text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3
          className="absolute top-24 uppercase 
      tracking-[20px] text-gray-500 text-2xl"
        >
          About
        </h3>
      </div>
      <Image
        src={pixarBabyMe}
        alt=""
        className="h-[580px] w-[580px] absolute left-0 bottom-0"
      />
      <div className="h-[76vh] w-[70vw] absolute bg-black right-0 bottom-0"></div>

    </div>
  );
};

export default About;
