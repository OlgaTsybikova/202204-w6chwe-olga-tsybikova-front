import { configureStore } from "@reduxjs/toolkit";
import robotReducer from "../feature/robotSlice";
import userReducer from "../feature/userSlice";

const store = configureStore({
  reducer: { robots: robotReducer, users: userReducer },
});

export default store;
