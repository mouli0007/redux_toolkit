import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },

  reducers: {
    //
    changeSearchTerm: (state, action) => {
      //
      state.searchTerm = action.payload;
    },
    //
    addCar: (state, action) => {
      //   Action.payload === {name : "",cost:"",id:nanoid}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    //
    removeCar: (state, action) => {
      //   Id of the car we wanna remove !

      const updated = state.data.filter((c) => c.id !== action.payload);
      state.data = updated;
    },
  },
});

export const { removeCar, addCar, changeSearchTerm } = cartSlice.actions;
export default cartSlice.reducer;
