import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new URLSearchParams();
    const elements = form.elements as HTMLFormControlsCollection;
    (Array.from(elements) as HTMLInputElement[]).forEach((el) => {
      if (el.name) data.append(el.name, el.value);
    });

    try {
      await fetch("https://readdy.ai/api/form/d863tfa1csuacpqtd9p0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full relative py-0 overflow-hidden">
      {/* Background image CTA block */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=warm%20cozy%20home%20office%20desk%20flatlay%20with%20notebook%2C%20coffee%20cup%2C%20flowers%2C%20pen%2C%20soft%20morning%20light%2C%20cream%20and%20beige%20tones%2C%20minimal%20and%20elegant%2C%20editorial%20top%20down%20photography%20style&width=1600&height=500&seq=cta-bg-001&orientation=landscape"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-neutral-900/65"></div>
        <div className="relative z-10 text-center px-6">
          <h2
            className="text-4xl md:text-6xl text-white font-normal leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to get your time back?
          </h2>
          <p
            className="text-white/70 text-sm md:text-base max-w-md mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let&apos;s talk about what you need — no pressure, just a friendly conversation.
          </p>
        </div>
      </div>

      {/* Form area */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10">

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-rose-50 text-rose-400 text-2xl mx-auto mb-4">
                <i className="ri-check-line"></i>
              </div>
              <h3
                className="text-2xl text-neutral-900 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Message sent!
              </h3>
              <p
                className="text-neutral-500 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              data-readdy-form
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div
                className="text-center mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <p className="text-neutral-400 text-sm">Fill in a few details and I&apos;ll be in touch soon.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label
                    className="text-xs text-neutral-500 tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    htmlFor="full_name"
                  >
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 outline-none focus:border-neutral-400 transition-colors bg-neutral-50"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label
                    className="text-xs text-neutral-500 tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@yourcompany.com"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 outline-none focus:border-neutral-400 transition-colors bg-neutral-50"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs text-neutral-500 tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  htmlFor="business_name"
                >
                  Business / Company Name
                </label>
                <input
                  id="business_name"
                  name="business_name"
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 outline-none focus:border-neutral-400 transition-colors bg-neutral-50"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs text-neutral-500 tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  htmlFor="message"
                >
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  placeholder="Tell me a bit about your situation and what you&apos;re looking for..."
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 outline-none focus:border-neutral-400 transition-colors resize-none bg-neutral-50"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-medium bg-neutral-900 text-white cursor-pointer whitespace-nowrap hover:bg-neutral-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {loading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-base"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-send-plane-line text-base"></i>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social links */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/in/oscar-nyavor-733118172/"
              target="_blank"
              rel="nofollow noreferrer"
              title="LinkedIn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-all duration-200 cursor-pointer text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <i className="ri-linkedin-line text-base"></i>
              LinkedIn
            </a>
            <a
              href="mailto:oscarnyavor99@gmail.com"
              title="Email"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-all duration-200 cursor-pointer text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <i className="ri-mail-line text-base"></i>
              oscarnyavor99@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}