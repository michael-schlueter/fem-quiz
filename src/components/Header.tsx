import { Quiz } from "../lib/types";
import DarkModeToggle from "./DarkModeToggle";

type HeaderProps = {
  activeQuiz: Quiz | null;
  handleToggleDarkMode: () => void;
};

export default function Header({ activeQuiz, handleToggleDarkMode }: HeaderProps) {
  return (
    <header>
      {activeQuiz && (
        <div className="header-category">
          <div className="logo-container">
            <div className={`icon icon-${activeQuiz.title.toLowerCase()}`}>
              <img
                className="logo"
                src={activeQuiz.icon}
                alt={`${activeQuiz.title.toLowerCase()} icon`}
              />
            </div>
          </div>
          <h5>{activeQuiz.title}</h5>
        </div>
      )}
      <DarkModeToggle handleToggleDarkMode={handleToggleDarkMode} />
    </header>
  );
}
