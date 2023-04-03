"use client";
//Packages import
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 p-5 flex items-start justify-start max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
         <SocialIcon
          network="facebook"
          fgColor="grey"
          bgColor="transparent"
        />
         <SocialIcon
          network="github"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
         <SocialIcon
          network="twitter"
          fgColor="grey"
          bgColor="transparent"
        />
         <SocialIcon
          network="youtube"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* Contact me section */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#F7AB0A]">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
