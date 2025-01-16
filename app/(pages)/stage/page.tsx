"use client"
import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { isCryptoKey } from "util/types";
import { useState } from "react";

export default function Home() {
  
  const [value, setValue] = useState<number>(50);

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
              <button className="inline-block ml-8 text-white px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                決定
              </button>
            </div>
            
            hoge
        </div>
      </div>
      {/* フッター */}
      <Footer />
    </div>
    
  );
}