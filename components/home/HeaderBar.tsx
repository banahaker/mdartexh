import { HeaderMenuLinks } from "@/data/HeaderMenuLinks";

export default function HeaderBar() {
  return (
    <div className="header flex flex-row justify-between z-[9999] bg-slate-50 opacity-80 p-3">
      <div className="logo">MDARTEXH</div>
      <div className="menu flex flex-row gap-2">
        {HeaderMenuLinks.map((link, index) => {
          return (
            <div className="menu-item" key={index}>
              <a href={link.href}>{link.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
