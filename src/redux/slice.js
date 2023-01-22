import { createSlice } from '@reduxjs/toolkit';
import testData from '../utils/data';
import { toast } from 'react-toastify';

const initialState = {
  testData,
  cart: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementQuantity: (state, { payload }) => {
      if (state.testData[payload].quantity > 4) {
        toast.warning('Can only purchase 5 items at a time');
      } else {
        state.testData[payload].quantity = state.testData[payload].quantity + 1;
      }
    },
    decrementQuantity: (state, { payload }) => {
      if (state.testData[payload].quantity < 1) {
        toast.warning('Cannot purchase items less than 0');
      } else {
        state.testData[payload].quantity = state.testData[payload].quantity - 1;
      }
    },
    addToCart: (state, { payload }) => {
      if (payload.quantity === 0) {
        toast.warning('cannot add empty item to cart');
      } else{
        state.cart = [...state.cart, payload]
      }
    },
    removeCart: (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const { incrementQuantity, decrementQuantity, addToCart, removeCart } =
  counterSlice.actions;

export default counterSlice.reducer;
