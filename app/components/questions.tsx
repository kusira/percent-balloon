"use client";
import { useState } from "react";
import Home from "@/app/(pages)/stage/page";

const problem_dict = [
  { id: 0, question: "たけのこ派の比率", answer: 60 },
  { id: 1, question: "スマホのスクリーンタイムが8時間以上の人の比率", answer: 30 },
  { id: 2, question: "きのこ派の比率", answer: 60 },
  { id: 3, question: "スマホのスクリーンタイムが1時間以上の人の比率", answer: 30 },
  { id: 4, question: "山派の比率", answer: 60 },
  { id: 5, question: "スマホのスクリーンタイムが2時間以上の人の比率", answer: 30 },
];

export { problem_dict };

export default function ParentComponent() {
  const [problemLog, setProblemLog] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      num_of_question: i + 1,
      id: null as number | null,
      user_ans: null as number | null,
      ans_diff: null as number |  null,
    }))
  );

  const handleNextQuiz = (data: { id: number; question: string; value: number }) => {
    const correctAnswer = problem_dict.find((p) => p.id === data.id)?.answer ?? 0;
    const answerDiff = Math.abs(correctAnswer - data.value);

    setProblemLog((prevLog) =>
      prevLog.map((log, index) =>
        index === data.id
          ? { ...log, id: data.id, user_ans: data.value, ans_diff: answerDiff }
          : log
      )
    );

    console.log("記録されたデータ:", problemLog);
  };

  return <Home onNextQuiz={handleNextQuiz} />;
}
