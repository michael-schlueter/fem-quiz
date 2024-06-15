import React from "react";
import data from "../lib/data.json";
import { Quiz } from "../lib/types";

type WelcomeScreenProps = {
  onQuizChange: (quiz: Quiz) => void;
};

type QuizCategoryProps = {
  quiz: Quiz;
  onQuizChange: (quiz: Quiz) => void;
};

const QuizCategory = React.memo(({ quiz, onQuizChange }: QuizCategoryProps) => {
  return (
    <li>
      <button className="quiz-category__button" onClick={() => onQuizChange(quiz)}>
        <section className="quiz-category__content">
          <div className={`icon icon-${quiz.title.toLowerCase()}`}>
            <img className="quiz-icon" src={quiz.icon} alt={`icon for quiz category ${quiz.title}`}></img>
          </div>
          <h5 className="quiz-category__title">{quiz.title}</h5>
        </section>
      </button>
    </li>
  );
})

export default function WelcomeScreen({ onQuizChange }: WelcomeScreenProps) {
  return (
    <main className="main-wrapper screen">
      <div className="welcome-screen__welcome">
        <div className="welcome-screen__headline-container">
          <h3>Welcome to the</h3>
          <h2>Frontend Quiz!</h2>
        </div>
        <p className="sub-heading">Pick a subject to get started.</p>
      </div>
      <ul className="categories">
        {data.quizzes.map((quiz) => (
          <QuizCategory
            key={quiz.title}
            quiz={quiz}
            onQuizChange={onQuizChange}
          />
        ))}
      </ul>
    </main>
  );
}
