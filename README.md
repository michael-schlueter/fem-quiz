# Frontend Mentor Quiz App
> This is a solution to a [Frontend Mentor](https://www.frontendmentor.io/) challenge. The challenge was to build a Quiz app and get is as close to the provided design as possible.



## General Information
- I undertook this project to further solidify my knowledge of the fundamentals in CSS/HTML/JavaScript. 
- The appeal in this challenge was to use a ready-made Figma design. This allowed me to gain more experience in working with Figma.
- I also took on the bonus task of this challenge which was the implementation of a (persisted) dark-mode.
- I extended this project further by adding tests for it which was not a necessary part of the challenge. I recently started learning about testing. So I used this project to get my first practical experience in writing tests.



## Technologies Used
- React 18
- TypeScript 5.2.2
- Vitest 2.0.3
- React Testing Library 16.0.0
- RadixUI 1.0.3



## Features
- Select a quiz subject
- Select a single answer from each question from a choice of four
- Error-handling when trying to submit an answer without making a selection
- Indicate correct/incorrect answers
- Display a score after finishing the quiz
- Responsive design
- Navigate the entire app only using the keyboard
- Change the app's theme between light and dark



## Screenshots
![Example screenshot](https://i.ibb.co/hC7X6Sf/quizapp.jpg)



## Demo
Live demo [_here_](https://fem-quiz.vercel.app/).



## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Install NPM packages in the project folder by running
```
npm install
```
in the terminal.
3. Run the app 
```
npm run dev
```
4. Visit localhost:5173 in your browser



## Learnings
- Working with the useReducer-Hook for state management
- Interacting with a Figma design to get the necessary implementation details
- Setting up React Testing Library / Vitest to work with Vite and TypeScript was quite hard to do for the first time
- Writing tests. In particular deciding which element to query in what way.
- Taking a holistic view of the app in order to figure out what features to test
- Structuring tests
- After working with Tailwind for a while I wanted to try writing pure CSS again. The naming and management of the classes was quite challenging and reminded me why I prefer using Tailwind
- Implementing a progress bar with the help of Radix UI
- Approaching building an app in general. I underestimated the scope of this project and just started building it (e.g., without thinking about coherently naming classes using a system etc.)



## Project Status
The project is basically finished. I may refactor some tests. In particular I wasn't able to mock the quiz data properly to simplify the tests and make them more robust. The same goes with the queries using the text from questions/answers. I will revisit this once I learnt more about testing and got more experience. I also may provide additional quiz data via an API and implement a coherent naming system for the CSS classes. 



## Acknowledgements
- This project is a solution to this [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU).



