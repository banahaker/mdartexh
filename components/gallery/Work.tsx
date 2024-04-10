import "@/styles/home/Home.scss";

export default function Work() {
  return (
    <>
      <div className="work-outer bg-slate-50 w-[100dvw] h-[100dvh] relative overflow-hidden">
        <div className="work-picture bg-slate-50 bg-[url('/images/sample_picture_2.jpg')] w-full h-full"></div>
        <div className="work-info backdrop-blur-sm bg-white/10 px-8 py-4 text-white rounded-3xl absolute bottom-6 left-1/2 -translate-x-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero,
          autem nesciunt tempora nostrum enim repellat, dolore porro
          necessitatibus culpa earum architecto amet, dolorum a voluptate
          exercitationem numquam et illo!
        </div>
      </div>
    </>
  );
}
