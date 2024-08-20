import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpRequest from "../../services/http-request";
import { CONTACTS_URL } from "../../constant";

const initialState = {
  error: null,
  loading: false,
  users: [],
};

export const getContacts = createAsyncThunk(
  "contacts/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpRequest.get(`${CONTACTS_URL}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.data.response);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
