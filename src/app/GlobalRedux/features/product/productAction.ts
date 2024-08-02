import { createAction } from '@reduxjs/toolkit';
import { Product } from './productTypes';

// Action creators
export const fetchProductsStart = createAction('products/fetchProductsStart');
export const fetchProductsSuccess = createAction<Product[]>('products/fetchProductsSuccess');
export const fetchProductsFailure = createAction<string>('products/fetchProductsFailure');
export const addProduct = createAction<Product>('products/addProduct');
export const removeProduct = createAction<number>('products/removeProduct');
export const updateProduct = createAction<Product>('products/updateProduct');
