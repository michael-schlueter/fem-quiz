export type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};

type Question = {
  question: string;
  options: string[];
  answer: string;
};
