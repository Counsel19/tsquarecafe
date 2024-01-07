import { createSlice } from "@reduxjs/toolkit";

interface ModalSliceState {
  isOpen: boolean;
  modalTitle?: string;
}

const initialState: ModalSliceState = {
  isOpen: false,
  modalTitle: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setModalTitle: (state, action) => {
      state.modalTitle = action.payload;
    },
  },
});

export const { openModal, closeModal, setModalTitle } = modalSlice.actions;

export default modalSlice.reducer;
