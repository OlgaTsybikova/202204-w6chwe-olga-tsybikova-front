import axios from "axios";
import { loadRobotsActionCreator } from "../feature/robotSlice";
const loadRobotsActionThunk = () => async (dispatch) => {
  try {
    const { data: robots } = await axios.get(process.env.REACT_APP_ROBOTS);
    dispatch(loadRobotsActionCreator(robots.robots));
  } catch (error) {
    return error;
  }
};
export default loadRobotsActionThunk;
