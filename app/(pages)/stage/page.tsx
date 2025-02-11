import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import problem_dict from "@/app/components/questions";

export default function Home() {
  return (
    <div>        
      {/* ヘッダー */}
      <Header />
      <div className="flex flex-col min-h-screen bg-[#e8f2f7]">
        {/* メインコンテンツ */}
        <div className="mx-[20%] mt-8">
            {/* 画面を表示 */}
            <div className="border-black border-2">
                fuga
            </div>
            hoge
            {/* 問題を表示 */}
            <div>
              <p>問題</p>
              <ul>
                {(() => {
                  const randomIndex = Math.floor(Math.random() * problem_dict.length);
                  const problem = problem_dict[randomIndex];
                    return (
                    <li key={problem.id}>
                      {problem.question}
                      (答え: {problem.answer}%)
                    </li>
                    );
                })()}
                <input type="text" placeholder="答えを入力(%)" className="ml-2 border rounded p-1" />
              </ul>
            </div>
        </div>
        
      </div>
      {/* フッター */}
      <Footer />
    </div>
    
  );
}