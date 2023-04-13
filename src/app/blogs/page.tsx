import React from "react";
import Header from "@/components/portfolio/Header";
import ButtonBases from "@/components/blogs/Bannerbuttons";
import CustomBanner from "@/components/blogs/CustomBanner";
import Hero from "@/components/blogs/Hero";
import BlogContainer from "@/components/blogs/BlogContainer";
import Footer from "@/components/blogs/Footer";
import FeaturedSection from "@/components/blogs/FeaturedSection";

function page() {
  return (
    <div className="w-screen overflow-hidden bg-[#242424]">
      <section>
        <Header />
      </section>
      <section className="elevatedEffect">
        <ButtonBases />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <CustomBanner title="Latest" color="#F9A826" />
      </section>
      <section>
        <BlogContainer title={"Recent"} />
      </section>
      <section>
        <FeaturedSection/>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default page;
