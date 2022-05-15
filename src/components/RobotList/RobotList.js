import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import RobotListStyled from "./RobotListStyled";

const RobotList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <>
      <RobotListStyled className="robot-list">
        (
        {robots.map((robot) => (
          <Robot key={robot._id} robot={robot} />
        ))}
        )
      </RobotListStyled>
    </>
  );
};

export default RobotList;
