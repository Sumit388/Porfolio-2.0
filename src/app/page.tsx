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
const Skill = dynamic(() => import("@/components/Skill"), {
  loading: () => <p>Loading...</p>,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 ">
      <Header />
      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
      <section id="skill" className="snap-center">
        <Skill/>
      </section>
      <section id="skill" className="snap-center">
        <Projects/>
      </section>
      {/* Contact me */}
    </div>
  );
}
