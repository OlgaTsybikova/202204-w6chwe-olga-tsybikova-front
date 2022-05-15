import { createSlice } from "@reduxjs/toolkit";

const robotSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
  },
});
export const { loadRobots: loadRobotsActionCreator } = robotSlice.actions;

export default robotSlice.reducer;
