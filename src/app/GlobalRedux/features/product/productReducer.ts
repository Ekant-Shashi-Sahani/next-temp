import { createReducer } from '@reduxjs/toolkit';
import { Product } from './productTypes';
import { 
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  removeProduct,
  updateProduct
} from './productAction';

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProductsStart, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductsSuccess, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    })
    .addCase(fetchProductsFailure, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
    .addCase(addProduct, (state, action) => {
      state.products.push(action.payload);
    })
    .addCase(removeProduct, (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    })
    .addCase(updateProduct, (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    });
});

export default productReducer;
