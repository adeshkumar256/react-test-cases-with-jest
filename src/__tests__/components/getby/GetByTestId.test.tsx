import { render, screen } from "@testing-library/react";
import Application from "../../../components/application/Application";

// this is most important functio to get by test id we can set test-id on any element even custom element
// Here we used the getByTestId to get the element
// You need to add attribute [data-testid] on the element

test("Get By Test Id", () => {
  render(<Application />);
  const element = screen.getByTestId("custom-element");
  expect(element).toBeInTheDocument();
});
