import { configureStore } from "@reduxjs/toolkit";
import robotReducer from "../feature/robotSlice";

const store = configureStore({ reducer: { robots: robotReducer } });

export default store;
