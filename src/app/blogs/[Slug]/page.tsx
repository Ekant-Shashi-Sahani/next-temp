import BlogDetailsCard from "@/common/Blog/BlogDetailsCard";
import ReletedBlogs from "@/common/Blog/ReletedBlogs";
import React from "react";

function page({ params }: { params: { Slug: string } }) {
  console.log("params",params)
  return (
  <div className="container mx-auto py-5">
      <div className="grid grid-cols-3 gap-5">
     <div className="col-span-2">
     <BlogDetailsCard params={params} />
     </div>
      <ReletedBlogs/>
    </div>
  </div>
  );
}

export default page;
