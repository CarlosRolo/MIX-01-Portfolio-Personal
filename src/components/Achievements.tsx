const achievements = [
  {
    place: "1st",
    event: "Reto Nacional IoT V3.0",
    category: "Healthcare Category",
    project: "PneumoLink",
    description:
      "Respiratory monitoring system using mmWave radar, Raspberry Pi 4, Random Forest ML model, and MQTT. Real-time detection of respiratory patterns with edge inference. Co-built with Dayanna Pazmiño, tutor Ing. César Palacios PhD.",
    tags: ["Raspberry Pi", "MQTT", "Random Forest", "Edge AI", "IoT"],
    year: "2026",
    color: "border-yellow-600/40 bg-yellow-950/20",
    badge: "text-yellow-400",
  },
  {
    place: "1st",
    event: "ESPOCH Academic Fair",
    category: "Telemática en Movimiento",
    project: "Smart Traffic Lights",
    description:
      "Intelligent traffic light system with adaptive signal timing based on real-time vehicle density detection. Integrated with IoT sensors and centralized monitoring dashboard.",
    tags: ["IoT", "Embedded Systems", "Python", "Networking"],
    year: "2025",
    color: "border-yellow-600/40 bg-yellow-950/20",
    badge: "text-yellow-400",
  },
  {
    place: "",
    event: "IEEE Student Branch ESPOCH",
    category: "Leadership · 2025",
    project: "Treasurer",
    description:
      "Managed branch finances and coordinated technical events at ESPOCH's Faculty of Electronic Engineering. Also active member of IEEE Computer Society and IEEE AP-S.",
    tags: ["IEEE", "Leadership", "Event Management"],
    year: "2025",
    color: "border-blue-600/40 bg-blue-950/20",
    badge: "text-blue-400",
  },
  {
    place: "",
    event: "FEPOCH — Asoc. Estudiantes Telemática",
    category: "Student Leadership · 2023–2025",
    project: "Delegado Promocional",
    description:
      "Student representative for the Telematics Engineering program at ESPOCH's student federation. Represented student interests in institutional and academic matters.",
    tags: ["Leadership", "Representation", "ESPOCH"],
    year: "2023–2025",
    color: "border-blue-600/40 bg-blue-950/20",
    badge: "text-blue-400",
  },
  {
    place: "",
    event: "FIE-ESPOCH",
    category: "Academic Role · Sep 2025 – Mar 2026",
    project: "Lab Technical Assistant",
    description:
      "Supported laboratory sessions in networking and telecommunications courses. Assisted students with GNS3, Packet Tracer, and embedded systems labs.",
    tags: ["GNS3", "Packet Tracer", "Teaching", "Networking"],
    year: "Sep 2025 – Mar 2026",
    color: "border-gray-700/40 bg-gray-900/20",
    badge: "text-gray-400",
  },
  {
    place: "",
    event: "ESPOCH — Decanato de Vinculación con la Sociedad",
    category: "Community Service · Sep 2023 – Jan 2024",
    project: "Encuestador de Campo",
    description:
      "Field surveyor on the Proyecto Integral de Prevención de la Desnutrición Crónica Infantil en el Cantón Riobamba (Resolución 482.CP.2023). 40 hours of community work aligned with SDG 2 and SDG 3.",
    tags: ["Community Service", "Public Health", "SDG 2", "SDG 3"],
    year: "2023–2024",
    color: "border-emerald-700/40 bg-emerald-950/20",
    badge: "text-emerald-400",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 md:px-16 lg:px-32 py-24 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Recognition & Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Achievements, Roles & Volunteering
          </h2>
          <p className="text-gray-500 max-w-2xl">
            National competition wins, IEEE leadership, academic roles, and community service
            across ESPOCH, IEEE, and Riobamba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div key={a.project} className={`border rounded-xl p-6 ${a.color}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  {a.place && (
                    <span className={`text-2xl font-black ${a.badge} block mb-1`}>
                      {a.place} Place
                    </span>
                  )}
                  <h3 className="text-white font-semibold text-lg">{a.project}</h3>
                  <p className="text-gray-500 text-sm">{a.event} · {a.category}</p>
                </div>
                <span className="text-xs text-gray-600 shrink-0 mt-1">{a.year}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{a.description}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-800/60 border border-gray-700/40 px-2 py-0.5 rounded">
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
