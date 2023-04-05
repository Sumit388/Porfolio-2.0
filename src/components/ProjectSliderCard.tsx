import React from "react";
import Image from "next/image";
import banner from "../assets/banner.jpeg";

function ProjectSliderCard() {
  return (
    <>
      <div className="h-[49%] overflow-hidden relative flex justify-center items-end" >
        <div className="overflow-hidden h-[60%] flex justify-center items-center rounded-xl">
        <Image
        src={banner}
        alt=""
      />
        </div>
      
      </div>
      <div className="h-[2%]">
        <div className="mr-3 w-[46vw] h-1 primaryGradient z-20 " />
      </div>
      <div className="h-[49%] flex justify-start items-start flex-col">
        <div className="h-[50%] flex justify-start items-center">
          <div className="h-[100px] min-w-[268px] elevatedEffect slide flex justify-center items-center gap-6 uppercase tracking-[5px] text-gray-500">
            <p>Project name</p>
          </div>
          <div className="ml-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
            aperiam, corrupti sapiente quo autem deleniti voluptatibus soluta
            expedita totam, doloremque impedit neque temporibus laboriosam hic
            vel eligendi porro? Nostrum, itaque nobis.
          </div>
        </div>
        <div className="h-[46%] glassEffect w-[96%] ml-3 bg-[#ff1e1e0f] flex justify-start items-center p-10 uppercase tracking-[5px] text-gray-500">
          <div className="border-r-2 h-[100%] text-center p-10">
            <p>Tech used:</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSliderCard;
