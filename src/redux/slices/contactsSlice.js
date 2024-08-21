import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpRequest from "../../services/http-request";
import { CONTACTS_URL } from "../../constant";

const initialState = {
  error: null,
  loading: false,
  users: [],
  user: null,
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

export const getSingleContact = createAsyncThunk(
  "contacts/getSingle",
  async (id, { rejectWithValue }) => {
    try {
      const response = await httpRequest.get(`${CONTACTS_URL}/${id}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.data.message);
    }
  }
);

export const postContact = createAsyncThunk(
  "contacts/post",
  async (data, { rejectWithValue }) => {
    try {
      const response = await httpRequest.post(`${CONTACTS_URL}`, data);
      return response.data;
    } catch (error) {
      rejectWithValue(error.data.message);
    }
  }
);

export const putContact = createAsyncThunk(
  "contacts/put",
  async (data, { rejectWithValue }) => {
    try {
      const response = await httpRequest.put(
        `${CONTACTS_URL}/${data.id}`,
        data.value
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.data.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/delete",
  async (id, { rejectWithValue }) => {
    try {
      await httpRequest.delete(`${CONTACTS_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getSingleContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleContact.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getSingleContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder.addCase(postContact.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });

    builder.addCase(putContact.fulfilled, (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      state.user = action.payload;
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const filteredData = state.users.filter(
        (user) => user.id !== action.payload
      );
      state.users = filteredData;
    });
  },
});

export const selectUser = (state) => state.contacts.user;
export default contactsSlice.reducer;
