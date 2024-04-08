import { render, screen } from "@testing-library/react";
import Greet from "../../../components/greet/Greet";

test("Greet render successfully", () => {
  render(<Greet />); //create virtual dome using render
  const textElement = screen.getByText(/Hello/i); //ignoring case senstivity
  expect(textElement).toBeInTheDocument();
});

test("name prop is passed or not", () => {
  render(<Greet name="Adesh" />)
  const textElement = screen.getByText(/Hello Adesh/i); //ignoring case senstivity
  expect(textElement).toBeInTheDocument();
})
