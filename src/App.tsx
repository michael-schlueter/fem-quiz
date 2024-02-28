import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { Quiz } from "./lib/types";
import QuestionScreen from "./components/QuestionScreen";

function App() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  function handleQuizChange(quiz: Quiz) {
    setActiveQuiz(quiz);
  }

  return (
    <div className="wrapper">
      <Header activeQuiz={activeQuiz} />
      {activeQuiz && <WelcomeScreen onQuizChange={handleQuizChange} />}
      {<QuestionScreen activeQuiz={activeQuiz} />}
    </div>
  );
}

export default App;
