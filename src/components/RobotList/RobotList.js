import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import RobotListStyled from "./RobotListStyled";

const RobotList = () => {
  const robots = useSelector((state) => state.todos);
  return (
    <>
      <RobotListStyled className="robot-list">
        {robots.map((robot) => (
          <Robot key={robot.id} robot={robot} />
        ))}
      </RobotListStyled>
    </>
  );
};
export default RobotList;
