import BlogList from "@/common/Blog/BlogList";
import BreadCrumb from "@/common/BreadCrumb/BreadCrumb";
import React from "react";

function BlogPage() {
  return (
    <div className="">
      <BreadCrumb
        pageTitle="Blogs"
        links={[
          {
            url: "/",
            title: "Home",
          },
          {
            url: "/blogs",
            title: "Blogs",
          },
        ]}
        backgroundColor="bg-green-500"
        textColor="text-gray-200"
        iconColor="text-yellow-400"
      />

      <BlogList />
    </div>
  );
}

export default BlogPage;
