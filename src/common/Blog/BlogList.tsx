import React from "react";
import BlogCard from "./BlogCard";
import { IBlog } from "../interface";

const getBlogList = async () => {
  const res = await fetch(
    "https://api.prestoenviro.com/api/presto/v1/blogs?Active=1"
  );
  if (!res.ok) return [];
  return res.json();
};

const BlogList: React.FC = async () => {
  const Blog: Array<IBlog> = await getBlogList();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-3">
      {Blog.map((blog, index) => (
        <BlogCard key={blog.Slug} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
