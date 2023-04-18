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
          target="_blank"
          url="https://www.linkedin.com/in/sumitmishra388/"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.facebook.com/profile.php?id=100004060201078"
          network="facebook"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://github.com/Sumit388"
          network="github"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          network="twitter"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://youtube.com/@sanjh3799"
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
          url="mailto: sumitmishra388@gmail.com"
          target="_blank"
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
