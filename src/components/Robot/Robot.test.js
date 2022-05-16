import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot Component", () => {
  describe("When it receives a name 'Kiko'", () => {
    test("Then it should renderize this text on the screen", () => {
      const givenRobot = { name: "Kiko" };

      render(<Robot robot={givenRobot} />);
      const imageElement = screen.getByRole("heading", {
        name: givenRobot[0],
      });

      expect(imageElement).toBeInTheDocument();
    });
  });
});
