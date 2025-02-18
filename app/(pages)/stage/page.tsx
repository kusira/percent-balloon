
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { isCryptoKey } from "util/types";
import { useEffect, useState } from "react";
import React from "react";
import problem_dict from "@/app/components/questions";
import { useRouter } from "next/navigation";
import StageHome from "@/app/(pages)/stage/_stage-components/stage-home";

export default function Home() {
  


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
  let quizPtn = Array.from({length:problem_dict.length-1},(_,i) => i+1);
  quizPtn = shuffleArray(quizPtn);
  
  
  //ボタンを押したときの処理をまとめたもの
  

  return (
    <div>        
      {/* ヘッダー */}
      <Header />
      <div className="flex flex-col min-h-screen bg-[#e8f2f7]">
        {/* メインコンテンツ */}
        <div className="mx-[20%] mt-8 text-black">
            {/* server components にするために分離 */}
            <StageHome quizPtn={quizPtn}/>
            {/* <p>問題{quizNum}</p>
            <div className="border-black border-2">
            
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
              onClick={() => {balloonCalc();  nextQuiz();}}
              >
              決定
              </button>
            </div> */}
        </div>
      </div>
      {/* フッター */}
      <Footer />
    </div>
    
  );
}