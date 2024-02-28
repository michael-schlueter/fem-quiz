import { useState } from "react";
import { Quiz } from "../lib/types";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

type QuestionScreenProps = {
  activeQuiz: Quiz | null;
};

export default function QuestionScreen({ activeQuiz }: QuestionScreenProps) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(1);
  const activeQuestion = activeQuiz?.questions[activeQuestionIndex - 1];
  const questionsLength = activeQuiz?.questions.length || 0;

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
              <button className="answer-button">
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
        <Button>Submit Answer</Button>
      </div>
    </main>
  );
}
