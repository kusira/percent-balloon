import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

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
        </div>
      </div>
      {/* フッター */}
      <Footer />
    </div>
    
  );
}