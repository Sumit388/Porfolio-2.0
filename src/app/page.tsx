import About from "@/components/About";
import dynamic from "next/dynamic";


const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 ">
      <Header />
      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>
      <section id="hero" className="snap-center">
        <About/>
      </section>
      {/* Experience */}
      {/* Skill */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
}
