import "@/styles/home/Home.scss";

export default function Work() {
  return (
    <>
      <div className="work-outer bg-slate-50 w-[100dvw] h-[100dvh] relative overflow-hidden">
        <div className="work-picture bg-slate-50 bg-[url('/images/sample_work.jpeg')] w-full h-full"></div>
        <div className="work-info backdrop-blur-sm bg-white/20 px-8 py-4 text-white rounded-3xl absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="author-name">陳凱恩</div>
          <div className="work-name">The Deathly Hallows </div>
          <div className="category">紙雕燈</div>
          <div className="description">
            此件作品以電影Harry Potter中所提及的「死神的聖物」作為發想。
          </div>
        </div>
      </div>
    </>
  );
}
