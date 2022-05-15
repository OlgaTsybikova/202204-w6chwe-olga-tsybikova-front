import styled from "styled-components";

const RobotStyled = styled.li`
  background-color: pink;
  flex-direction: column;

  p {
    font-size: 27px;
  }

  .robot_image {
    float: center;
    width: 550px;
    height: 400px;
    object-fit: scale-down;
    overflow: hidden;
  }

  .crop img {
    height: auto;
    width: 400px;
  }
`;

export default RobotStyled;
