import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotList from "./components/RobotList/RobotList";
import { loadRobotsActionCreator } from "./redux/feature/robotSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsActionCreator());
  }, [dispatch]);

  return (
    <div className="container">
      <RobotList />
    </div>
  );
}

export default App;
