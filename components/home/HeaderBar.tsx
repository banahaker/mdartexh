import { HeaderMenuLinks } from "@/data/HeaderMenuLinks";

export default function HeaderBar() {
  return (
    <div className="header fixed w-full flex flex-row justify-between z-[9999] bg-black opacity-60 px-6 py-3 text-white">
      <div className="logo">MDARTEXH</div>
      <div className="menu flex flex-row gap-3">
        {HeaderMenuLinks.map((link, index) => {
          return (
            <div className="menu-item" key={index}>
              <a
                className="hover:text-cyan-500 transition uppercase"
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
