import Image from "next/image";
import Kusira from "./components/kusira";
import Gakki from "./components/gakki";
import Chrom from "./components/chrom";

export default function Home() {
  return (
    <div>
      Hello World
      Hello kushira!! by chrom
      <Kusira />
      <Gakki />
      <Chrom />
    </div>
  );
}
