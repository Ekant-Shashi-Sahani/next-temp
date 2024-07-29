// 'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BlogPost {
    id: number;
    title: string;
    body: string;
}

export interface BlogState {
    posts: BlogPost[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
}

const initialState: BlogState = {
    posts: [],
    status: 'idle',
    error: null
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        fetchPostsStart: (state) => {
            state.status = 'loading';
        },
        fetchPostsSuccess: (state, action: PayloadAction<BlogPost[]>) => {
            state.status = 'idle';
            state.posts = action.payload;
        },
        fetchPostsFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        addPost: (state, action: PayloadAction<BlogPost>) => {
            state.posts.push(action.payload);
        },
        removePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        }
    }
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure, addPost, removePost } = blogSlice.actions;

export default blogSlice.reducer;
