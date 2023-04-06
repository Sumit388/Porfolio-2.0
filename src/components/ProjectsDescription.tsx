import React, { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";
import bgImage from "../assets/bgImage.png";

function ProjectsDescription() {
  return (
    <div className="overflow-hidden w-full h-[100%] flex flex-col justify-end items-center">
      <div className="p-4  text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod cumque expedita veniam praesentium perspiciatis aut non veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nam.
      </div>
      <Image src={bgImage} alt="" className=""/>
      

    </div>
  );
}

export default ProjectsDescription;
