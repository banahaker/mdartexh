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
      <Work
        author="陳凱恩"
        name="The Deathly Hallows "
        type="紙雕燈"
        description="此件作品以電影Harry Potter中所提及的「死神的聖物」作為發想。"
        link="/images/sample_work.jpeg"
      ></Work>
    </>
  );
}
