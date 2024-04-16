import { Quiz } from "../lib/types";
import Button from "./Button";

type CompletionScreenProps = {
  score: number;
  activeQuiz: Quiz | null;
  onRestart: () => void;
};

export default function CompletionScreen({
  score,
  activeQuiz,
  onRestart,
}: CompletionScreenProps) {
  return (
    <div className="completion-wrapper screen">
      <div className="headline-container">
        <h3>Quiz completed</h3>
        <h2>You scored...</h2>
      </div>
      <div className="completion-container">
        <div className="result-container">
          <div className="result-header">
            <div className="logo-container">
              <div className={`icon icon-${activeQuiz?.title.toLowerCase()}`}>
                <img
                  className="logo"
                  src={activeQuiz?.icon}
                  alt={`${activeQuiz?.title.toLowerCase()} icon`}
                />
              </div>
            </div>
            <h5>{activeQuiz?.title}</h5>
          </div>
          <div className="score-container">
            <h1>{score}</h1>
            <p className="sub-heading">out of 10</p>
          </div>
        </div>
        <Button onClick={onRestart}>Play Again</Button>
      </div>
    </div>
  );
}
