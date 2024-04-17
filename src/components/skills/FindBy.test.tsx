import { render, screen } from "@testing-library/react";
import FindBy from "./FindBy";

describe("Skills component", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  // FindBy returns a promise so we have to use async-await here
  // promise is resolved if element found and rejected if not found
  // we can pass custom time to the findBy method
  // default timeout for findBy is 1000ms

  test("start learning button appeared after sometime", async () => {
    const view = render(<FindBy skills={skills} />);
    // screen.debug()
    //logRoles(view)

    // We can use above 2 statements to debug
    const startLearningButton = await screen.findByRole(
      "button",
      { name: "Start Learning" },
      { timeout: 2000 } // to wait for result for 2 s
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
