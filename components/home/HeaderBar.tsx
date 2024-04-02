import { HeaderMenuLinks } from "@/data/HeaderMenuLinks";

export default function HeaderBar() {
  return (
    <div className="header fixed w-[80dvw] top-[1rem] left-[50%] translate-x-[-50%] flex flex-row justify-between z-[9999] backdrop-blur-md bg-white/30 px-8 py-4 text-white rounded-full border border-white">
      <div className="logo">MDARTEXH</div>
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
