import RobotStyled from "./RobotStyled";

const Robot = ({
  robot,
  robot: { name, image, resilience, speed, created },
}) => {
  return (
    <RobotStyled className="robot crop">
      <h2 className="robot_name">{name}</h2>
      <img className="robot_image" src={image} alt={name} />
      <div>
        <p>Resilience: {resilience}</p>
        <p>Speed: {speed}</p>
        <p>Year of creation: {created}</p>
      </div>
    </RobotStyled>
  );
};
export default Robot;
