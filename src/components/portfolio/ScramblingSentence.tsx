//Packages import
import { useRef, useEffect } from "react";
import anime from "@/utils/anime.min.js";

function ScramblingSentence() {
  const text = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (text.current && text.current.textContent)
      text.current.innerHTML = text.current.textContent.replace(
        /\S/g,
        `<span>$&</span>`
      );
    const animation: any = anime.timeline({
      targets: text.current ? text.current.querySelectorAll("span") : null,
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
    <div
      className="p-10 text-gray-500 w-[600px] absolute bottom-2 right-2 text"
      ref={text}
    >
      "Thank you for visiting my portfolio! If you're looking for a software
      developer who is passionate about delivering innovative solutions and
      exceptional user experiences, you've come to the right place. I am
      dedicated to bringing your vision to life, and delivering high-quality
      results that exceed your expectations. Let's collaborate on your next
      project and make it a success. Please don't hesitate to contact me to
      discuss how we can work together."
    </div>
  );
}

export default ScramblingSentence;
