"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import tree from "@/assets/tree.png";

const Object3d = dynamic(() => import("@/components/Objects3d/Object3d"), {
    loading: () => <p>Loading...</p>,
  });

export const Skill = () => {
  return (
    <div className="flex h-screen flex-col space-y-8 items-center justify-center overflow-hidden gradient relative ">
      <div className="absolute left-[300px] top-[300px] w-screen h-screen cursor-pointer">
        <Object3d
          object="./house.glb"
          position={[0, 0, 10]}
          fov={46}
          horMinRotate={1}
          horMaxRotate={1}
          verMinRotate={-1.2}
          verMaxRotate={0.8}
          hemLightIntensity={0.1}
        />
      </div>
      <motion.div
        initial={{
          y: -10,
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-[10px] top-[150px] w-[60vw] h-[60vh] z-10 cursor-pointer "
      >
        <Object3d
          object="./boo.glb"
          position={[40, 10, -30]}
          fov={10}
          horMinRotate={1.6}
          horMaxRotate={1.6}
          verMinRotate={-3.14}
          verMaxRotate={3.14}
          hemLightIntensity={5}
        />
      </motion.div>
      <Image
        src={tree}
        className="absolute bottom-[-80px] left-[-200px] w-[600px] h-[740px] opacity-50"
        alt="tree"
      />
      <h3
        className="absolute top-40 left-[960px] uppercase 
      tracking-[20px] text-gray-500 text-2xl"
      >
        Skills
      </h3>
    </div>
  );
};
