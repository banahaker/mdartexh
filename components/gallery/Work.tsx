"use client";

import { useState, memo } from "react";

import "@/styles/home/Home.scss";

type TProps = {
  author: string;
  name: string;
  type: string;
  description: string;
  link: string;
};

const ShowImage = memo(function Image({ link }: { link: string }) {
  return (
    <img
      src={link}
      alt=""
      className="max-h-[calc((100svh-12rem)/1.5)] rounded-xl"
      loading="lazy"
    />
  );
});
export default function Work({
  author,
  name,
  type,
  description,
  link,
}: TProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://${window.location.hostname}/work/${link.replace("/images/", "")}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="work-outer bg-slate-50 w-[100dvw] h-[100svh] relative overflow-hidden">
      <div
        className={`work-picture bg-slate-50 w-full h-full`}
        style={{ backgroundImage: `url(${link})` }}
      />
      <div className="work-info absolute top-24 left-1/2 -translate-x-1/2 text-white text-center h-[calc(100svh-8rem)] w-[calc(100dvw-12rem)] backdrop-blur-md bg-white/30 px-8 py-4 rounded-xl max-[800px]:w-[calc(100dvw-4rem)]">
        <div className="wrapper w-full h-full flex gap-8 items-center max-[800px]:flex-col max-[800px]:justify-center">
          <div
            className="work-display flex flex-col items-center justify-center rounded-xl"
            style={{ flex: 1 }}
          >
            <ShowImage link={link}></ShowImage>
          </div>
          <div className="work-information flex-1 flex flex-col items-start text-start max-[800px]:items-center gap-1 w-full">
            <div className="author text-lg text-slate-300">{author}</div>
            <div className="name text-3xl text-blue-300 my-1 font-extrabold max-[800px]:text-center">
              {name}
            </div>
            <div className="type-wrapper flex gap-3">
              <div className="type text-sm py-1 px-2 bg-slate-400/30 rounded-full text-slate-200 my-1">
                {type}
              </div>
              <div
                className={`type text-sm py-1 px-2 bg-slate-900/80 rounded-full text-slate-300 my-1 cursor-pointer ${
                  copied ? "text-blue-300" : "text-slate-300"
                }`}
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Share"}
              </div>
            </div>
            <div className="description py-2 px-1 text-start max-[800px]:text-center">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
