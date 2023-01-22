import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
  quantity: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state = initialState, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
