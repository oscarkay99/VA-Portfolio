export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20minimalist%20home%20office%20workspace%20with%20soft%20natural%20light%20coming%20through%20large%20windows%2C%20clean%20white%20desk%2C%20neutral%20tones%2C%20warm%20beige%20walls%2C%20linen%20textures%2C%20a%20potted%20plant%2C%20a%20coffee%20cup%2C%20calm%20and%20professional%20atmosphere%2C%20editorial%20photography%20style&width=1600&height=900&seq=hero-va-001&orientation=landscape"
          alt="Professional workspace"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"></div>
      </div>

      {/* Content - bottom left aligned */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/50 text-white/80 text-xs tracking-widest uppercase mb-6"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-300 inline-block"></span>
          Virtual Assistant &amp; Operations Professional
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl text-white leading-[1.1] mb-6 max-w-2xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Detail-Driven.
          <br />
          <em>Quietly Powerful.</em>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/75 text-base md:text-lg max-w-md mb-10 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          I handle the systems, calendars, and communication that keep your business running — so you can focus on what you do best.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <button
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium bg-white text-neutral-900 cursor-pointer whitespace-nowrap hover:bg-neutral-100 transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Work With Me
            <i className="ri-arrow-right-up-line"></i>
          </button>
          <button
            onClick={() => handleScroll("#services")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border border-white/50 text-white cursor-pointer whitespace-nowrap hover:bg-white/10 transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            See What I Do
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-14 bg-white/30"></div>
        <span
          className="text-white/40 text-xs tracking-widest rotate-90 origin-center translate-y-6"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}