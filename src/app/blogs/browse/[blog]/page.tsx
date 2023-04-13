import React from "react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/blogs/Footer";
import MainBlogContainer from "@/components/blogs/MainBlogContainer";
import RelatedBlogsContainer from "@/components/blogs/RelatedBlogsContainer";
import ActionSection from "@/components/blogs/ActionSection";
import CommentSection from "@/components/blogs/CommentSection";

function page() {
  return (
    <div className="bg-[#242424]">
      <Header />
      <div className="w-screen flex items-start justify-center">
        <MainBlogContainer/>
        <RelatedBlogsContainer/>
      </div>
      <ActionSection/>
      <CommentSection/>
      <Footer />
    </div>
  );
}

export default page;
