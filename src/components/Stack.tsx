const STACK_GROUPS = [
  {
    category: "Infrastructure & DevOps",
    color: "text-blue-400",
    items: ["Docker", "Kubernetes", "k3s", "Traefik", "Nginx", "ArgoCD", "Helm", "Terraform", "GitHub Actions", "Linux"],
  },
  {
    category: "Cloud Platforms",
    color: "text-violet-400",
    items: ["GCP (Compute Engine, VPC, IAM, KMS, Monitoring)", "AWS via LocalStack", "Vercel"],
  },
  {
    category: "Programming & Frameworks",
    color: "text-emerald-400",
    items: ["Python", "FastAPI", "Bash", "TypeScript", "Next.js", "MATLAB"],
  },
  {
    category: "Networking & Security",
    color: "text-cyan-400",
    items: ["Cisco IOS", "GNS3", "Wireshark", "FRRouting", "Mininet", "OpenDaylight", "Netmiko", "NAPALM", "Ansible", "Scapy", "VyOS", "FortiGate"],
  },
  {
    category: "IoT & Edge Computing",
    color: "text-amber-400",
    items: ["Raspberry Pi", "MQTT", "Node-RED", "n8n", "InfluxDB", "Grafana", "Telegraf", "Prometheus"],
  },
  {
    category: "Data & Observability",
    color: "text-rose-400",
    items: ["PostgreSQL", "Redis", "InfluxDB", "Grafana", "Prometheus", "Alertmanager"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 md:px-16 lg:px-32 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Technologies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Stack
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Tools and technologies used across production environments, portfolio projects,
            and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_GROUPS.map((group) => (
            <div key={group.category} className="border border-gray-800/50 bg-gray-900/30 rounded-xl p-5">
              <h3 className={`text-sm font-semibold mb-4 ${group.color}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-gray-400 bg-gray-800/60 border border-gray-700/40 px-2.5 py-1 rounded font-mono"
                  >
                    {item}
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
