import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotList from "./components/RobotList/RobotList";
import { logInActionCreator } from "./redux/feature/userSlice";
import { loadRobotsThunk } from "./redux/thunks/robotsThunk";

const App = () => {
  const dispatch = useDispatch();
  useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadRobotsThunk());
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = jwtDecode(token);
      dispatch(logInActionCreator(userInfo));
    }
  }, [dispatch]);

  return (
    <>
      <main>
        <h1>THE CUTEST ROBOTS</h1>
        <div className="container">
          <LoginForm />
          <RobotList />
        </div>
      </main>
    </>
  );
};

export default App;
