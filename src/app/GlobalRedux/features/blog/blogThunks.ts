// 'use client';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogPost } from './blogSlice';
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from './blogActions';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk(
    'blog/fetchPosts',
    async (_, { dispatch }) => {
        try {
            dispatch(fetchPostsStart());
            const response = await axios.get<BlogPost[]>(API_URL);
            dispatch(fetchPostsSuccess(response.data));
        } catch (error: any) {
            dispatch(fetchPostsFailure(error.message || 'Failed to fetch posts'));
        }
    }
);
