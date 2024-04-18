import Link from "next/link";

import { HeaderMenuLinks } from "@/data/HeaderMenuLinks";

export default function HeaderBar() {
  return (
    <div className="header fixed w-[80dvw] max-w-[1024px] top-[1rem] left-1/2 -translate-x-1/2 flex flex-row justify-between z-[9999] backdrop-blur-md bg-white/30 px-8 py-4 text-white rounded-full border border-white">
      <div className="logo cursor-pointer">
        <Link href="/">MDARTEXH</Link>
      </div>
      <div className="menu flex flex-row gap-3">
        {HeaderMenuLinks.map((link, index) => {
          return (
            <div className="menu-item" key={index}>
              <a
                className="hover:text-cyan-900 transition uppercase"
                href={link.href}
              >
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
