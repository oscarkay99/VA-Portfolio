const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 pb-6">
      <div
        className="rounded-3xl px-8 md:px-14 py-12 overflow-hidden relative"
        style={{ background: "#1a1a1a" }}
      >
        {/* Big name watermark */}
        <div
          className="absolute bottom-0 left-0 right-0 text-center select-none pointer-events-none overflow-hidden leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(60px, 12vw, 140px)",
            color: "rgba(255,255,255,0.04)",
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 0.9,
          }}
        >
          Oscar Fafali Nyavor
        </div>

        {/* Top row */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">

          {/* Column 1 - Brand */}
          <div className="md:w-[28%]">
            <div
              className="text-white text-2xl mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Oscar Fafali Nyavor
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Virtual Assistant &amp; Operations Professional. Available for remote work worldwide.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <div
              className="text-white/60 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <div
              className="text-white/60 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Connect
            </div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-linkedin-line text-white/40 text-sm"></i>
                </div>
                <a
                  href="https://www.linkedin.com/in/oscar-nyavor-733118172/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-white/40 text-sm"></i>
                </div>
                <a
                  href="mailto:oscarnyavor99@gmail.com"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  oscarnyavor99@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Availability */}
          <div className="md:w-[26%]">
            <div
              className="text-white/60 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Availability
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse"></span>
              <span
                className="text-emerald-400 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Open to new clients
              </span>
            </div>
            <p
              className="text-white/40 text-xs leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Currently accepting 1–2 new clients. Response time within 24 hours.
            </p>
            <button
              onClick={() => handleNav("#contact")}
              className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-white text-neutral-900 cursor-pointer whitespace-nowrap hover:bg-neutral-100 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Start a conversation
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/10">
          <span
            className="text-white/25 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            &copy; 2026 Oscar Fafali Nyavor. All rights reserved.
          </span>
          <span
            className="text-white/25 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Virtual Assistant &middot; Operations &middot; Remote Work
          </span>
        </div>
      </div>
    </footer>
  );
}