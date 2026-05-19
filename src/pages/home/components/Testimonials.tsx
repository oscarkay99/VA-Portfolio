import { useState } from "react";

const testimonials = [
  {
    quote:
      "Oscar is the best hire I&apos;ve made in years. He figured out how I work within the first week and started anticipating my needs before I even had to ask. My inbox is finally under control.",
    name: "Sarah M.",
    role: "Founder, The Brand Studio",
  },
  {
    quote:
      "I was drowning in admin tasks and couldn&apos;t focus on growing my business. Two weeks after bringing Oscar on, my calendar made sense again and I had actual breathing room. Highly recommend.",
    name: "James T.",
    role: "CEO, Drift &amp; Co.",
  },
  {
    quote:
      "What sets Oscar apart is that he never needs hand-holding. He notices gaps, proposes solutions, and executes — all while keeping me in the loop without overwhelming me with updates.",
    name: "Priya K.",
    role: "Operations Lead, NovaSpark",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="w-full bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Label */}
        <div className="flex justify-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-500 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Client Stories
          </div>
        </div>

        {/* Big card */}
        <div className="bg-neutral-900 rounded-3xl overflow-hidden">
          <div className="p-10 md:p-16 flex flex-col">

            {/* Quote mark */}
            <div
              className="text-8xl leading-none text-rose-300/30 mb-6 select-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <p
              className="text-white text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl transition-all duration-300"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              dangerouslySetInnerHTML={{ __html: t.quote }}
            ></p>

            {/* Author + dots row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Initials avatar */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-sm font-medium flex-shrink-0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="text-white font-medium text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-white/40 text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: t.role }}
                  ></div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      i === active ? "w-6 h-2 bg-rose-300" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-100 pt-14">
          {[
            { value: "50+", label: "Clients supported" },
            { value: "4.9★", label: "Average rating" },
            { value: "100%", label: "Remote & async" },
            { value: "4yr+", label: "In operations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-semibold text-neutral-900 mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-neutral-400 text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}