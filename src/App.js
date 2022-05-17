import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import RobotList from "./components/RobotList/RobotList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
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
}

export default App;
