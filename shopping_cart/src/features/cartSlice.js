import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const URL_ = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await fetch(URL_);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
});

const cartSlice = createSlice({
  name: "Cart_Slice",
  initialState,

  reducers: {
    clear_cart: (state) => {
      state.cartItems = [];
    },

    recreate_cart: (state) => {
      state.cartItems = cartItems;
    },

    remove_Item: (state, action) => {
      const Itemid = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== Itemid);
    },

    increase_: (state, action) => {
      const Itemid = action.payload;

      const item_ = state.cartItems.find((item) => item.id === Itemid);
      item_.amount = item_.amount + 1;
    },

    decrease_: (state, action) => {
      const Itemid = action.payload;

      const item_ = state.cartItems.find((item) => item.id === Itemid);

      if (item_.amount > 0) {
        item_.amount = item_.amount - 1;
      }

      if (item_.amount === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== Itemid);
      }
    },

    calculate_total: (state, action) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = Math.ceil(total);
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

console.log(cartSlice);

export const {
  clear_cart,
  recreate_cart,
  remove_Item,
  increase_,
  decrease_,
  calculate_total,
} = cartSlice.actions;

export const select_carts = (state) => state.cart.cartItems;
export const amount_ = (state) => state.cart.amount;
export const total_ = (state) => state.cart.total;
export const is_loading = (state) => state.cart.isLoading;

//
export default cartSlice.reducer;
