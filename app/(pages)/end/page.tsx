import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#e8f2f7] flex flex-col items-center justify-center">
        {/* ヘッダー */}
        <Header />

        {/* メインコンテンツ */}
        <main className="mt-8 px-8 text-center">
          {/* msg */}
          <h2 className="text-5xl font-bold mb-4">Congratulations!!</h2>

          {/* game-end-link */}
          <a
            href="./"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
          Exit
          </a>

        </main>

        {/* フッター */}
        <Footer />
      </div>
    </div>
    
  );
}