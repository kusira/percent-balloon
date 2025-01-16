import React, { SetStateAction } from "react";
import internal from "stream";

// Props の型定義
interface QuestionProps {
  questions: {
    problem: string;
    correctAnswer: number;
    userAnswer: number;
  }[];
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
}

const Questions = ({ questions, title, setTitle }: QuestionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {/* 問題一覧の表示 */}
        {questions.map((q, index) => (
          <li key={index}>
            <p>問題: {q.problem}</p>
            <p>正答: {q.correctAnswer}</p>
            <p>回答: {q.userAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;


/*
import React, { useState } from "react";
import Questions from "./Questions";

const App = () => {
  // タイトルの状態管理
  const [title, setTitle] = useState("整数型のクイズ問題");

  // 問題データ
  const questionData = [
    { problem: "1+1は？", correctAnswer: 2, userAnswer: 2 },
    { problem: "3+5は？", correctAnswer: 8, userAnswer: 7 },
    { problem: "10-3は？", correctAnswer: 7, userAnswer: 7 },
    { problem: "6×6は？", correctAnswer: 36, userAnswer: 36 },
    { problem: "25÷5は？", correctAnswer: 5, userAnswer: 4 },
  ];

  return (
    <div>
      <Questions questions={questionData} title={title} setTitle={setTitle} />
    </div>
  );
};

export default App;
*/
