'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { thunk } from 'redux-thunk';
import blogReducer from './features/blog/blogReducer';
import productReducer from './features/product/productSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';



 const store = configureStore({
    reducer: {
        counter: counterSlice,
        blog: blogReducer,
           products: productReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;

export default store;
