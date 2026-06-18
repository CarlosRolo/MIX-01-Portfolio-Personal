"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#stack", label: "Stack" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        <span className="font-mono text-blue-400 font-semibold tracking-tight">
          CarlosRolo
        </span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/CarlosRolo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 px-4 py-1.5 rounded-md transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
