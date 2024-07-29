// 'use client';

import { createReducer } from '@reduxjs/toolkit';
import { BlogPost } from './blogSlice';
import {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure,
    addPost,
    removePost
} from './blogActions';

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

const blogReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchPostsStart, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPostsSuccess, (state, action) => {
            state.status = 'idle';
            state.posts = action.payload;
        })
        .addCase(fetchPostsFailure, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(addPost, (state, action) => {
            state.posts.push(action.payload);
        })
        .addCase(removePost, (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        });
});

export default blogReducer;
