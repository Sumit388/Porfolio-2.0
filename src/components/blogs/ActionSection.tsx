"use client";
import React from "react";
import Fab from "@mui/material/Fab";
import { FaHeart, FaShare, FaMailBulk } from "react-icons/fa";

function ActionSection() {
  return (
    <div className="w-full p-6">
      <Fab
        variant="extended"
        size="small"
        color="secondary"
        aria-label="add"
        className="m-4 p-4"
      > <FaHeart color="red" className="mr-4"/>  
        like
      </Fab>
      <Fab
        variant="extended"
        size="small"
        color="secondary"
        aria-label="add"
        className="m-4 p-4"
      >
        <FaShare color="blue" className="mr-4"/>
        Share
      </Fab>
      <Fab
        variant="extended"
        size="small"
        color="secondary"
        aria-label="add"
        className="m-4 p-4"
      ><FaMailBulk color="green" className="mr-4"/>
        Contact me
      </Fab>
    </div>
  );
}

export default ActionSection;
