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
    }
    if (index === 1) {
      setChosenOption(activeQuestion!.options[1]);
    }
    if (index === 2) {
      setChosenOption(activeQuestion!.options[2]);
    }
    setChosenOption(activeQuestion!.options[3]);
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
    <main className="question-wrapper">
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
            <li>
              <button
                onClick={() => handleClick(index)}
                className="answer-button"
              >
                <div className="answer">
                  <div className="answer-letter">
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
      </div>
      {isError && <p>Please select an answer</p>}
    </main>
  );
}
