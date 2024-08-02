// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../GlobalRedux/store";
// import { fetchPosts } from "../GlobalRedux/features/blog/blogThunks";
// import BlogModal from "./BlogModal";

// const capitalizeTitle = (title: string) => {
//   return title.replace(/\b\w/g, (char) => char.toUpperCase());
// };

// const BlogList: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { posts, status, error } = useSelector(
//     (state: RootState) => state.blog
//   );
//   console.log(posts)
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");
//   const [modalTitle, setModalTitle] = useState("");

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const openModal = (content: string, title: string) => {
//     setModalContent(content);
//     setModalTitle(capitalizeTitle(title));
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   if (status === "loading") return <span className="loader"></span>;
//   if (status === "failed")
//     return <div className="text-center py-4 text-red-500">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-3">Blog Posts</h1>
//       <div className="bg-blue-400 h-[1px] mb-3 rounded-md"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full"
//           >
//             <div>
//               <h2 className="text-xl font-semibold mb-2">
//                 {capitalizeTitle(post.title)}
//               </h2>
//               <p className="text-gray-700 mb-4 h-[100px] overflow-hidden">
//                 {post.body.slice(0, 100)}
//               </p>
//             </div>
//             <div className="flex justify-center items-center">
//               <button
//                 onClick={() => openModal(post.body, post.title)}
//                 className="text-white py-2 font-medium px-2 rounded-md bg-gradient-to-r
//                                  from-green-600 to-green-400 hover:from-green-500 hover:to-green-300"
//               >
//                 Read more
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <BlogModal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         content={modalContent}
//         title={modalTitle}
//       />
//     </div>
//   );
// };

// export default BlogList;
import { GetServerSideProps } from 'next';
import { Share } from 'next/font/google';
import { AiFillEye, AiFillSafetyCertificate } from 'react-icons/ai';
import { BiDislike, BiLike, BiShare } from 'react-icons/bi';

interface Reactions {
  likes: number;
  dislikes: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

async function getData() {
  const res = await fetch('https://dummyjson.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const BlogList = async () => {
  const data = await getData();
  const blogs: Post[] = data.posts || [];

  return (
    <main className="bg-gray-100 min-h-screen">
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">BLOG POSTS</h1>
      <p className="h-[1px] rounded-md bg-gray-300 w-[200px] mb-7"></p>
    </div>
    <ul className="grid md:grid-cols-3 md:gap-5 grid-cols-1 gap-3 mx-4 my-4">
      {blogs.map((blog: Post) => (
        <li key={blog.id} className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-500 mb-2 underline">{blog.title}</h2>
          <p className="text-gray-700 mb-2 h-[200px]">{blog.body}</p>
          <div className="flex items-center space-x-10 mt-2 text-gray-700">
            <div className="flex items-center">
              <AiFillEye className="mr-1" size={24} />
              <span>{blog.views}</span>
            </div>
            <div className="flex items-center">
              <BiLike className="mr-1" size={24} />
              <span>{blog.reactions.likes}</span>
            </div>
            <div className="flex items-center">
              <BiDislike className="mr-1" size={24} />
              <span>{blog.reactions.dislikes}</span>
            </div>
            <div className="flex items-center">
              <BiShare className="mr-1" size={24} />
              <span>{blog.reactions.dislikes +3}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </main>
  );
};

export default BlogList;

