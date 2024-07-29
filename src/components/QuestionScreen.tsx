import { useState } from "react";
import { Quiz } from "../lib/types";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { MAX_QUESTIONS } from "../lib/constants";

type QuestionScreenProps = {
  activeQuiz: Quiz | null;
  onFinish: () => void;
  onScore: () => void;
};

export default function QuestionScreen({
  activeQuiz,
  onFinish,
  onScore,
}: QuestionScreenProps) {
  // state
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(1);
  const [chosenOption, setChosenOption] = useState("");
  const [answerStatus, setAnswerStatus] = useState("");
  const [isError, setIsError] = useState(false);

  // derived state
  const activeQuestion = activeQuiz?.questions[activeQuestionIndex - 1];
  const questionsLength = activeQuiz?.questions.length || 0;

  // event handlers / actions

  function getClassName(
    option: string,
    base: string,
    correct: string,
    wrong: string,
    selected: string
  ) {
    if (option === chosenOption) {
      if (
        chosenOption === activeQuestion?.answer &&
        answerStatus === "correct"
      ) {
        return `${base} ${correct}`;
      }
      if (
        chosenOption !== activeQuestion?.answer &&
        answerStatus === "incorrect"
      ) {
        return `${base} ${wrong}`;
      }
      return `${base} ${selected}`;
    }
    return base;
  }

  function handleClick(index: number) {
    setIsError(false);
    setChosenOption(activeQuestion!.options[index]);
  }

  function handleSubmit() {
    if (!chosenOption) {
      setIsError(true);
      return;
    }

    if (chosenOption === activeQuestion!.answer) {
      onScore();
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }
  }

  function handleContinueQuiz() {
    if (activeQuestionIndex === MAX_QUESTIONS) {
      onFinish();
    } else {
      setActiveQuestionIndex((prev) => prev + 1);
      setChosenOption("");
      setAnswerStatus("");
    }
  }

  if (!activeQuestion) {
    return <div>Error loading question</div>
  }

  return (
    <main className="question-wrapper screen">
      <section className="question">
        <p className="sub-heading" data-testid="question-number">{`Question ${activeQuestionIndex} of ${questionsLength}`}</p>
        <h4>{activeQuestion.question}</h4>
        <ProgressBar
          progress={Math.floor((activeQuestionIndex / questionsLength) * 100)}
        />
      </section>
      <div className="answer-wrapper">
        <ul className="categories">
          {activeQuestion?.options.map((option, index) => (
            <li
              className={getClassName(
                option,
                "answers",
                "correct-border",
                "wrong-border",
                "selected-border"
              )}
              key={option}
            >
              <button
                onClick={() => {
                  handleClick(index);
                }}
                className="answer-button"
                disabled={answerStatus !== ""}
              >
                <div
                  className={getClassName(
                    option,
                    "answer-letter",
                    "answer-letter-background-correct",
                    "answer-letter-background-wrong",
                    "answer-letter-background-selected"
                  )}
                >
                  <h5 className="answer-letter-heading">
                    {["A", "B", "C", "D"][index]}
                  </h5>
                </div>
                <h5>{option}</h5>
                {option === activeQuestion.answer && answerStatus !== "" ? (
                  <img
                    className="answer-status"
                    src="/assets/images/icon-correct.svg"
                    alt="correct indicator"
                  />
                ) : null}
                {option === chosenOption &&
                option !== activeQuestion.answer &&
                answerStatus === "incorrect" ? (
                  <img
                    className="answer-status"
                    src="/assets/images/icon-incorrect.svg"
                    alt="incorrect indicator"
                  />
                ) : null}
                {answerStatus === "" && <div className="answer-status"></div>}
              </button>
            </li>
          ))}
        </ul>
        {answerStatus === "" && (
          <Button onClick={handleSubmit}>Submit Answer</Button>
        )}
        {answerStatus !== "" && (
          <Button onClick={handleContinueQuiz}>Next Question</Button>
        )}
        {isError && (
          <div className="error-message">
            <img
              className="error-icon"
              src="/assets/images/icon-error.svg"
              alt="Error: No answer selected"
            />
            <p>Please select an answer</p>
          </div>
        )}
      </div>
    </main>
  );
}
