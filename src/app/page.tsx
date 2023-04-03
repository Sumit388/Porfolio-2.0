// Packages ipmort
import dynamic from "next/dynamic";


// Dynamic import of components
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import("@/components/About"), {
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
