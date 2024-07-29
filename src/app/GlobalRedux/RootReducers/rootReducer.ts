// 'use client';

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterSlice from '../features/counter/counterSlice';
import blogReducer from '../features/blog/blogReducer';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        blog:blogReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
