import { mockRobots } from "../../../mocks/mocks";
import { loadRobotsActionCreator } from "../feature/robotSlice";
import { loadRobotsThunk } from "./robotsThunk";

describe("Given a loadRobotsThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should dispatch loadRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const robots = mockRobots;
      const thunk = loadRobotsThunk();

      const expectedAction = loadRobotsActionCreator(robots);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
