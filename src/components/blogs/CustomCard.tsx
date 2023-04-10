"use client";
import { styled } from "@mui/material/styles";
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Fab  } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { FaHeart, FaShare } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

export default function CustomCard({Image}:{Image:string}) {
  return (
   <div className="w-[260px] h-[200px]  shadow-2xl rounded-2xl p-2 relative overflow-hidden">
    <img src={Image} alt="" className="absolute top-0  w-[260px] h-[200px] left-0 object-cover"/>
    <div className="absolute top-0  w-[260px] h-[200px] bg-[#00000071] left-0 object-cover"/>
    <button className="absolute left-2 top-2x buttonGradient px-4 py-1 rounded-2xl shadow-lg font-bold text-white">View</button>
    <button className="absolute right-2 top-2x px-4 py-1 font-extrabold text-2xl text-[#ffffff]"> <AiOutlineMore/> </button>
    <div className="absolute bottom-2 left-2 text-white text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi...
    </div>
   </div>
  );
}
