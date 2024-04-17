import Image from "next/image";

import "@/styles/home/Home.scss";

type TProps = {
  author: string;
  name: string;
  type: string;
  description: string;
  link: string;
};

export default function Work(props: TProps) {
  return (
    <>
      <div className="work-outer bg-slate-50 w-[100dvw] h-[100dvh] relative overflow-hidden">
        <div
          className={`work-picture bg-slate-50 w-full h-full`}
          style={{ backgroundImage: `url(${props.link})` }}
        />
        <div className="work-info absolute top-24 left-1/2 -translate-x-1/2 text-white text-center h-[calc(100dvh-8rem)] w-[calc(100dvw-12rem)] backdrop-blur-md bg-white/30 px-8 py-4 rounded-xl max-[800px]:w-[calc(100dvw-4rem)]">
          <div className="wrapper w-full h-full flex gap-8 items-center max-[800px]:flex-col max-[800px]:justify-center ">
            <div
              className="work-display flex flex-col items-center justify-center"
              style={{ flex: 1 }}
            >
              <img
                src={props.link}
                alt=""
                className="max-h-[calc(100dvh-12rem)] rounded-xl"
              />
            </div>
            <div className="work-information flex-1 flex flex-col items-start max-[800px]:items-center text-start max-[800px]:text-center">
              <div className="author text-lg text-slate-300">
                {props.author}
              </div>
              <div className="name text-3xl text-blue-300 my-1 font-extrabold">
                {props.name}
              </div>
              <div className="type text-sm py-1 px-2 bg-slate-400/30 rounded-full text-slate-300 my-1">
                {props.type}
              </div>
              <div className="description py-2 px-1 text-start max-[800px]:text-center">
                {props.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
