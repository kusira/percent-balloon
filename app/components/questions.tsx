
const problem_dict = [
  {
    id: 0,
    question: "牛丼チェーンの売上のうちすき家は何％？",
    answer: 56      
  },
  {
    id: 1,
    question: "大学への進学率は何％？",
    answer: 55
  },
  {
    id: 2,
    question: "日本の車におけるトヨタのシェアは何％？",
    answer: 30
  },
  {
    id: 3,
    question: "高校生のうち私立高校に通っているのは何％？",
    answer: 30
  },
  {
    id: 4,
    question: "りんごの生産量のうち青森県産のものは何％？",
    answer: 61
  },
  {
    id: 5,
    question: "据え置き型ゲーム機の所有率は何％？",
    answer: 57
  },
  {
    id: 6,
    question: "日本の喫煙率は何％？",
    answer: 17
  },
  {
    id: 7,
    question: "家でずっと寝るときの服を着ている人は何％？",
    answer: 36
  },
  {
    id: 8,
    question: "サンマの漁獲量のうち北海道産のものは何％？",
    answer: 45
  },
  {
    id: 9,
    question: "パスポートを持っている人は何％？",
    answer: 19
  },
  {
    id: 10,
    question: "花粉症の人は何％？",
    answer: 43
  },
  {
    id: 11,
    question: "現役医師のうち女性の占める割合は何％？",
    answer: 17
  },
  {
    id: 12,
    question: "都市ガスを引いている家は何％？",
    answer: 45
  },
  {
    id: 13,
    question: "海外への渡航経験のある高校生は何％？",
    answer: 34
  },
  {
    id: 14,
    question: "iPhoneの国内シェアは何％？",
    answer: 44
  },
  {
    id: 15,
    question: "交通系ICカードの所持率は何％？",
    answer: 46
  },
  {
    id: 16,
    question: "コメの生産量のうちコシヒカリの割合は何％？",
    answer: 30
  },
  {
    id: 17,
    question: "職務質問をされたことのある人は何％？",
    answer: 28
  },
  {
    id: 18,
    question: "インスタのアカウントを複数持っている10代女性は何％？",
    answer: 45
  },
  {
    id: 19,
    question: "非正規雇用で働いている人は何％？",
    answer: 38
  },
  {
    id: 20,
    question: "乗用車の世帯保有率は何％？",
    answer: 78
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
