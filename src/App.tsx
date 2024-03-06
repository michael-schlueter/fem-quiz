import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { Quiz } from "./lib/types";
import QuestionScreen from "./components/QuestionScreen";
import CompletionScreen from "./components/CompletionScreen";

type GameStatus = "starting" | "running" | "finished";

function App() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>("starting");
  const [score, setScore] = useState<number>(0);

  function handleQuizChange(quiz: Quiz) {
    setActiveQuiz(quiz);
    setGameStatus("running");
  }

  function handleFinishGame() {
    setGameStatus("finished");
  }

  function handleRestartQuiz() {
    setGameStatus("starting");
    setActiveQuiz(null);
    setScore(0);
  }

  function handleIncreaseScore() {
    setScore((prev) => prev + 1);
  }

  return (
    <div className="wrapper">
      <Header activeQuiz={activeQuiz} />
      {gameStatus === "starting" && (
        <WelcomeScreen onQuizChange={handleQuizChange} />
      )}
      {gameStatus === "running" && (
        <QuestionScreen
          activeQuiz={activeQuiz}
          onFinish={handleFinishGame}
          onScore={handleIncreaseScore}
        />
      )}
      {gameStatus === "finished" && (
        <CompletionScreen
          score={score}
          activeQuiz={activeQuiz}
          onRestart={handleRestartQuiz}
        />
      )}
    </div>
  );
}

export default App;
