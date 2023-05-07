import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
interface State {
  cartItems: any[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: State = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

const URL = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      console.log(thunkAPI.getState());
      const response = await fetch(URL);
      const data = response.json();
      return data;
    } catch (err: any) {
      console.log(err);
      return thunkAPI.rejectWithValue("There  was an error");
    }
  }
);

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state: State) => {
      state.cartItems = [];
    },

    removeItem: (state: State, action: PayloadAction<number | string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increaseItem: (state: State, action: PayloadAction<string>) => {
      const cartItem_ = state.cartItems.find(
        (item) => item.id === action.payload
      );

      cartItem_.amount = cartItem_.amount + 1;
    },

    decreaseItem: (state: State, action: PayloadAction<string>) => {
      const cartItem_ = state.cartItems.find(
        (item) => item.id === action.payload
      );

      cartItem_.amount = cartItem_.amount - 1;
    },

    calculateTotals: (state: State) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        amount += cartItem.amount;
        total += cartItem.amount * cartItem.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },

  extraReducers(builder) {
    builder.addCase(getCartItems.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCartItems.fulfilled,
      (state: State, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      }
    );
    builder.addCase(getCartItems.rejected, (state: State) => {
      state.isLoading = false;
      state.cartItems = [];
    });
  },
});

export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartslice.actions;
export default cartslice.reducer;
