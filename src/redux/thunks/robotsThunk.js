import axios from "axios";
import { loadRobotsActionCreator } from "../feature/robotSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      process.env.REACT_APP_ROBOTS,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ROBOTS_TOKEN}`,
        },
      }
    );
    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch {}
};
