import BlogDetailsCard from "@/common/Blog/BlogDetailsCard";
import ReletedBlogs from "@/common/Blog/ReletedBlogs";
import { link } from "fs";
import Head from "next/head";
import { title } from "process";
import React from "react";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export const metadata = {
  title: "blog Details",
};

function page({ params }: { params: { Slug: string } }) {
  console.log("params", params);
  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <BlogDetailsCard params={params} />
        </div>
        <ReletedBlogs />
      </div>
    </div>
  );
}

export default page;
