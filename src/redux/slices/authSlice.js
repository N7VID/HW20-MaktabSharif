import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpRequest from "../../services/http-request";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await httpRequest.post("/signup", userData);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      localStorage.setItem("accessToken", action.payload.accessToken);
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const selectAuthUser = (state) => state.auth.user;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
