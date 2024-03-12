import data from "../lib/data.json";
import { Quiz } from "../lib/types";

type WelcomeScreenProps = {
  onQuizChange: (quiz: Quiz) => void;
};

export default function WelcomeScreen({ onQuizChange }: WelcomeScreenProps) {
  return (
    <main className="main-wrapper">
      <div className="welcome">
        <div className="headline-container">
          <h3>Welcome to the</h3>
          <h2>Frontend Quiz!</h2>
        </div>
        <p className="sub-heading">Pick a subject to get started.</p>
      </div>
      <ul className="categories">
        {data.quizzes.map((quiz, index) => (
          <li key={index}>
            <button
              className="category-button"
              onClick={() => onQuizChange(quiz)}
            >
              <div className="category">
                <div className={`icon icon-${quiz.title.toLowerCase()}`}>
                  <img className="quiz-icon" src={quiz.icon}></img>
                </div>
                <h5 className="quiz-title">{quiz.title}</h5>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
