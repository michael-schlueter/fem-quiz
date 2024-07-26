import { render, screen } from "@testing-library/react";
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

test("displays correct score after finishing quiz", async () => {
  render(<App />);
  const user = userEvent.setup();

  // start quiz
  const categoryButton = screen.getByRole("button", {
    name: "icon for quiz category HTML HTML",
  });
  await user.click(categoryButton);

  // select and submit correct/incorrect answers, go to next question
  const correctOptionButton1 = screen.getByRole("button", {
    name: "C Hyper Text Markup Language",
  });
  await user.click(correctOptionButton1);
  let submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  let nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const incorrectOptionButton2 = screen.getByRole("button", {
    name: "B <head><html></html><body></body></head>",
  });
  await user.click(incorrectOptionButton2);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const correctOptionButton3 = screen.getByRole("button", {
    name: "B <title>"
  })
  await user.click(correctOptionButton3);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const incorrectOptionButton4 = screen.getByRole("button", {
    name: "A It defines the document's head section."
  });
  await user.click(incorrectOptionButton4);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const correctOptionButton5 = screen.getByRole("button", {
    name: "C <a>"
  })
  await user.click(correctOptionButton5);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const incorrectOptionButton6 = screen.getByRole("button", {
    name: "D <pic>"
  });
  await user.click(incorrectOptionButton6);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const correctOptionButton7 = screen.getByRole("button", {
    name: "B src"
  })
  await user.click(correctOptionButton7);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const incorrectOptionButton8 = screen.getByRole("button", {
    name: "B <ol>"
  });
  await user.click(incorrectOptionButton8);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const correctOptionButton9 = screen.getByRole("button", {
    name: "C It inserts a line break."
  })
  await user.click(correctOptionButton9);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  const incorrectOptionButton10 = screen.getByRole("button", {
    name: "B It sets the field to a fixed size."
  });
  await user.click(incorrectOptionButton10);
  submitButton = screen.getByRole("button", { name: "Submit Answer" });
  await user.click(submitButton);
  nextQuestionButton = screen.getByRole("button", {
    name: "Next Question",
  });
  await user.click(nextQuestionButton);

  // Score on the completion screen should be 5
  const score = screen.getByRole("heading", { name: "5" });
  expect(score).toBeInTheDocument();
});
