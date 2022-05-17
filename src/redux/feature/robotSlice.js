import { createSlice } from "@reduxjs/toolkit";

const robotSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
    deleteRobot: (robots, action) =>
      robots.filter((robot) => robot._id !== action.payload),
  },
});
export const {
  loadRobots: loadRobotsActionCreator,
  delelteRobot: delelteRobotActionCreator,
} = robotSlice.actions;

export default robotSlice.reducer;
