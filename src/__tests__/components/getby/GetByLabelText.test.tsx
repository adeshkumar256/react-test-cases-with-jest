import { render, screen } from "@testing-library/react";
import GetByLabelText from "../../../components/geyby/GetByLabelText";

// Here we used the getByLabelText to get the element by label text for this we should have
// htmlFor attribute set with same value as id in input field

test("Get By Label Text", () => {
  render(<GetByLabelText />);
  const element = screen.getByLabelText("Get By Label Text");
  expect(element).toBeInTheDocument();
});

// we can also get the element which is inside the label text like <label> <input/></label> without htmlFor attribute
// it will point to the next element in the hierarchy

test("Get By Label Text where input is child of label", () => {
  render(<GetByLabelText />);
  const element = screen.getByLabelText("I agree to the terms & conditions.");
  expect(element).toBeInTheDocument();
});

//Also if we have two element with same label the we can pass options to the getByLabeltext

test("Get By Label Text", () => {
  render(<GetByLabelText />);
  const element = screen.getByLabelText("Get By Label Text", {
    selector: "input",
  });
  expect(element).toBeInTheDocument();
});
