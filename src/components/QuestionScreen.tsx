import { Quiz } from "../lib/types";
import ProgressBar from "./ProgressBar";

type QuestionScreenProps = {
  activeQuiz: Quiz | null;
};

export default function QuestionScreen({ activeQuiz }: QuestionScreenProps) {
  return (
    <main className="main-wrapper">
      <div className="question-wrapper">
        <div className="question">
          <p className="sub-heading">Question 6 of 10</p>
          <h4>
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </h4>
          <ProgressBar />
        </div>
      </div>
      <div className="answer-wrapper">
        <ul className="categories">
          <li>
            <button className="answer-button">
                <div className="answer">
                    <div className="answer-letter">
                        <h5>A</h5>
                    </div>
                    <h5>4,5 : 1</h5>
                </div>
            </button>
          </li>
          <li>
            <button className="answer-button">
                <div className="answer">
                    <div className="answer-letter">
                        <h5>B</h5>
                    </div>
                    <h5>3 : 1</h5>
                </div>
            </button>
          </li>
          <li>
            <button className="answer-button">
                <div className="answer">
                    <div className="answer-letter">
                        <h5>C</h5>
                    </div>
                    <h5>2,5 : 1</h5>
                </div>
            </button>
          </li>
          <li>
            <button className="answer-button">
                <div className="answer">
                    <div className="answer-letter">
                        <h5>D</h5>
                    </div>
                    <h5>5 : 1</h5>
                </div>
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
}
