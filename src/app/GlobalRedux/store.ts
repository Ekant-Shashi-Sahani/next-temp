'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { thunk } from 'redux-thunk';
import blogReducer from './features/blog/blogReducer';


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        blog:blogReducer,
        
    },
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk),

    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

