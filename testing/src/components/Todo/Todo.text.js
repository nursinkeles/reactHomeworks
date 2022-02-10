import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";
describe("Todo Tests", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });
  test("varsayılan olarak 3 nesne render edilmeli", () => {
    const Items = screen.getAllByText(/item/i);
    expect(Items.length).toEqual(3);
  });
  test("input ve button dokümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  test("inputa string girilip butona basılınca listeye eklenmeli", () => {
    //inputu doldur
    const name = "Nurşin";
    userEvent.type(input, name);
    //butona tıkla
    userEvent.click(button);
    //assertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
