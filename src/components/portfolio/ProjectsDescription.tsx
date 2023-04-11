//Packages import
import Image from "next/image";

//Assets import
import bgImage from "@/assets/bgImage.png";

function ProjectsDescription() {
  return (
    <div className="overflow-hidden w-full h-[100%] flex flex-col justify-end items-center">
      <div className="p-4  text-gray-500">
        Each project represents
        a unique challenge, and an opportunity to demonstrate my creativity,
        technical skills, and dedication to excellence. I am driven by the
        belief that software has the power to make a positive impact in people's
        lives, and I am honored to be a part of that journey. So come, be
        inspired, and let's change the world together, one line of code at a
        time.
      </div>
      <Image src={bgImage} alt="" className="" />
    </div>
  );
}

export default ProjectsDescription;
