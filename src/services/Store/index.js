import { configureStore } from "@reduxjs/toolkit";
import networkLocationReducer from "./NetworkLocations/slice";
import loginReducer from "./Login/slice";
import userReducer from "./User/slice";

const store = configureStore({
  reducer: {
    networkLocations: networkLocationReducer,
    login: loginReducer,
    user: userReducer,
  },
});
export default store;
