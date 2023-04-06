"use client";

//Packages import
import dynamic from "next/dynamic";

//Dynamic import of components
 const ContactMeForm = dynamic(() => import("@/components/ContactMeForm"), {
    loading: () => <p>Loading...</p>,
  });
  const ScramblingSentence = dynamic(() => import("@/components/ScramblingSentence"), {
    loading: () => <p>Loading...</p>,
  });

function Contact() {
  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col justify-start items-start">
      <h3
        className="absolute top-24 left-[40vw] uppercase 
         tracking-[20px] text-gray-500 text-2xl"
      >
        Contact me
      </h3>
      <div className="w-[650px] mt-40 ml-10 text-[#f7ab0a]">
        Header has all the social media links that I utilize, through which you
        can get in touch with me. However, I would appreciate it if you could
        reach out to me via email or LinkedIn. You can also fill out the form
        below and I will get back to you as soon as possible.
      </div>
      <div>
        <ContactMeForm />
      </div>

      <ScramblingSentence/>
    </div>
  );
}

export default Contact;
