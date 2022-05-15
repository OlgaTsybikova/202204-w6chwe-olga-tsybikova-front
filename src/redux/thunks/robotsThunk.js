import axios from "axios";
import { loadRobotsActionCreator } from "../feature/robotSlice";
const loadRobotsActionThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      process.env.REACT_APP_ROBOTS
    );
    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch {}
};
export default loadRobotsActionThunk;
