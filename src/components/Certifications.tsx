const certs = [
  {
    name: "Introduction to Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    hours: "2h",
    year: "2024",
    status: "badge",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.credly.com/users/carlos-david-rodriguez-lopez",
  },
  {
    name: "Taller de Redes",
    issuer: "IEEE AP-S + ESPOCH FIE",
    hours: "50h",
    year: "2025",
    status: "",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.netacad.com",
  },
  {
    name: "Redes de Datos",
    issuer: "IEEE Computer Society ESPOCH",
    hours: "40h",
    year: "2025",
    status: "",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.netacad.com",
  },
  {
    name: "Ciberseguridad y Ethical Hacking",
    issuer: "Hacker Mentor Academy",
    hours: "8h",
    year: "2025",
    status: "",
    color: "border-red-700/40 bg-red-950/20",
    badge: "text-red-400",
    url: "https://www.netacad.com",
  },
  {
    name: "Inmersión IA en la Práctica",
    issuer: "Daxus Latam",
    hours: "8h",
    year: "2025",
    status: "",
    color: "border-emerald-700/40 bg-emerald-950/20",
    badge: "text-emerald-400",
    url: "https://www.netacad.com",
  },
  {
    name: "Python Essentials I",
    issuer: "Cisco NetAcad / FCEPRO",
    hours: "30h",
    year: "2026",
    status: "badge",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.credly.com/users/carlos-david-rodriguez-lopez",
  },
  {
    name: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    hours: "12h",
    year: "2026",
    status: "badge",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.credly.com/users/carlos-david-rodriguez-lopez",
  },
  {
    name: "Introducción a Ciberseguridad",
    issuer: "Cisco Networking Academy",
    hours: "6h",
    year: "2026",
    status: "badge",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.credly.com/users/carlos-david-rodriguez-lopez",
  },
  {
    name: "Hacker Ético — #CyberGames_TI_Espoch",
    issuer: "Cisco NetAcad / ESPOCH",
    hours: "70h",
    year: "2026",
    status: "",
    color: "border-blue-700/40 bg-blue-950/20",
    badge: "text-blue-400",
    url: "https://www.netacad.com",
  },
  {
    name: "Cloud Computing & DevOps con Microsoft Azure",
    issuer: "Microsoft Learn",
    hours: "9h",
    year: "2026",
    status: "",
    color: "border-violet-700/40 bg-violet-950/20",
    badge: "text-violet-400",
    url: "https://learn.microsoft.com",
  },
  {
    name: "Introducción a Copilot",
    issuer: "Microsoft Learn",
    hours: "6h",
    year: "2026",
    status: "",
    color: "border-violet-700/40 bg-violet-950/20",
    badge: "text-violet-400",
    url: "https://learn.microsoft.com",
  },
  {
    name: "English for IT 1 & 2 — B2",
    issuer: "Cisco NetAcad / OpenEDG",
    hours: "",
    year: "2026",
    status: "in-progress",
    color: "border-gray-700/40 bg-gray-900/20",
    badge: "text-gray-400",
    url: "https://www.netacad.com",
  },
  {
    name: "Ethical Hacker (curso completo)",
    issuer: "Cisco Networking Academy",
    hours: "",
    year: "2026",
    status: "in-progress",
    color: "border-gray-700/40 bg-gray-900/20",
    badge: "text-gray-400",
    url: "https://www.netacad.com",
  },
  {
    name: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    hours: "",
    year: "2026",
    status: "prep",
    color: "border-violet-700/40 bg-violet-950/20",
    badge: "text-violet-300",
    url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    hours: "",
    year: "2026",
    status: "prep",
    color: "border-amber-700/40 bg-amber-950/20",
    badge: "text-amber-400",
    url: "https://aws.amazon.com/certification/",
  },
];

const statusLabel: Record<string, string> = {
  badge: "Credly Badge",
  "in-progress": "In Progress",
  prep: "In Preparation",
};

const statusColor: Record<string, string> = {
  badge: "text-green-400 bg-green-950/40 border-green-800/40",
  "in-progress": "text-yellow-400 bg-yellow-950/40 border-yellow-800/40",
  prep: "text-gray-400 bg-gray-800/40 border-gray-700/40",
};

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-16 lg:px-32 py-24 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications & Training
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Professional certifications from Cisco NetAcad, Microsoft Learn, and specialized
            training programs. Active preparation for AZ-900 and AWS Cloud Practitioner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {certs.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block border rounded-xl p-5 hover:brightness-125 transition-all duration-200 group ${cert.color}`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className={`text-xs font-mono font-semibold ${cert.badge}`}>
                  {cert.issuer}
                </span>
                <span className="text-xs text-gray-600 shrink-0 ml-2">{cert.year}</span>
              </div>
              <h3 className="text-white text-sm font-medium leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                {cert.name}
              </h3>
              <div className="flex items-center justify-between">
                {cert.hours && (
                  <span className="text-xs text-gray-600">{cert.hours}</span>
                )}
                {cert.status && (
                  <span className={`text-xs px-2 py-0.5 rounded border ${statusColor[cert.status]}`}>
                    {statusLabel[cert.status]}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.credly.com/users/carlos-david-rodriguez-lopez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            View on Credly
          </a>
          <a
            href="https://www.netacad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Cisco NetAcad
          </a>
        </div>
      </div>
    </section>
  );
}
