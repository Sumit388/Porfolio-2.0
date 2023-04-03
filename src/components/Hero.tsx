"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const BackgroundCircles = dynamic(
  () => import("@/components/BackgroundCircles")
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

      <motion.img
        src="https://cdn.pixabay.com/photo/2023/02/05/20/01/ai-generated-7770474_960_720.png"
        className="absolute bottom-[164px] h-[440px] cursor-pointer"
        onClick={handleShowMessage}
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
        text-center p-5 absolute bottom-[300px] left-[840px] glassEffect`
            : "hidden"
        }
      >
        Hey! This is Sumit Mishra.
        <br />
        Happy to have you here.
      </motion.div>

      <div className="mr-3 w-[380px] h-1 bg-[#fff] z-20 absolute bottom-[190px]" />

      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] absolute bottom-[150px]">
        Software Engineer
      </h2>

      <h1 className=" md:text-4xl text-2xl text-gray-400 z-10 absolute bottom-[100px]">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div className="pt-5 z-20 absolute md:bottom-10 bottom-1">
        <Link href={"/"}>
          <button className="heroButton">About</button>
        </Link>
        <Link href={"/"}>
          <button className="heroButton">Experience</button>
        </Link>
        <Link href={"/"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"/"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
