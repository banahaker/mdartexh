import Work from "@/components/gallery/Work";

import "@/styles/home/Home.scss";

export default function Home() {
  return (
    <>
      <div className="backgroundFilter h-[100dvh] bg-[url('/images/sample_picture.jpg')] bg-center bg-cover flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl font-bold text-white">你好，世界</h1>
        <h2 className="text-2xl text-gray-300 font-medium">
          明道中學高中美展 7th
        </h2>
      </div>
      <Work></Work>
    </>
  );
}
