import React from "react";

function Hero() {
  return (
    <div className="h-[64vh] w-screen mt-0 flex justify-center items-center ">
      <div className="h-[50vh] w-[98vw] shadow-lg rounded-2xl relative overflow-hidden glassEffect">
        <img
          src={
            "https://r4.wallpaperflare.com/wallpaper/620/81/253/pattern-design-dark-texture-wallpaper-2816ed7890700c88302c91cea802b4ba.jpg"
          }
          alt=""
          className="absolute top-0  w-[98vw] h-[50vh] left-0 object-cover"
        />
        <div className="absolute top-0  w-[98vw] h-[50vh] left-0 overlayGradient " />
        <button className="absolute md:bottom-10 md:left-10 bottom-4 left-4 primaryGradient px-4 py-1 rounded-2xl shadow-lg font-bold text-3xl text-white">
          View
        </button>
        <div className="absolute md:top-10 md:left-10 p-2 md:w-[500px] w-full  z-20 text-white">
          Welcome to DevTunes! I am passionate about Tech & softwares, and I am
          excited to share our knowledge and expertise with you. Our blog is
          your go-to destination for Tech & softwares, where you'll find
          practical tips, insightful analysis, and inspiring stories to help you
          grow and learn. So sit back, grab a cup of coffee, and explore our
          blog. We can't wait to see what you'll discover!
          <div className="text-4xl uppercase md:tracking-[36px] tracking-[10px] mt-10 text-[#f7ab0a] font-extrabold">
            DevTunes
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
