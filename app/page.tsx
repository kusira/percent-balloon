import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div>        
      {/* ヘッダー */}
      <Header />
      <div className="flex flex-col min-h-screen bg-[#e8f2f7]">
        {/* メインコンテンツ */}
        <main className="flex-grow flex flex-col items-center mt-10 text-center">
          {/* ようこそメッセージ */}
          <h2 className="text-3xl font-bold text-black mb-4">ようこそ！</h2>

          {/* 説明文 */}
          <p className="text-lg text-gray-700 mb-8">
            これはパーセントバルーンをhogehoge...(説明)
          </p>

          {/* ゲームスタートリンク */}
          <a
            href="/stage"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
          ゲームスタート
          </a>
        </main>
      </div>
      {/* フッター */}
      <Footer />
    </div>
    
  );
}