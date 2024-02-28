import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { Quiz } from "./lib/types";
import QuestionScreen from "./components/QuestionScreen";
// Test only
import data from "../src/lib/data.json"

function App() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(data.quizzes[3]);

  function handleQuizChange(quiz: Quiz) {
    setActiveQuiz(quiz);
  }

  return (
    <div className="wrapper">
      <Header activeQuiz={activeQuiz} />
      {!activeQuiz && <WelcomeScreen onQuizChange={handleQuizChange} />}
      {<QuestionScreen activeQuiz={activeQuiz} />}
    </div>
  );
}

export default App;
