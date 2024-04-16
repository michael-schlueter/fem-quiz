import { useState } from "react";
import { Quiz } from "../lib/types";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

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
  function handleClick(index: number) {
    setIsError(false);
    if (index === 0) {
      setChosenOption(activeQuestion!.options[0]);
    } else if (index === 1) {
      setChosenOption(activeQuestion!.options[1]);
    } else if (index === 2) {
      setChosenOption(activeQuestion!.options[2]);
    } else if (index === 3) {
      setChosenOption(activeQuestion!.options[3]);
    }
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
    if (activeQuestionIndex === 10) {
      onFinish();
    } else {
      setActiveQuestionIndex((prev) => prev + 1);
      setChosenOption("");
      setAnswerStatus("");
    }
  }

  return (
    <main className="question-wrapper screen">
      <div className="question">
        <p className="sub-heading">{`Question ${activeQuestionIndex} of ${questionsLength}`}</p>
        <h4>{activeQuestion?.question}</h4>
        <ProgressBar
          progress={Math.floor((activeQuestionIndex / questionsLength) * 100)}
        />
      </div>
      <div className="answer-wrapper">
        <ul className="categories">
          {activeQuestion?.options.map((option, index) => (
            <li
              className={`answers ${
                option === chosenOption &&
                chosenOption === activeQuestion.answer &&
                answerStatus === "correct"
                  ? "correct-border"
                  : option === chosenOption &&
                    chosenOption !== activeQuestion.answer &&
                    answerStatus === "incorrect"
                  ? "wrong-border"
                  : option === chosenOption
                  ? "selected-border"
                  : ""
              }`}
              key={index}
            >
              <button
                onClick={() => {
                  handleClick(index);
                }}
                className="answer-button"
                disabled={answerStatus !== ""}
              >
                <div className="answer">
                  <div
                    className={`answer-letter ${
                      option === chosenOption &&
                      chosenOption === activeQuestion.answer &&
                      answerStatus === "correct"
                        ? "answer-letter-background-correct"
                        : option === chosenOption &&
                          chosenOption !== activeQuestion.answer &&
                          answerStatus === "incorrect"
                        ? "answer-letter-background-wrong"
                        : option === chosenOption
                        ? "answer-letter-background-selected"
                        : "answer-letter-background"
                    }`}
                  >
                    <h5>
                      {index === 0
                        ? "A"
                        : index === 1
                        ? "B"
                        : index === 2
                        ? "C"
                        : "D"}
                    </h5>
                  </div>
                  <h5>{option}</h5>
                  {option === activeQuestion.answer && answerStatus !== "" ? (
                    <img
                      className="answer-status"
                      src="./assets/images/icon-correct.svg"
                      alt="correct indicator"
                    />
                  ) : null}
                  {option === chosenOption &&
                  option !== activeQuestion.answer &&
                  answerStatus === "incorrect" ? (
                    <img
                      className="answer-status"
                      src="./assets/images/icon-incorrect.svg"
                      alt="incorrect indicator"
                    />
                  ) : null}
                  {answerStatus === "" && <div className="answer-status"></div>}
                </div>
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
            <img className="error-icon" src="./assets/images/icon-error.svg" alt="error icon" />
            <p>Please select an answer</p>
          </div>
        )}
      </div>
    </main>
  );
}
