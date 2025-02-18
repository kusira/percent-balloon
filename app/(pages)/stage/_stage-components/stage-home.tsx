"use client"
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { isCryptoKey } from "util/types";
import { useEffect, useState } from "react";
import React from "react";
import problem_dict from "@/app/components/questions";
import { useRouter } from "next/navigation";
import Showballoon from "@/app/components/showballoon";

export default function StageHome({ quizPtn }: {
  quizPtn: number[]
}): React.JSX.Element {

  const [value, setValue] = useState<number>(50);
  const [balloonNum, setBalloonNum] = useState<number>(100);




  //console.log(quizptn)
  const [quizNum, setQuizNum] = useState<number>(1);

  const nextQuiz = () => {
    if (quizNum < 5) {
      const currentProblem = problem_dict[quizPtn[quizNum]]; // 現在の問題を取得
      setQuizNum(quizNum + 1);
    } else {
      router.push("/end")
    }
  };

  //風船の管理
  useEffect(() => {
    console.log(balloonNum);
  }, [balloonNum]);

  //風船の計算
  const balloonCalc = () => {
    const problem = problem_dict[quizPtn[quizNum]]
    setBalloonNum(prev => prev - Math.abs(problem.answer - value));
  };

  //ゲームオーバーのチェック
  const router = useRouter();
  useEffect(() => {
    if (balloonNum <= 0) {
      router.push("/retry")
    }
  }, [balloonNum, router])


  //ボタンを押したときの処理をまとめたもの


  return (
    <>
      {/* 画面を表示 */}
      <Showballoon balloonNum={balloonNum}/>
      <p>問題{quizNum}</p>
      <div className="border-black border-2">
        {/* 問題文 */}
        <ul>
          {(() => {
            const problem = problem_dict[quizPtn[quizNum]];
            return (
              <li key={problem.id}>
                {problem.question}
                (答え: {problem.answer}%)
              </li>
            );
          })()}
        </ul>
      </div>

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
          onClick={() => { balloonCalc(); nextQuiz(); }}
        >
          決定
        </button>
      </div>
    </>

  );
}