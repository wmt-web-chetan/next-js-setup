import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./actions";

const initialState = {
  user: {},
  loading: false,
  error: null,
};
const readMeUserSlice = createSlice({
  name: "ReadMeUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default readMeUserSlice.reducer;
