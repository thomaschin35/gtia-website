import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "ABOUT", href: "/about#who-we-are" },
  { name: "EVENTS", href: "/events" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4 sm:px-8">
      <nav className="mx-auto flex max-w-[1376px] items-center justify-between rounded-pill border border-line bg-white/90 py-3.5 pl-7 pr-5 shadow-[0_12px_32px_#01324B1F] backdrop-blur-md">
        <Link to="/#hero" className="flex items-center gap-3 no-underline" aria-label="GTIA home">
          <span className="flex size-[40px] shrink-0 items-center justify-center">
            <img src="/assets/images/gtia-gold-logo.png" alt="GTIA Logo" className="w-full h-full object-contain" />
          </span>
          <span className="font-sans text-[24px] font-bold leading-[30px] tracking-[0.04em] text-ink">
            GTIA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-sans text-[15px] font-semibold leading-[18px] tracking-[0.06em] no-underline transition-opacity hover:opacity-70 ${
                pathname === item.href ? "text-gold" : "text-ink"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/join"
            className="rounded-pill bg-ink px-[26px] py-[11px] font-sans text-[15px] font-semibold leading-[18px] tracking-[0.06em] text-white no-underline transition-transform hover:scale-[1.03]"
          >
            JOIN US
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="flex size-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-auto mt-3 max-w-[1376px] rounded-[28px] border border-line bg-white/95 p-4 shadow-[0_12px_32px_#01324B1F] backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-sans text-[15px] font-semibold tracking-[0.06em] text-ink no-underline hover:bg-blue-25"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-pill bg-ink px-4 py-3 text-center font-sans text-[15px] font-semibold tracking-[0.06em] text-white no-underline"
            >
              JOIN US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
