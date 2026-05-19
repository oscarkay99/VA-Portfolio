export default function About() {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left - Image */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-500 text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About Me
            </div>
            <div className="relative w-full max-w-sm">
              <div className="w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
                <img
                  src="https://storage.readdy-site.link/project_files/ff2f8aaf-639e-4cdf-a4f5-12e4ecce0694/4788c7ea-5503-412c-aac0-84e23e6f8d8e_1729602535017.jpeg?v=4471074751c683bdec0ba9d7dff83617"
                  alt="Oscar Fafali Nyavor - Virtual Assistant"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating tag */}
              <div
                className="absolute -bottom-5 -right-4 bg-neutral-900 text-white rounded-2xl px-5 py-4 shadow-lg"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <div className="text-2xl font-semibold">4+</div>
                <div className="text-xs text-neutral-400 mt-0.5 whitespace-nowrap">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="w-full lg:w-[60%]">
            <h2
              className="text-4xl md:text-5xl text-neutral-900 leading-[1.15] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              The person behind
              <br />
              the smooth-running
              <br />
              <em>business</em>
            </h2>

            <p
              className="text-neutral-500 text-base leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Hi, I&apos;m Oscar — a detail-obsessed, proactive virtual assistant who thrives in the background making everything run better. I specialize in keeping inboxes tidy, calendars sane, and operations flowing without constant check-ins.
            </p>

            <p
              className="text-neutral-500 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Whether you&apos;re a solo founder overwhelmed by admin, or a growing team that needs tighter systems — I&apos;m the person you&apos;ve been looking for. I don&apos;t wait to be told every tiny thing. I notice what needs doing and I do it.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: "ri-checkbox-circle-line", text: "Proactive, not reactive" },
                { icon: "ri-search-eye-line", text: "Noticing details others miss" },
                { icon: "ri-message-3-line", text: "Warm, professional communication" },
                { icon: "ri-settings-3-line", text: "Systems thinker" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm text-neutral-600"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-50 text-rose-400 flex-shrink-0">
                    <i className={item.icon}></i>
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium bg-neutral-900 text-white cursor-pointer whitespace-nowrap hover:bg-neutral-700 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let&apos;s Connect
              <i className="ri-arrow-right-line text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}