import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("toggles dark mode on/off", async () => {
  const user = userEvent.setup();

  // render App
  render(<App />);

  // initial mode is light mode
  expect(document.body).not.toHaveClass("dark");

  // find dark mode toggle
  const toggleButton = screen.getByTestId("darkmode-switch");

  // toggle dark mode
  await user.click(toggleButton);

  // "dark" class is added to the body
  expect(document.body).toHaveClass("dark");

  // toggle light mode
  await user.click(toggleButton);

  // "dark" class is removed from the body
  expect(document.body).not.toHaveClass("dark");
});
