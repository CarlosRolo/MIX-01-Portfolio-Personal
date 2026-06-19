export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-32 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Open to full-time infrastructure and DevOps roles, remote work opportunities,
          LATAM trainee programs, and graduate scholarships. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              label: "Email",
              value: "carlosdrodriguezl@gmail.com",
              href: "mailto:carlosdrodriguezl@gmail.com",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              value: "carlosdrodriguezl",
              href: "https://linkedin.com/in/carlosdrodriguezl",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
            },
            {
              label: "GitHub",
              value: "CarlosRolo",
              href: "https://github.com/CarlosRolo",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 border border-gray-800/50 bg-gray-900/30 rounded-xl p-6 hover:border-blue-700/50 hover:bg-blue-950/20 transition-all duration-200 group"
            >
              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                {item.icon}
              </span>
              <div>
                <p className="text-xs text-gray-600 mb-1">{item.label}</p>
                <p className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-800/50 pt-8 text-center">
          <p className="text-xs text-gray-700">
            Carlos David Rodríguez López · Ing. Telemática ESPOCH 2026 · ORCID{" "}
            <a href="https://orcid.org/0009-0005-4316-2688" className="hover:text-gray-500 transition-colors">
              0009-0005-4316-2688
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
