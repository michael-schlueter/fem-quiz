import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import userEvent from '@testing-library/user-event'
import Header from "../components/Header";

test("toggle dark mode on/off/on", async () => {
  const mockToggleDarkMode = vi.fn();
  const user = userEvent.setup();

  // render Header
  render(
    <Header
      activeQuiz={null}
      isDarkMode={false}
      toggleDarkMode={mockToggleDarkMode}
    />
  );

  // find dark mode toggle
  const toggleButton = screen.getByRole("button", { name: /darkmode/i });

  // click the button
  await user.click(toggleButton);

  // assert that "dark" class has been added to the body
  expect(document.body).toHaveClass("dark");
});
