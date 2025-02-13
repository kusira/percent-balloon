"use client"
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { isCryptoKey } from "util/types";
import { useState } from "react";
import React from "react";
import problem_dict from "@/app/components/questions";

interface Problem {
  id: number;
  question: string;
  answer: number;
}

const problems: Problem[] = problem_dict;

export default function Home({ onNextQuiz }: { onNextQuiz: (data: { id: number; question: string; value: number }) => void }) {
  
  const [value, setValue] = useState<number>(50);

  //配列シャッフル関数
  const shuffleArray = (array:any) => {
    const cloneArray = [...array]
    for (let i = cloneArray.length - 1; i>=0; i--){
      let rand = Math.floor(Math.random()*(i+1));//配列を並び替える
      let tmpStorage=cloneArray[i]
      cloneArray[i]=cloneArray[rand]
      cloneArray[rand] = tmpStorage
    }
    return cloneArray
  }
  //問題順序生成、シャッフル実行、出題数のカウント
  let quizptn = Array.from({length:problem_dict.length},(_,i) => i+1);
  quizptn = shuffleArray(quizptn);
  const [quizNum, setQuizNum] = useState<number>(1);

  const nextQuiz = () => {
    if (quizNum < 5) {
      const currentProblem = problems[quizNum]; // 現在の問題を取得
      onNextQuiz({ id: currentProblem.id, question: currentProblem.question, value }); // 親にデータを渡す
      setQuizNum(quizNum + 1);
    }

  };
  
  
  return (
    <div>        
      {/* ヘッダー */}
      <Header />
      <div className="flex flex-col min-h-screen bg-[#e8f2f7]">
        {/* メインコンテンツ */}
        <div className="mx-[20%] mt-8 text-black">
            {/* 画面を表示 */}
            <div className="border-black border-2">
                fuga
            </div>
            {/* 問題文 */}
            <p>問題!</p>
            <ul>
                {(() => {
                  const problem = problems[quizNum];
                    return (
                    <li key={problem.id}>
                      {problem.question}
                      (答え: {problem.answer}%)
                    </li>
                    );
                })()}
              </ul>
            {/* 解答欄 */}
            <div className="flex my-2">
             <input type="range"
                id="range"
                className="m-1 h-8 cursor-pointer w-3/4 y-3 block"
                min="0" max="100"
                onChange={(e) => setValue(Number(e.target.value))}
                value={value}
              />
              <div className="">{value}</div>
              <button 
              className="inline-block ml-8 text-white px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
              onClick={nextQuiz}
              >
              決定
              </button>
              <p>{quizNum}</p>
            </div>
        </div>
      </div>
      {/* フッター */}
      <Footer />
    </div>
    
  );
}