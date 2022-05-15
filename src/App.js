import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotList from "./components/RobotList/RobotList";
import loadRobotsActionThunk from "./redux/thunks/robotsThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsActionThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <RobotList />
    </div>
  );
}

export default App;
