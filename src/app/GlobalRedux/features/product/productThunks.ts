import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './productTypes';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products');
      console.log('Fetched products:', response.data.products); // Log the products array
      return response.data.products;
    } catch (error) {
      console.error('Fetch products error:', error);
      throw error;
    }
  }
);

export const addProduct = createAsyncThunk<Product, Product>(
  'products/addProduct',
  async (product) => {
    const response = await axios.post<Product>('https://dummyjson.com/products', product);
    return response.data;
  }
);

export const removeProduct = createAsyncThunk<number, number>(
  'products/removeProduct',
  async (id) => {
    await axios.delete(`https://dummyjson.com/products/${id}`);
    return id;
  }
);
