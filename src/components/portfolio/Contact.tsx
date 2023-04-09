"use client";

//Packages import
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

//Dynamic import of components
 const ContactMeForm = dynamic(() => import("@/components/portfolio/ContactMeForm"), {
    loading: () => <p>Loading...</p>,
  });
  const ScramblingSentence = dynamic(() => import("@/components/portfolio/ScramblingSentence"), {
    loading: () => <p>Loading...</p>,
  });

function Contact() {

  const [isMobile,setIsMobile] = useState(false)
  
  useEffect(()=>{
    if(window.innerWidth<786){
      setIsMobile(true)
    }
  },[])

  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col justify-start items-start">
      <h3
        className="absolute md:top-24 md:left-[40vw] top-20 left-6 uppercase 
         tracking-[20px] text-gray-500 text-2xl"
      >
        Contact me
      </h3>
      <div className="md:w-[650px] w-[100vw] p-8 mt-40 md:ml-10 md:p-0 text-[#f7ab0a]">
        Header has all the social media links that I utilize, through which you
        can get in touch with me. However, I would appreciate it if you could
        reach out to me via email or LinkedIn. You can also fill out the form
        below and I will get back to you as soon as possible.
      </div>
      <div>
        <ContactMeForm />
      </div>

      {(!isMobile)&&<ScramblingSentence/>}
    </div>
  );
}

export default Contact;
