import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-lg font-semibold tracking-wide cursor-pointer whitespace-nowrap"
          style={{ color: scrolled ? "#1a1a1a" : "#fff", fontFamily: "'Cormorant Garamond', serif" }}
        >
          Oscar Fafali Nyavor
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`text-sm tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap hover:opacity-70 ${
                scrolled ? "text-neutral-700" : "text-white"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105"
          style={{
            background: scrolled ? "#1a1a1a" : "rgba(255,255,255,0.15)",
            color: "#fff",
            border: scrolled ? "none" : "1px solid rgba(255,255,255,0.5)",
            fontFamily: "'DM Sans', sans-serif",
            backdropFilter: "blur(4px)",
          }}
        >
          Hire Me
          <i className="ri-arrow-right-line text-xs"></i>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"} ${scrolled ? "text-neutral-800" : "text-white"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left text-neutral-700 text-sm tracking-wide py-1 cursor-pointer whitespace-nowrap hover:text-neutral-900"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap bg-neutral-900 text-white mt-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hire Me <i className="ri-arrow-right-line text-xs"></i>
          </a>
        </div>
      )}
    </header>
  );
}