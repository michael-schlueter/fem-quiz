import { Quiz } from "../lib/types";
import DarkModeToggle from "./DarkModeToggle";

type HeaderProps = {
  activeQuiz: Quiz | null;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

type QuizIconProps = {
  quiz: Quiz;
};

function QuizIcon({ quiz }: QuizIconProps) {
  return (
    <div className="header__quiz-info">
      <div className="logo-container">
        <div className={`icon icon-${quiz.title.toLowerCase()}`}>
          <img
            className="logo"
            src={quiz.icon}
            alt={`${quiz.title.toLowerCase()} icon`}
          />
        </div>
      </div>
      <h5>{quiz.title}</h5>
    </div>
  );
}

export default function Header({
  activeQuiz,
  toggleDarkMode,
  isDarkMode,
}: HeaderProps) {
  return (
    <header>
      {activeQuiz && <QuizIcon quiz={activeQuiz} />}
      <DarkModeToggle
        handleToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
    </header>
  );
}
