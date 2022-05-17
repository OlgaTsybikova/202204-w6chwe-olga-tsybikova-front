import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../feature/userSlice";

const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_ROBOTS;
  const { data } = await axios.post(url, userData);

  const userInfo = jwtDecode(data.token);

  localStorage.setItem("token", data.token);

  dispatch(logInActionCreator(userInfo));
};
export default loginThunk;
