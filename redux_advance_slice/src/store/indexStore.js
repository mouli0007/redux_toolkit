import { configureStore } from "@reduxjs/toolkit";

import { addCar, remove, changeSearchTerm } from "./slices/carsSlice";
import { changeCost, changeName } from "./slices/formslice";

import carsReducer from "./slices/carsSlice";
import formReducer from "./slices/formslice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});


