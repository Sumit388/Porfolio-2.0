"use client";
import React, {useRef, useEffect} from 'react'
import anime from "../utils/anime.min.js";

function Contact() {
    const text = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    if (text.current && text.current.textContent)
      text.current.innerHTML = text.current.textContent.replace(
        /\S/g,
        `<span>$&</span>`
      );
    const animation:any= anime.timeline({
      targets: text.current? text.current.querySelectorAll("span"):null,
      easing: "easeInOutExpo",
      loop: true,
    });
    animation
      .add({
        rotate: function () {
          return anime.random(-360, 360);
        },
        translateX: function () {
          return anime.random(-400, 0);
        },
        translateY: function () {
          return anime.random(-400, 0);
        },
        duratuion: 10000,
        delay: anime.stagger(20),
      })
      .add({
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duratuion: 10000,
        delay: anime.stagger(20),
      });
  }, []);
  return (
    <div className="h-screen w-screen overflow-hidden relative">
        <h3
        className="absolute top-24 left-[40vw] uppercase 
         tracking-[20px] text-gray-500 text-2xl"
      >
        Contact me
      </h3>
      
        <div className="p-10 text-gray-500 w-[600px] absolute bottom-2 right-2 text" ref={text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nisi
        minima laudantium dolores, veritatis vitae. Obcaecati perspiciatis et,
        impedit quibusdam amet illo quidem, rerum, doloribus hic quae unde?
        Quisquam corrupti quas temporibus voluptatibus animi, quo eligendi?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nisi
        minima laudantium dolores, veritatis vitae. Obcaecati perspiciatis et,
        impedit quibusdam amet illo quidem, rerum, doloribus hic quae unde?
        Quisquam corrupti quas temporibus voluptatibus animi, quo eligendi?
      </div>
    </div>
  )
}

export default Contact