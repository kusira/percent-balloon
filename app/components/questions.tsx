
const problem_dict = [
  {
      id: 0,
      question: "たけのこ派の比率",
      answer: 60
  },
  {
      id: 1,
      question: "スマホのスクリーンタイムが8時間以上の人の比率",
      answer: 30
  }
]

const probrem_log = [
  {
      num_of_question: 1,
      id: null,
      user_ans: null,
      ans_diff: null,
  },
  {
      num_of_question: 2,
      id: null,
      user_ans: null,
      ans_diff: null,
  },
  {
      num_of_question: 3,
      id: null,
      user_ans: null,
      ans_diff: null,
  },
  {
      num_of_question: 4,
      id: null,
      user_ans: null,
      ans_diff: null,
  },
  {
      num_of_question: 5,
      id: null,
      user_ans: null,
      ans_diff: null,
  },
]

export default problem_dict; probrem_log;

/*
import React, { useState } from "react";
import Questions from "./Questions";

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
