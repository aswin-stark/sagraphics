import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center">
      <div
        className="w-[95%] max-w-7xl px-6 py-3 flex items-center justify-between rounded-full
        bg-black/60 backdrop-blur-md border border-white/10 shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            SAG
          </div>

          <div className="leading-tight">
            <h1 className="text-white font-semibold text-sm">
                <span className="text-orange-400 font-semibold text-sm tracking-wide">SHRI ABIRAMI
              
            </span> GRAPHICS
            
            <p className="text-orange-400 text-xs tracking-wide">
              
            </p>
            </h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <button
            onClick={() => handleScroll("hero")}
            className="hover:text-white transition"
          >
            Home
          </button>

          <button
            onClick={() => handleScroll("services")}
            className="hover:text-white transition"
          >
            Services
          </button>

          <button
            onClick={() => handleScroll("about")}
            className="hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-white transition"
          >
            Contact Us
          </button>
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => handleScroll("faq")}
            className="hidden md:block px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
          >
            FAQ
          </button> */}

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-[88px] w-[95%] max-w-7xl rounded-2xl
          bg-black/80 backdrop-blur-md border border-white/10 shadow-lg md:hidden"
        >
          <nav className="flex flex-col items-center gap-5 py-6 text-gray-300 text-sm">
            <button onClick={() => handleScroll("hero")}>
              Home
            </button>

            {/* FIXED */}
            <button onClick={() => handleScroll("services")}>
              Services
            </button>

            <button onClick={() => handleScroll("about")}>
              About
            </button>

            <button onClick={() => handleScroll("contact")}>
              Contact Us
            </button>

            <button
              onClick={() => handleScroll("faq")}
              className="mt-2 px-6 py-2 rounded-full bg-orange-500 text-white font-medium"
            >
              FAQ
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}