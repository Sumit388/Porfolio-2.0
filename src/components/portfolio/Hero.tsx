"use client";
//Packages import
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

//Assets import
import robot from "@/assets/robot.png";

const BackgroundCircles = dynamic(
  () => import("@/components/portfolio/BackgroundCircles")
);

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi! The name is Sumit.",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const [displayMessage, setDisplayMessage] = useState(false);

  const handleShowMessage = () => {
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={robot}
        className="absolute md:bottom-[164px] md:w-[800px] bottom-[400px] w-[600px] cursor-pointer"
        onClick={handleShowMessage}
        alt="robot"
      />
      <motion.div
        initial={{
          y: -10,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className={
          displayMessage
            ? `w-30 h-24 bg-[#ffffff0c] z-30 
        text-center p-5 absolute md:bottom-[300px] lg:left-[840px] left-20 bottom-52 glassEffect`
            : "hidden"
        }
      >
        Hey! This is Sumit Mishra.
        <br />
        Happy to have you here.
      </motion.div>

      <div className="mr-3 md:w-[380px] h-1 bg-[#fff] z-20 absolute md:bottom-[190px] w-[300px] bottom-[410px] " />

      <h2 className="text-sm uppercase text-gray-500 pb-2 md:tracking-[15px] tracking-[8px] absolute md:bottom-[150px] bottom-[380px]">
        Software Engineer
      </h2>

      <h1 className=" md:text-4xl text-2xl text-gray-400 z-10 absolute md:bottom-[100px] bottom-[340px]">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div className="pt-5 z-20 absolute md:bottom-10 bottom-40">
        <Link href="#about" scroll={false}>
          <button className="heroButton">About</button>
        </Link>
        <Link href="#">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href={"#skills"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"#projects"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
