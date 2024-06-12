import { Quiz } from "../lib/types";
import Button from "./Button";

type CompletionScreenProps = {
  score: number;
  activeQuiz: Quiz | null;
  onRestart: () => void;
};

function ResultHeader({ activeQuiz }: { activeQuiz: Quiz | null }) {
  const title = activeQuiz?.title.toLowerCase() || "";
  return (
    <div className="result-header">
      <div className="logo-container">
        <div className={`icon icon-${activeQuiz?.title.toLowerCase()}`}>
          <img className="logo" src={activeQuiz?.icon || ""} alt={`${title} icon`} />
        </div>
      </div>
      <h5>{activeQuiz?.title || "No title"}</h5>
    </div>
  );
}

function ScoreContainer({ score }: { score: number }) {
  return (
    <div className="score-container">
      <h1>{score}</h1>
      <p className="sub-heading">out of 10</p>
    </div>
  );
}

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
          <ResultHeader activeQuiz={activeQuiz} />
          <ScoreContainer score={score} />
        </div>
        <Button onClick={onRestart}>Play Again</Button>
      </div>
    </div>
  );
}
