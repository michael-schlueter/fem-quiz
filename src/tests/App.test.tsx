import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    render(<App />);
  });

  const selectAndSubmitAnswer = async (answerName: string) => {
    const optionButton = screen.getByRole("button", { name: answerName });
    await user.click(optionButton);
    const submitButton = screen.getByRole("button", { name: "Submit Answer" });
    await user.click(submitButton);
    const nextQuestionButton = screen.getByRole("button", {
      name: "Next Question",
    });
    await user.click(nextQuestionButton);
  };

  test("toggles dark mode on/off", async () => {
    // initial mode is light mode
    expect(document.body).not.toHaveClass("dark");

    // finds dark mode toggle
    const toggleButton = screen.getByTestId("darkmode-switch");

    // toggles dark mode
    await user.click(toggleButton);

    // "dark" class is added to the body
    expect(document.body).toHaveClass("dark");

    // toggles light mode
    await user.click(toggleButton);

    // "dark" class is removed from the body
    expect(document.body).not.toHaveClass("dark");
  });

  test("toggles dark mode on/off using keyboard navigation", async () => {
    // initial mode is light mode
    expect(document.body).not.toHaveClass("dark");

    // navigate to dark mode button
    await user.tab();

    // toggles dark mode
    await user.keyboard("{Enter}");

    // "dark" class is added to the body
    expect(document.body).toHaveClass("dark");

    // toggles light mode
    await user.keyboard("{Enter}");

    // "dark" class is removed from the body
    expect(document.body).not.toHaveClass("dark");
  });

  test("displays correct score after finishing quiz", async () => {
    // starts quiz
    const categoryButton = screen.getByRole("button", {
      name: "icon for quiz category HTML HTML",
    });
    await user.click(categoryButton);

    // selects and submits answers
    const answers = [
      "C Hyper Text Markup Language",
      "B <head><html></html><body></body></head>",
      "B <title>",
      "A It defines the document's head section.",
      "C <a>",
      "D <pic>",
      "B src",
      "B <ol>",
      "C It inserts a line break.",
      "B It sets the field to a fixed size.",
    ];

    for (const answer of answers) {
      await selectAndSubmitAnswer(answer);
    }

    // score on the completion screen should be 5
    const score = screen.getByRole("heading", { name: "5" });
    expect(score).toBeInTheDocument();
  });

  test("displays correct score after finishing quiz with keyboard navigation", async () => {
    // picks category
    await user.tab();
    await user.tab();
    await user.keyboard("{Enter}");

    // picks and submit answers
    const pickAndSubmitAnswer = async () => {
      await user.tab();
      await user.tab();
      await user.keyboard("{Enter}");
      for (let i = 0; i < 4; i++) {
        await user.tab();
      }
      await user.keyboard("{Enter}");
      await user.tab();
      await user.tab();
      await user.keyboard("{Enter}");
    };

    for (let i = 0; i < 10; i++) {
      await pickAndSubmitAnswer();
    }

    // score on the completion screen should be 4
    const score = screen.getByRole("heading", { name: "4" });
    expect(score).toBeInTheDocument();
  });

  test("restarts quiz after finishing it", async () => {
    // starts quiz
    const categoryButton = screen.getByRole("button", {
      name: "icon for quiz category HTML HTML",
    });
    await user.click(categoryButton);

    // selects and submits answers
    const answers = [
      "C Hyper Text Markup Language",
      "B <head><html></html><body></body></head>",
      "B <title>",
      "A It defines the document's head section.",
      "C <a>",
      "D <pic>",
      "B src",
      "B <ol>",
      "C It inserts a line break.",
      "B It sets the field to a fixed size.",
    ];

    for (const answer of answers) {
      await selectAndSubmitAnswer(answer);
    }

    // restarts quiz
    const playAgainButton = screen.getByRole("button", { name: "Play Again" });
    await user.click(playAgainButton);

    // displays WelcomeScreen
    const welcomeHeading = screen.getByRole("heading", {
      name: "Welcome to the",
    });
    expect(welcomeHeading).toBeInTheDocument();
  });

  test("restarts quiz after finishing it using keyboard navigation", async () => {
    // picks category
    await user.tab();
    await user.tab();
    await user.keyboard("{Enter}");

    // picks and submit answers
    const pickAndSubmitAnswer = async () => {
      await user.tab();
      await user.tab();
      await user.keyboard("{Enter}");
      for (let i = 0; i < 4; i++) {
        await user.tab();
      }
      await user.keyboard("{Enter}");
      await user.tab();
      await user.tab();
      await user.keyboard("{Enter}");
    };

    for (let i = 0; i < 10; i++) {
      await pickAndSubmitAnswer();
    }

    await user.tab();
    await user.tab();
    await user.keyboard("{Enter}");

    // displays WelcomeScreen
    const welcomeHeading = screen.getByRole("heading", {
      name: "Welcome to the",
    });
    expect(welcomeHeading).toBeInTheDocument();
  });
});
