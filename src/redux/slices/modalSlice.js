import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  modalId: null,
  modalName: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.status = true;
      state.modalId = action.payload.id;
      state.modalName = action.payload.name;
    },
    closeModal: (state) => {
      state.status = false;
      state.modalId = null;
      state.modalName = null;
    },
  },
});

export const selectModalStatus = (state) => state.modal.status;
export const selectModalId = (state) => state.modal.modalId;
export const selectModalName = (state) => state.modal.modalName;

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
