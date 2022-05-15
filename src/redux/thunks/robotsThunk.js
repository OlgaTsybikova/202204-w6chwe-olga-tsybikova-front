import { loadRobotsActionCreator } from "../feature/robotSlice";
const loadRobotsActionThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_ROBOTS, {
    method: "GET",
    mode: "cors",
  });
  const robots = await response.json();
  dispatch(loadRobotsActionCreator(robots.robots));
};
export default loadRobotsActionThunk;
