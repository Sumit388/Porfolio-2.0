import React from "react";
import Image from "next/image";
import banner from "../assets/banner.jpeg";

function ProjectSliderCard() {
  return (
    <>
      <div className="h-[49%] overflow-hidden relative flex justify-end items-start flex-col">
      <div className="h-8 text-gray-500 ml-2">{"Scroll right for more projects >"}</div>
        <div className="overflow-hidden h-[60%] flex justify-center items-center rounded-xl ">
          <Image src={banner} alt="" />
          <div className="bg-gradient-to-t from-[#000000] to-transparent h-[60%] w-full z-20 absolute bottom-0 left-0" />
          <div className="h-[60%] w-full z-20 absolute bottom-2 left-2 flex justify-start items-end gap-4">
            <button className="border border-[#f7ac0a44] px-8 py-2 rounded-2xl bg-[#24242443] uppercase tracking-[2px] text-gray-500">
              Code Link
            </button>
            <button className="border border-[#f7ac0a44] px-8 py-2 rounded-2xl bg-[#24242443] uppercase tracking-[2px] text-gray-500">
              Deployed link
            </button>
            <button className="border border-[#f7ac0a44] px-8 py-2 rounded-2xl bg-[#24242443] uppercase tracking-[2px] text-gray-500">
              Documentation
            </button>
          </div>
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
