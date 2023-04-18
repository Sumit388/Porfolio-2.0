// Packages ipmort
import dynamic from "next/dynamic";

// Dynamic import of components
const Header = dynamic(() => import("@/components/portfolio/Header"), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import("@/components/portfolio/Hero"), {
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import("@/components/portfolio/About"), {
  loading: () => <p>Loading...</p>,
});
const Skill = dynamic(() => import("@/components/portfolio/Skill"), {
  loading: () => <p>Loading...</p>,
});
const Projects = dynamic(() => import("@/components/portfolio/Projects"), {
  loading: () => <p>Loading...</p>,
});
const Contact = dynamic(() => import("@/components/portfolio/Contact"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 w-screen overflow-hidden">
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
      <section id="projects" className="snap-center">
        <Projects/>
      </section>
      <section id="contact" className="snap-center">
        <Contact/>
      </section>
      
    </div>
  );
}
