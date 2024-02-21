
import { getReadMeUser } from "@/services/Api/userDetails";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Thunk action for getting network locations
export const fetchUser = createAsyncThunk(
  "user/readeMe",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getReadMeUser();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
