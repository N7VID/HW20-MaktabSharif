import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import contactsReducer from "./slices/contactsSlice";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    modal: modalReducer,
  },
});

export default store;
