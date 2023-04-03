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
      <div className="h-[76vh] w-[70vw] absolute right-4 bottom-4 grid grid-rows-6 grid-row-6 gap-4">
        <div className="col-span-6 row-span-1  p-4">
          <div className="uppercase tracking-[20px] text-gray-500">
            Me in a sentance
          </div>
          <p>
            I am a software engineer with around one year of working experience
            in react js. Flex-box is my swiss knife and Next.js is my workhorse.
            Oh! and building stuffs that actually solves problems is so fun.
          </p>
        </div>
        <div className="col-span-2 row-span-4 text-[#838383] p-4">
          <span className="uppercase tracking-[5px] text-[#F7AB0A] mb-1">
            Education
          </span>
          <ul>
            <li className="mb-1">
              Though I am an electrical engineer, I have always been fascinated
              by the world of computers and software.
            </li>
            <li className="mb-1">
              I have always been at the top of my class during my graduation.
            </li>
            <li className="mb-1">
              I graduated from the MAKAUT (WBUT) with a CGPA of 8.58/10 in 2020.
            </li>
            <li className="mb-1">
              Never had any backlogs in my entire academic career.
            </li>
            <li className="mb-1">
              I have completed my secondary education from the ICSE board in
              2014 and higher secondary education from the ISC board in 2016.
            </li>
          </ul>
        </div>
        <div className="col-span-2 row-span-2  p-4 flex justify-center items-center">
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." 
        <br/>
        - Martin Fowler
        </div>
        <div className="col-span-2 row-span-2 primaryGradient p-4">
          <div className="uppercase tracking-[5px] text-[#F7AB0A] mb-1">
            Hobbies:
          </div>
          I love singing, playing guitar, composing music, writing songs,
          writing poems. Oh yes! and also love watching animes.
        </div>
        <div className="col-span-4 row-span-2  p-4 border border-[#f7ac0a44]">
          <div className="uppercase tracking-[20px] text-gray-500 mb-2">
            Relevent experience
          </div>
          <ul>
            <li className="mb-1">I began my work with React JS a year ago.</li>
            <li className="mb-1">
              Working as a front-end engineer at ASL (Uniacco) since last 6
              months.
            </li>
            <li className="mb-1">
              I have been working freelancer since last 2 months.
            </li>
          </ul>
        </div>
        <div className="col-span-3 row-span-1 secondaryGradient p-4 text-[#ffffff]">
        If I were a Pixar character, the image on the left is precisely what I would resemble.
        </div>
        <div className="col-span-3 row-span-1  p-4 text-[#8a6d2d]">
          I made this section so that people would never have to look at my CV again. Therefor I mentioned all the important stuffs here.
        </div>
      </div>
    </div>
  );
};

export default About;
