import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  BookOpen,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Weather Forecasting",
      description:
        "A real-time weather forecasting application with intuitive UI and accurate data.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/deviparvathy-23/Weather_Forecasting",
    },
    {
      title: "Exam Management System",
      description:
        "System for managing exams, student records, and results efficiently.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/deviparvathy-23/EXAM_MANAGEMENT_SYSTEM",
    },
    {
      title: "Wacky Web",
      description:
        "Creative web project showcasing modern design and interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/deviparvathy-23/Wacky_Web",
    },
    {
      title: "Registration Form",
      description:
        "Responsive registration form with validation and clean UI.",
      tech: ["HTML", "CSS"],
      link: "https://github.com/deviparvathy-23/Registration_Form",
    },
    {
      title: "Data Structures",
      description:
        "Implementation of core data structures and algorithms in C.",
      tech: ["C"],
      link: "https://github.com/deviparvathy-23/DATA_STRUCTURE",
    },
  ];

  const skills = [
    { name: "C", icon: "💻", category: "Programming" },
    { name: "Java", icon: "☕", category: "Programming" },
    { name: "Python", icon: "🐍", category: "Programming" },
    { name: "HTML / CSS", icon: "🎨", category: "Web" },
    { name: "JavaScript", icon: "⚡", category: "Web" },
    { name: "React", icon: "⚛️", category: "Web" },
    { name: "Data Structures", icon: "📊", category: "CS Fundamentals" },
  ];

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="min-h-screen bg-blue-900 text-white selection:bg-purple-500 selection:text-white">

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Devi
            </h1>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <div className="w-32 h-32 mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
            👩‍💻
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          S Devi Parvathy
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10">
          CSE Undergraduate • Web Developer • UX Designer
        </p>

        <div className="flex space-x-6 mb-10">
          <a href="https://github.com/deviparvathy-23" target="_blank" rel="noreferrer">
            <Github className="hover:text-purple-400 transition" size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/s-devi-parvathy-5b024a2b2/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="hover:text-purple-400 transition" size={28} />
          </a>
          <a href="mailto:deviparvathy2005@gmail.com">
            <Mail className="hover:text-purple-400 transition" size={28} />
          </a>
        </div>

        <ChevronDown className="animate-bounce text-purple-400" size={32} />
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <Code className="text-purple-400 mb-4" size={36} />
            <h3 className="text-2xl font-semibold mb-3">Developer</h3>
            <p className="text-gray-400">
              Passionate about problem-solving, data structures, and building
              scalable web applications.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <Palette className="text-pink-400 mb-4" size={36} />
            <h3 className="text-2xl font-semibold mb-3">Designer</h3>
            <p className="text-gray-400">
              I enjoy creating clean, intuitive interfaces with a strong focus
              on user experience.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <BookOpen className="text-purple-400 mb-3" size={32} />
          <p className="text-gray-400 text-lg">
            <span className="text-purple-400 font-semibold">
              B.Tech in Computer Science Engineering
            </span>
            <br />
            RIT Kottayam, Kerala, India
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:scale-110 transition"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:scale-105 transition group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300"
              >
                View on GitHub <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-12">
          Open to internships, collaborations, and exciting opportunities.
        </p>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/deviparvathy-23" target="_blank" rel="noreferrer">
            <Github size={36} className="hover:text-purple-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/s-devi-parvathy-5b024a2b2/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={36} className="hover:text-purple-400 transition" />
          </a>
          <a href="mailto:deviparvathy2005@gmail.com">
            <Mail size={36} className="hover:text-purple-400 transition" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 S Devi Parvathy • Built with React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Portfolio;
