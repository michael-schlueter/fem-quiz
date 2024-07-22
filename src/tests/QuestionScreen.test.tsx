import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import QuestionScreen from "../components/QuestionScreen";
import userEvent from "@testing-library/user-event";

describe("handles answers in Quiz", () => {
  const mockActiveQuiz = {
    title: "HTML",
    icon: "./assets/images/icon-html.svg",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markup Leveler",
        ],
        answer: "Hyper Text Markup Language",
      },
    ],
  };

  test("picks correct answer", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();

    // Simulate selecting the correct answer
    const correctOptionButton = screen.getByRole("button", {
      name: "C Hyper Text Markup Language",
    });
    await user.click(correctOptionButton);

    // Submit the answer
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);

    // Assert outcome for a correct answer
    const correctOptionLetter = screen.getByRole("heading", { name: "C" });
    const correctOption = correctOptionLetter.parentElement;
    expect(correctOption).toHaveClass("answer-letter-background-correct");
  });

  test("picks incorrect answer", async () => {
    render(
        <QuestionScreen
          activeQuiz={mockActiveQuiz}
          onFinish={() => {}}
          onScore={() => {}}
        />
      );
      const user = userEvent.setup();
  
      // Simulate selecting the incorrect answer
      const incorrectOptionButton = screen.getByRole("button", {
        name: "D Hyper Text Markup Leveler",
      });
      await user.click(incorrectOptionButton);
  
      // Submit the answer
      const submitButton = screen.getByRole("button", { name: "Submit Answer" });
      await user.click(submitButton);
  
      // Assert outcome for an incorrect answer
      const incorrectOptionLetter = screen.getByRole("heading", { name: "D" });
      const incorrectOption = incorrectOptionLetter.parentElement;
      expect(incorrectOption).toHaveClass("answer-letter-background-wrong");
  });

  test("disables button if no answer is selected", () => {});
});
