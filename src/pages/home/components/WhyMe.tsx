const traits = [
  {
    number: "01",
    icon: "ri-heart-line",
    title: "Loves Organization",
    desc: "Not just tolerating structure — genuinely thriving in it. Clean systems, clear processes, and nothing falling through the cracks.",
  },
  {
    number: "02",
    icon: "ri-eye-line",
    title: "Notices What Others Miss",
    desc: "The misplaced decimal. The missing follow-up. The calendar conflict nobody caught. Precision is a default, not an effort.",
  },
  {
    number: "03",
    icon: "ri-settings-3-line",
    title: "Makes Systems Smoother",
    desc: "Spots friction before it becomes a problem — then quietly fixes it without being asked.",
  },
  {
    number: "04",
    icon: "ri-chat-smile-3-line",
    title: "Communicates Professionally & Warmly",
    desc: "Clear, appropriate, and always on-brand — whether it's a quick Slack message or a client-facing email.",
  },
  {
    number: "05",
    icon: "ri-flashlight-line",
    title: "Proactive by Nature",
    desc: "Anticipates what's needed next. Prepares before being told. Acts without waiting to be micromanaged.",
  },
  {
    number: "06",
    icon: "ri-bar-chart-grouped-line",
    title: "Marketing & Automations",
    desc: "Hands-on experience with data tracking, content scheduling, and automation tools that save time and scale results.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="w-full py-24 md:py-32" style={{ background: "#faf9f7" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-10 border-b border-neutral-200">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-500 text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What I Bring
            </div>
            <h2
              className="text-4xl md:text-5xl text-neutral-900 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Skills &amp; qualities
              <br />
              that set me apart
            </h2>
          </div>
          <p
            className="text-neutral-400 text-sm leading-relaxed max-w-xs md:text-right"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Every business is different. But these are the traits that make a real difference in every role I take on.
          </p>
        </div>

        {/* Trait rows */}
        <div className="flex flex-col divide-y divide-neutral-200">
          {traits.map((t) => (
            <div
              key={t.title}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 cursor-default"
            >
              {/* Number */}
              <span
                className="text-xs text-neutral-300 tracking-widest w-8 flex-shrink-0"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {t.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-400 flex-shrink-0 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                <i className={`${t.icon} text-base`}></i>
              </div>

              {/* Title */}
              <h3
                className="text-neutral-900 font-medium text-base sm:w-[260px] flex-shrink-0 group-hover:text-neutral-600 transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {t.title}
              </h3>

              {/* Divider line */}
              <div className="hidden sm:block flex-1 h-px bg-neutral-200 group-hover:bg-neutral-300 transition-colors duration-200"></div>

              {/* Desc */}
              <p
                className="text-neutral-400 text-sm leading-relaxed sm:w-[340px] flex-shrink-0"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-neutral-200">
          <p
            className="text-neutral-500 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to bring these skills to your business?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium bg-neutral-900 text-white cursor-pointer whitespace-nowrap hover:bg-neutral-700 transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Work With Me
            <i className="ri-arrow-right-line text-xs"></i>
          </button>
        </div>
      </div>
    </section>
  );
}