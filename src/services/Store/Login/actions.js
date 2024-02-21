
import { createSignIn } from "@/services/Api/login";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Thunk action for login
export const createUserLogin = createAsyncThunk(
  "login/create",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createSignIn(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

