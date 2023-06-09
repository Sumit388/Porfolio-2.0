//Package Imports
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute " />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute " />
      <div className="absolute rounded-full border border-[#F7AB0A] h-[650px] w-[650px] opacity-20 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute " />
      <div />
    </motion.div>
  );
};

export default BackgroundCircles;
