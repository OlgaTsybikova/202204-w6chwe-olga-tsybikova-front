import axios from "axios";
import {
  delelteRobotActionCreator,
  loadRobotsActionCreator,
} from "../feature/robotSlice";

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

export const deleteRobotsThunk = (id) => async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ROBOTS_TOKEN}`,
        },
      }
    );

    if (status === 200) {
      dispatch(delelteRobotActionCreator(id));
    }
  } catch (error) {
    return error.message;
  }
};
