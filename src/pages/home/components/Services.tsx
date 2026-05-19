const services = [
  {
    icon: "ri-calendar-check-line",
    title: "Calendar & Schedule Management",
    description:
      "I manage your calendar end-to-end — booking, rescheduling, reminders, and protecting your focus time so you never feel double-booked or unprepared.",
    tags: ["Google Calendar", "Calendly", "Scheduling"],
  },
  {
    icon: "ri-mail-check-line",
    title: "Email Management & Follow-Up",
    description:
      "Inbox zero is real. I organize, prioritize, draft replies, and make sure important follow-ups never fall through the cracks.",
    tags: ["Gmail", "Outlook", "Follow-ups"],
  },
  {
    icon: "ri-table-2",
    title: "Spreadsheets & Data Entry",
    description:
      "From building trackers to keeping CRM records clean and up-to-date — I love a good spreadsheet and I make data actually useful.",
    tags: ["Google Sheets", "Excel", "CRMs"],
  },
  {
    icon: "ri-customer-service-2-line",
    title: "CRM & Client Management",
    description:
      "Keeping your client relationships organized — contact records, pipeline updates, note-taking after calls, and follow-up sequences.",
    tags: ["HubSpot", "Notion", "Airtable"],
  },
  {
    icon: "ri-robot-2-line",
    title: "Automations & Tech Tools",
    description:
      "I connect your tools so they talk to each other. Zapier workflows, automated reminders, and smoother processes that save you hours every week.",
    tags: ["Zapier", "Make", "Workflows"],
  },
  {
    icon: "ri-bar-chart-line",
    title: "Marketing & Data Tracking",
    description:
      "Supporting content scheduling, tracking campaign performance, pulling reports, and making sense of the numbers so you can make better decisions.",
    tags: ["Analytics", "Reporting", "Content"],
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 md:py-32" style={{ background: "#faf9f7" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-500 text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Services
            </div>
            <h2
              className="text-4xl md:text-5xl text-neutral-900 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              What I take
              <br />
              off your plate
            </h2>
          </div>
          <p
            className="text-neutral-500 text-sm leading-relaxed max-w-xs md:text-right"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From day-to-day admin to process improvements — I adapt to what you actually need.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-7 group hover:-translate-y-1 transition-transform duration-300 cursor-default"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-rose-50 text-rose-400 mb-5 text-lg group-hover:bg-rose-100 transition-colors duration-200">
                <i className={s.icon}></i>
              </div>
              <h3
                className="text-neutral-900 text-base font-semibold mb-3 leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.title}
              </h3>
              <p
                className="text-neutral-500 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-500"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}