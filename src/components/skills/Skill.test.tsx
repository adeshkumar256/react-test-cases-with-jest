import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills component", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("render sucessfully", () => {
    render(<Skills skills={skills} />);

    // here type list is for list element i.e. <ul> or <ol>
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render sucessfully", () => {
    render(<Skills skills={skills} />);
    // here listitem is for <li>
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("check login button present" , () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
  })

  // test("check start learning button not present" , () => {
  //   render(<Skills skills={skills} />);
  //   const startLearningButton = screen.getByRole("button", {name: "Start Learning"})
  //   expect(startLearningButton).not.toBeInTheDocument()
  // })

  // above test will throw error as button is not there so we will use queryBy instead of getBy
  // So if an element is not present we will use queryBy it will return null if element not found instead of throwing error


  test("check start learning button not present" , () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {name: "Start Learning"})
    expect(startLearningButton).not.toBeInTheDocument()
  })
});
