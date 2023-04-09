"use client";
import CustomSearchInput from "@/components/blogs/CustomSearchInput";
import { FaHeart, FaSearch } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";

function Header() {
  return (
    <div className="sticky w-screen h-20 flex items-center justify-between  gap-10 p-2">
      <div className="flex items-center justify-start gap-12 p-2">
        <p className="text-[#9c27b0]">Blog Post</p>
        <CustomSearchInput
          label="Search"
          popupIcon={<FaSearch className="bg-red text-[#9c27b0] text-sm" />}
        />
      </div>
      <div className="h-20 flex items-center justify-start gap-12 p-2">
        <Button color="secondary">Portfolio</Button>
        <Button color="secondary">Contact Me</Button>
        <Button color="secondary">Log In</Button>
        <Fab aria-label="like" color="error" size="medium" className=" text-black hover:text-white">
          <FaHeart className="text-2xl" />
        </Fab>
        <Avatar
          alt="Remy Sharp"
          src="https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?w=1380"
        />
      </div>
    </div>
  );
}

export default Header;
