import { createSlice } from "@reduxjs/toolkit";
import {
  createNewNetworkLocation,
  deleteNetworkLocationById,
  fetchNetworkLocationById,
  fetchNetworkLocations,
  updateNetworkLocationById,
} from "./actions";

const initialState = {
  list: [],
  selectedLocation: null,
  loading: false,
  error: null,
};
const networkLocationsSlice = createSlice({
  name: "networkLocations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNetworkLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNetworkLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchNetworkLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchNetworkLocationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNetworkLocationById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedLocation = action.payload;
      })
      .addCase(fetchNetworkLocationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createNewNetworkLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewNetworkLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createNewNetworkLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateNetworkLocationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNetworkLocationById.fulfilled, (state, action) => {
        state.loading = false;
        // Update the network location in the list
        state.list = state.list.map((location) =>
          location.id === action.payload.id ? action.payload : location
        );
      })
      .addCase(updateNetworkLocationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteNetworkLocationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNetworkLocationById.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the network location from the list
        state.list = state.list.filter(
          (location) => location.id !== action.payload.id
        );
      })
      .addCase(deleteNetworkLocationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default networkLocationsSlice.reducer;