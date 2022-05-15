import { loadRobotsActionCreator } from "./robotSlice";
import robotReducer from "./robotSlice";

describe("Given a robotReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with three robots", () => {
    test("Then it should return a new robot list with the three robots", () => {
      const robotsList = [
        { name: "coco" },
        { name: "Robot2" },
        { name: "Robot3" },
      ];

      const actionLoad = loadRobotsActionCreator(robotsList);

      const newState = robotReducer(null, actionLoad);

      expect(newState).toEqual(robotsList);
    });
  });
});
