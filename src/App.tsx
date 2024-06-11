import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { Quiz } from "./lib/types";
import QuestionScreen from "./components/QuestionScreen";
import CompletionScreen from "./components/CompletionScreen";

type State = {
  activeQuiz: Quiz | null;
  gameStatus: "starting" | "running" | "finished";
  score: number;
};

type Action =
  | { type: "START_QUIZ"; quiz: Quiz }
  | { type: "FINISH_QUIZ" }
  | { type: "RESTART_QUIZ" }
  | { type: "INCREASE_SCORE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START_QUIZ":
      return { ...state, activeQuiz: action.quiz, gameStatus: "running" };
    case "FINISH_QUIZ":
      return { ...state, gameStatus: "finished" };
    case "RESTART_QUIZ":
      return { ...state, activeQuiz: null, gameStatus: "starting", score: 0 };
    case "INCREASE_SCORE":
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    activeQuiz: null,
    gameStatus: "starting",
    score: 0,
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  function handleQuizChange(quiz: Quiz) {
    dispatch({ type: "START_QUIZ", quiz });
  }

  function handleFinishGame() {
    dispatch({ type: "FINISH_QUIZ" });
  }

  function handleRestartQuiz() {
    dispatch({ type: "RESTART_QUIZ" });
  }

  function handleIncreaseScore() {
    dispatch({ type: "INCREASE_SCORE" });
  }

  function handleToggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className="wrapper">
      <Header
        activeQuiz={state.activeQuiz}
        toggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />
      {state.gameStatus === "starting" && (
        <WelcomeScreen onQuizChange={handleQuizChange} />
      )}
      {state.gameStatus === "running" && (
        <QuestionScreen
          activeQuiz={state.activeQuiz}
          onFinish={handleFinishGame}
          onScore={handleIncreaseScore}
        />
      )}
      {state.gameStatus === "finished" && (
        <CompletionScreen
          score={state.score}
          activeQuiz={state.activeQuiz}
          onRestart={handleRestartQuiz}
        />
      )}
    </div>
  );
}

export default App;
