// 'use client';

import { createAction } from '@reduxjs/toolkit';
import { BlogPost } from './blogSlice';

export const fetchPostsStart = createAction('blog/fetchPostsStart');
export const fetchPostsSuccess = createAction<BlogPost[]>('blog/fetchPostsSuccess');
export const fetchPostsFailure = createAction<string>('blog/fetchPostsFailure');
export const addPost = createAction<BlogPost>('blog/addPost');
export const removePost = createAction<number>('blog/removePost');
