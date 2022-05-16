import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockRobots } from "../../../mocks/mocks";
import store from "../../redux/store/store";
import RobotList from "./RobotList";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
  useSelector: () => {
    return mockRobots;
  },
}));
describe("Given a RobotList component", () => {
  describe("When it receives a Robot with a name 'Eva'", () => {
    test("Then it should renderize it on the screen", () => {
      const givenRobot = mockRobots[0];

      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );
      const expectedText = screen.getByText(givenRobot.name);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
