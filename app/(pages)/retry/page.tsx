import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-8 px-8 text-center">
        <h2 className="text-5xl font-bold text-black mb-4">Never give up!!</h2>
        <a
            href="./"
            className="inline-block bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 mt-4"
            >
            Exit
        </a>
      </main>
      <Footer />
    </div>
  );
}
