import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { Quiz } from "./lib/types";
import QuestionScreen from "./components/QuestionScreen";
// Test only
import data from "../src/lib/data.json"
import FinishScreen from "./components/FinishScreen";

type GameStatus = "starting" | "running" | "finished";

function App() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(data.quizzes[3]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('starting');
  const [score, setScore] = useState<number>(0);

  function handleQuizChange(quiz: Quiz) {
    setActiveQuiz(quiz);
    setGameStatus('running');
  }

  function handleFinishGame() {
    setGameStatus('finished');
  }

  function handleIncreaseScore() {
    setScore(prev => prev + 1);
  }

  return (
    <div className="wrapper">
      <Header activeQuiz={activeQuiz} />
      {gameStatus === "starting" && <WelcomeScreen onQuizChange={handleQuizChange} />}
      {gameStatus === "running" && <QuestionScreen activeQuiz={activeQuiz} onFinish={handleFinishGame} onScore={handleIncreaseScore} />}
      {gameStatus === "finished" && <FinishScreen score={score} />}
    </div>
  );
}

export default App;
