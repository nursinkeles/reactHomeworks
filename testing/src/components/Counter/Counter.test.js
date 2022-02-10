import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";
describe("Counter Tests", () => {
  let decreaseBtn, increaseBtn, count;
  beforeEach(() => {
    render(<Counter />);

    decreaseBtn = screen.getByText("Decrease");
    increaseBtn = screen.getByText("Increase");
    count = screen.getByText("0");
  });
  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });
  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("1");
  });
});
