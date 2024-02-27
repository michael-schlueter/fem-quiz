import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { Quiz } from "./lib/types";

function App() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  function handleQuizChange(quiz: Quiz) {
    setActiveQuiz(quiz);
  }

  return (
    <div className="wrapper">
      <Header activeQuiz={activeQuiz} />
      {!activeQuiz && <WelcomeScreen onQuizChange={handleQuizChange} />}
    </div>
  );
}

export default App;
