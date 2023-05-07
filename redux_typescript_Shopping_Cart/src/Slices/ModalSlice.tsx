import { createSlice } from "@reduxjs/toolkit";

interface PROPS {
  isOpen: boolean;
}

const initialState: PROPS = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: PROPS) => {
      state.isOpen = true;
    },

    closeModal: (state: PROPS) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
