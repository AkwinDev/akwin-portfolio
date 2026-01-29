import PageWrapper from "@/components/pageWrapper";

export default function Experience() {
  const experiences = [
    {
      company: "Sporfy Technologies Pvt. Ltd.",
      role: "Software Development Engineer",
      duration: "Feb 2024 – Dec 2025",
      details: [
        "Developed responsive UI components for TicketPrix and Sporfy platforms.",
        "Migrated ThiramSports from Nuxt.js to Next.js to enhance scalability.",
        "Implemented dark/light themes, API integrations, and performance optimizations.",
      ],
    },
    {
      company: "Internship (Sporfy Technologies)",
      role: "Full Stack Intern",
      duration: "Nov 2023 – Jan 2024",
      details: [
        "Built and refined small web apps using React and Node.js.",
        "Collaborated in agile teams on UI, backend APIs, and bug fixes.",
      ],
    },
  ];

  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-blue-600 mb-10">
          Work Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm shadow-md border rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-neutral-600 mb-1">{exp.company}</p>
              <p className="text-sm text-neutral-500 mb-4">{exp.duration}</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                {exp.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
