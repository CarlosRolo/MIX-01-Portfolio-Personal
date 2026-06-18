export default function Hero() {
  const stats = [
    { value: "24", label: "Portfolio Projects" },
    { value: "2", label: "National 1st Places" },
    { value: "3+", label: "Years in Infra & DevOps" },
    { value: "10+", label: "Technologies in Production" },
  ];

  const techStack = [
    "Docker", "Kubernetes", "Traefik", "Nginx", "GCP", "Terraform",
    "ArgoCD", "Helm", "GitHub Actions", "Python", "FastAPI", "Bash",
    "n8n", "Linux", "Cisco IOS", "GNS3", "Wireshark", "FRRouting",
    "Mininet", "OpenDaylight", "Netmiko", "NAPALM", "Ansible", "Scapy",
    "MQTT", "Node-RED", "InfluxDB", "Grafana", "Prometheus", "Telegraf",
    "Raspberry Pi", "Next.js", "Tailwind CSS", "PostgreSQL", "Redis",
    "LocalStack", "k3s", "Backstage", "VyOS", "FortiGate",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 py-24 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to full-time roles, remote work &amp; graduate scholarships
        </div>

        {/* Name + title */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-3">
          Carlos Rodríguez
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Infrastructure &amp; DevOps Engineer
          </span>
        </h2>

        {/* Bio */}
        <p className="text-gray-400 text-lg max-w-3xl mb-3 leading-relaxed">
          Telematic Engineer graduated from{" "}
          <span className="text-white font-medium">ESPOCH, Ecuador (2026)</span>,
          registered with SENESCYT. Currently working as{" "}
          <span className="text-white font-medium">Junior Infrastructure &amp; Automation Engineer at Andorasoft S.A.S.</span>,
          managing production systems with Docker, Traefik, Nginx, GCP, and Linux.
        </p>
        <p className="text-gray-400 text-lg max-w-3xl mb-8 leading-relaxed">
          Builder of a{" "}
          <span className="text-white font-medium">24-project public portfolio</span>{" "}
          spanning Cisco networking, cloud/DevOps, IoT edge computing, and full-stack development.
          Former IEEE Student Branch Treasurer and Lab Technical Assistant at FIE-ESPOCH.
        </p>

        {/* Achievement badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { icon: "🥇", text: "1st Place — Reto Nacional IoT V3.0 (PneumoLink)" },
            { icon: "🥇", text: "1st Place — ESPOCH Academic Fair (Smart Traffic Lights)" },
            { icon: "🎓", text: "Ing. Telemática — ESPOCH 2026 · SENESCYT Reg. 1002-2026-3341998" },
            { icon: "💼", text: "Junior Engineer @ Andorasoft S.A.S." },
          ].map((item) => (
            <span
              key={item.text}
              className="inline-flex items-center gap-2 text-sm text-gray-300 bg-gray-800/60 border border-gray-700/50 px-3 py-2 rounded-lg"
            >
              <span>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        {/* Tech stack pills */}
        <div className="mb-10">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Production Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-blue-300 bg-blue-950/50 border border-blue-800/40 px-2.5 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Riobamba, Chimborazo, Ecuador · Manta, Manabí, Ecuador</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            View Portfolio Projects
          </a>
          <a
            href="#contact"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Contact Me
          </a>
          <a
            href="https://www.credly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-700/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Certifications
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5">
          <a href="https://github.com/CarlosRolo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/carlosdrodriguezl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:carlosdrodriguezl@gmail.com" aria-label="Email" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="https://orcid.org/0009-0005-4316-2688" target="_blank" rel="noopener noreferrer" aria-label="ORCID" className="text-gray-500 hover:text-green-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.484 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
