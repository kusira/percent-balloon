import Header from "@/app/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#e8f2f7] flex flex-col min-h-screen">
        {/* ヘッダー */}
        <Header/>

        {/* メインコンテンツ */}
        <main className="flex-grow mt-8 px-8 text-center">
          {/* msg */}
          <h2 className="text-5xl font-bold mb-4 text-black">Congratulations!!!</h2>

          {/* game-end-link */}
            <a
            href="./"
            className="inline-block bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 mt-4"
            >
            Exit
            </a>
        </main>

        {/* フッター */}
        <footer className="w-full text-center text-gray-600 border-t">
          <hr className="border-gray-500"></hr>
          <p className="py-3">
             © 2024 PiedPiper-奪還鯖缶. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
    
  );
}