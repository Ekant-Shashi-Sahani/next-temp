'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../GlobalRedux/store';
import { fetchPosts } from '../GlobalRedux/features/blog/blogThunks';
import BlogModal from './BlogModal';
const capitalizeTitle=(title:string)=>{
    return title.replace(/\b\w/g,char=>char.toUpperCase())
}
const BlogList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { posts, status, error } = useSelector((state: RootState) => state.blog);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const openModal = (content: string, title: string) => {
        setModalContent(content);
        setModalTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (status === 'loading') return <span className="loader"></span>;
    if (status === 'failed') return <div className="text-center py-4 text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-3">Blog Posts</h1>
            <div className='bg-blue-400 h-[1px]   mb-3  rounded-md'></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
                      <div className=''>
                      <h2 className="text-xl font-semibold mb-2">{capitalizeTitle(post.title)}</h2>
                        <p className="text-gray-700 mb-4 h-[100px]">{post.body.slice(0, 100)}...</p>
                        <button
                            onClick={() => openModal(post.body, post.title)}
                            className="text-white py-1 px-2 rounded-md bg-blue-500  hover:bg-blue-600"
                        >
                            Read more
                        </button>
                      </div>
                    </div>
                ))}
            </div>
            <BlogModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                content={modalContent}
                title={modalTitle}
            />
        </div>
    );
};

export default BlogList;
