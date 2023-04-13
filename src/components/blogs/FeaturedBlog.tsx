import React from "react";
import CustomList from "./CustomList";
import { AiOutlineMore } from "react-icons/ai";

function FeaturedBlog() {
  return (
    <div className="md:w-[96vw] w-screen min-h-[400px] flex flex-col md:flex-row elevatedEffect rounded-3xl overflow-hidden relative">
      <div className="md:w-[70%] md:h-auto h-[400px] w-full relative">
        <img
          src="https://img.freepik.com/free-vector/nature-scene-rural-land-agriculture-grassland-abtract-silhouette-asian-farmers-working-rice-field-illustration_1150-37317.jpg?w=2000&t=st=1681378972~exp=1681379572~hmac=29aed31ff4246b514b402ed17f989a4ce0bb550f7865fd80b4ee347a0f7b8e06"
          alt=""
          className="absolute top-0  md:w-[100%] w-[86vw] h-[100%] left-0 object-cover"
        />
        <div className="absolute top-0  md:w-[100%] w-[86vw] h-[100%] bg-[#00000071] left-0 object-cover" />
        <button className="absolute left-10 top-10 buttonGradient px-10 py-2 rounded-2xl shadow-lg font-bold text-white">
          View
        </button>
        <button className="absolute right-10 top-10 px-4 py-1 font-extrabold text-2xl text-[#ffffff]">
          {" "}
          <AiOutlineMore />{" "}
        </button>
        <div className="absolute bottom-0 left-0 text-white text-sm md:p-10 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Debitis amet neque
          culpa et quae laudantium totam dolorum inventore perferendis modi.
          Numquam aliquam sunt neque dolorem quasi quisquam beatae cumque
          tempore culpa at!
        </div>
      </div>
      <div className="md:w-[30%] w-full text-white bg-[#6e6e6e]">
        <CustomList />
      </div>
    </div>
  );
}

export default FeaturedBlog;
