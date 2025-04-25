import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";  // Adjust path if necessary

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(container.querySelector("aside")).toBeInTheDocument();
  expect(container.querySelector("main")).toBeInTheDocument();
});
