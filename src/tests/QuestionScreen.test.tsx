import { render, screen } from "@testing-library/react";
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
      {
        question:
          "Which of the following is the correct structure for an HTML document?",
        options: [
          "<html><head></head><body></body></html>",
          "<head><html></html><body></body></head>",
          "<body><head></head><html></html></body>",
          "<html><body></body><head></head></html>",
        ],
        answer: "<html><head></head><body></body></html>",
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

  test("submits answer without selecting an answer", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();

    // No error message is displayed
    const errorImage = screen.queryByAltText("Error: No answer selected");
    expect(errorImage).not.toBeInTheDocument();

    // Simulates submitting an answer without selecting an answer option
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);

    // Error message is displayed
    expect(
      screen.getByAltText("Error: No answer selected")
    ).toBeInTheDocument();
  });

  test("submits an selected answer", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();

    // Simulate selecting an answer
    const answerOptionButton = screen.getByRole("button", {
      name: "C Hyper Text Markup Language",
    });
    await user.click(answerOptionButton);

    // Simulate submitting the answer
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);

    // No error message is displayed
    const errorImage = screen.queryByAltText("Error: No answer selected");
    expect(errorImage).not.toBeInTheDocument();
  });

  test("updates progress bar on answering questions", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();
    // Check progress bar while first question
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("width: 50%");

    // Simulate answering the first question
    const firstOptionButton = screen.getByRole("button", {
      name: "C Hyper Text Markup Language",
    });
    await user.click(firstOptionButton);
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);
    const nextQuestionButton = screen.getByRole("button", {
      name: "Next Question",
    });
    await user.click(nextQuestionButton);

    expect(progressBar).toHaveStyle("width: 100%");
  });

  test("disables answer options once answer has been submitted", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();

    // Simulate selecting the incorrect answer
    const wrongtOptionButton = screen.getByRole("button", {
      name: "D Hyper Text Markup Leveler",
    });
    await user.click(wrongtOptionButton);

    // Submit the answer
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);

    // Alternative answer options are disabled
    const correctOptionButton = screen.getByRole("button", {
      name: "C Hyper Text Markup Language correct indicator",
    });
    expect(correctOptionButton).toBeDisabled();
  });

  test("tracks number of answered questions", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();

    // number of questions starts with 1
    const questionNumber = screen.getByTestId("question-number");
    expect(questionNumber).toHaveTextContent("Question 1");

    // Simulate answering the first question
    const answerOptionButton = screen.getByRole("button", {
      name: "C Hyper Text Markup Language",
    });
    await user.click(answerOptionButton);
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);
    const nextQuestionButton = screen.getByRole("button", {
      name: "Next Question",
    });
    await user.click(nextQuestionButton);

    // number of questions increases to 2
    expect(questionNumber).toHaveTextContent("Question 2");
  });

  test("changes question after submitting an answer", async () => {
    render(
      <QuestionScreen
        activeQuiz={mockActiveQuiz}
        onFinish={() => {}}
        onScore={() => {}}
      />
    );
    const user = userEvent.setup();

        // Simulate selecting an answer
        const answerOptionButton = screen.getByRole("button", {
          name: "C Hyper Text Markup Language",
        });
        await user.click(answerOptionButton);
    
        // Simulate submitting the answer
        const submitButton = screen.getByRole("button", { name: "Submit Answer" });
        await user.click(submitButton);

        // Simulate navigating to the next question
        const nextQuestionButton = screen.getByRole("button", { name: "Next Question"});
        await user.click(nextQuestionButton);

        // Next question is displayed
        const questionHeading = screen.getByRole("heading", {
          name: "Which of the following is the correct structure for an HTML document?"
        });
        expect(questionHeading).toBeInTheDocument();
  });
});
