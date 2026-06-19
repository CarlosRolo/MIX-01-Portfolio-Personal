const jobs = [
  {
    title: "Junior Infrastructure & Automation Engineer",
    company: "Andorasoft S.A.S.",
    location: "Riobamba, Ecuador · Híbrido / Freelance",
    period: "Mar 2025 – Present",
    color: "border-blue-700/40",
    badge: "text-blue-400",
    bullets: [
      "Deploy and manage containerized applications with Docker and Docker Compose in production.",
      "Configure reverse proxies (Traefik / Nginx) for secure routing, domain management, and TLS termination.",
      "Administer Linux servers (Ubuntu/Debian): hardening, user management, firewall, cron jobs, and security updates.",
      "Implement secure connectivity with VPN (site-to-site and remote access) for infrastructure protection.",
      "Develop automations with n8n integrating REST APIs and external services, eliminating manual tasks.",
      "Continuous monitoring, troubleshooting, and incident resolution for production services.",
    ],
  },
  {
    title: "Técnico Auxiliar en Laboratorio",
    company: "Facultad de Informática y Electrónica — ESPOCH",
    location: "Riobamba · Presencial",
    period: "Sep 2025 – Mar 2026 · 7 months",
    color: "border-gray-700/40",
    badge: "text-gray-400",
    bullets: [
      "Technical support and preventive maintenance for computing and networking lab equipment.",
      "Incident resolution and technical assistance to students and faculty in IT and networking systems.",
    ],
  },
  {
    title: "Técnico Auxiliar de Telecomunicaciones",
    company: "Mundotronic-ECU S.A.",
    location: "Ecuador · Presencial",
    period: "Dec 2024 – Mar 2025 · 4 months",
    color: "border-gray-700/40",
    badge: "text-gray-400",
    bullets: [
      "Installation and cabling (UTP/Fiber Optic) ensuring network and telecom equipment operability.",
      "Field support to users, diagnosing hardware and system incidents on-site.",
    ],
  },
  {
    title: "Técnico de Soporte IT",
    company: "Departamento de Tecnologías de la Información — ESPOCH",
    location: "Riobamba · Presencial",
    period: "Apr 2024 – Jul 2024 · 4 months",
    color: "border-gray-700/40",
    badge: "text-gray-400",
    bullets: [
      "Preventive and corrective maintenance ensuring continuity of institutional academic services.",
      "Developed user manuals for institutional platforms (Centro Médico, Becas) to improve adoption.",
    ],
  },
];

const education = [
  {
    degree: "Ingeniero en Telemática",
    institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
    location: "Riobamba, Ecuador",
    period: "Oct 2021 – Apr 2026",
    detail: "Título de tercer nivel (16 Abr 2026). Área: Ingeniería, Industria y Construcción. SENESCYT Reg. 1002-2026-3341998.",
    subjects: "Redes de Computadoras, Telecomunicaciones, Ciberseguridad, Cloud Computing, Sistemas Embebidos, IA y ML, Comunicaciones Inalámbricas, Procesamiento Digital de Señales.",
  },
  {
    degree: "Bachiller en Ciencias",
    institution: "Unidad Educativa Salesiana — Riobamba",
    location: "Riobamba, Ecuador",
    period: "Sep 2016 – Jul 2021",
    detail: "Promedio general: 9.01 / 10.00",
    subjects: "",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-32 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Work Experience */}
        <div className="mb-20">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Work History</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.title + job.company} className={`border-l-2 ${job.color} pl-6`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                    <p className={`text-sm font-medium ${job.badge}`}>{job.company}</p>
                    <p className="text-xs text-gray-600">{job.location}</p>
                  </div>
                  <span className="text-xs text-gray-600 shrink-0">{job.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-gray-700 mt-1 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((ed) => (
              <div key={ed.degree} className="border-l-2 border-blue-700/40 pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{ed.degree}</h3>
                    <p className="text-sm text-blue-400 font-medium">{ed.institution}</p>
                    <p className="text-xs text-gray-600">{ed.location}</p>
                  </div>
                  <span className="text-xs text-gray-600 shrink-0">{ed.period}</span>
                </div>
                <p className="text-sm text-gray-400 mb-1">{ed.detail}</p>
                {ed.subjects && (
                  <p className="text-xs text-gray-600">
                    <span className="text-gray-500">Key subjects: </span>{ed.subjects}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
