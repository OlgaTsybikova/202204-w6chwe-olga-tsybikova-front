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
    <>
      <main>
        <h1>THE CUTEST ROBOTS</h1>
        <div className="container">
          <RobotList />
        </div>
      </main>
    </>
  );
}

export default App;
