import { createSlice } from "@reduxjs/toolkit";
import { createUserLogin } from "./actions";

const initialState = {
  user: {},
  loading: false,
  error: null,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(createUserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default loginSlice.reducer;
