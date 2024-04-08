import { render, screen } from "@testing-library/react";
import Welcome from "../../../components/welcome/Welcome";

//describe is used to group test cases
describe("Welcome", () => {
  it("component renders successfully", () => {
    render(<Welcome />);
    const welcomeText = screen.getByText(/Welcome to the/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("App name Facebook", () => {
    render(<Welcome appName="facebook" />);
    const welcomeText = screen.getByText(/Welcome to the Facebook/i);
    expect(welcomeText).toBeInTheDocument();
  });
  
  // use fit in place of test.only to run particular test with `it`
  //use xit in place of test.skip to skip tests with `it`

  it("component renders successfully", () => {
    render(<Welcome appName="instagram" />);
    const welcomeText = screen.getByText(/Welcome to the instagram/i);
    expect(welcomeText).toBeInTheDocument();
  });

  describe("testing twitter nested", () => {
    it("component renders successfully", () => {
      render(<Welcome appName="twitter" />);
      const welcomeText = screen.getByText(/Welcome to the twitter/i);
      expect(welcomeText).toBeInTheDocument();
    });
  });
});

describe("testing tiktok nested", () => {
  it("component renders successfully", () => {
    render(<Welcome appName="tiktok" />);
    const welcomeText = screen.getByText(/Welcome to the tiktok/i);
    expect(welcomeText).toBeInTheDocument();
  });
});
