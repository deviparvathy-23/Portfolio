import React, { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import {
  Mail,
  ExternalLink,
  Menu,
  X,
  Check,
  CheckCircle2,
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ---- Single token system: paper + ink + one red accent. No gradients, no neon. ----
const c = {
  paper: "#F7F5EF",
  paperShade: "#EFEBE0",
  line: "rgba(27,26,22,0.12)",
  lineSoft: "rgba(27,26,22,0.07)",
  ink: "#211F1B",
  inkMuted: "#726C60",
  red: "#B7392E",
  redSoft: "rgba(183,57,46,0.08)",
};

const NAV = [
  { id: "about", label: "About", letter: "A" },
  { id: "experience", label: "Experience", letter: "B" },
  { id: "skills", label: "Skills", letter: "C" },
  { id: "projects", label: "Projects", letter: "D" },
  { id: "contact", label: "Contact", letter: "E" },
];

const SKILLS = [
  { group: "Languages", items: ["Java", "Python", "C", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Spring Boot"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "REST API"] },
  { group: "AI & APIs", items: ["Gemini API", "Groq API", "LangGraph", "MCP"] },
  { group: "Tooling", items: ["Docker", "Git", "GitHub"] },
];

const EXPERIENCE = [
  {
    date: "Jun 2026",
    role: "Academic Intern — Bytestrone India Pvt Ltd",
    detail:
      "Built the Reports AI Dashboard (Next.js + Spring Boot + Superset + LangGraph/Gemini + MCP). Fixed CSRF, guest-token auth, and a Postgres prepared-statement issue. Earlier shipped JWT + Azure AD SSO for a Talent Management system.",
  },
  {
    date: "Mar – Apr 2026",
    role: "AI Strategy & BI Intern — IBM SkillsBuild / CSRBOX",
    detail:
      "Hands-on with AI-driven decision-making and Python analytics tooling, with a focus on data storytelling and visualization.",
  },
];

const PROJECTS = [
  {
    tag: "Case Study 01",
    name: "FarmSense AI",
    description:
      "A full-stack AI farming assistant — multilingual (8 languages), voice input, crop-disease detection via Llama Vision, live weather advisories, and a government scheme eligibility finder.",
    tools: ["React", "Vite", "FastAPI", "Groq API", "Supabase"],
    link: "https://github.com/deviparvathy-23/FARMSENSE_AI",
  },
  {
    tag: "Case Study 02",
    name: "SAGE — Smart Automated Grading Engine",
    description:
      "An AI-powered grading engine that evaluates written answers for quality, relevance and accuracy, with an educator dashboard for real-time feedback review.",
    tools: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API"],
    link: "https://github.com/deviparvathy-23/AUTOMATED_EXAM_EVALUATION_SYSTEM",
  },
  {
    tag: "Case Study 03",
    name: "Reports AI Dashboard",
    description:
      "An AI-powered BI platform enabling natural-language generation of Superset dashboards via a LangGraph + Gemini agent connected through an MCP server.",
    tools: ["Next.js 15", "Spring Boot", "Superset", "Supabase", "MCP"],
    link: "https://github.com/jyothsnatreesageorge/SuperSet-Agent-LangGraph-Final",
    note: "Built at Bytestrone (internal repo)",
  },
];

function SectionHeading({ title }) {
  return (
    <div className="flex items-baseline gap-3 mb-10 justify-center">
      <h2 className="font-serif text-2xl sm:text-3xl" style={{ color: c.ink }}>
        {title}
      </h2>
    </div>
  );
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen font-sans relative"
      style={{ backgroundColor: c.paper, color: c.ink }}
    >
      <style>{`
        @keyframes stampIn { from { opacity: 0; transform: rotate(-16deg) scale(1.4); } to { opacity: 1; transform: rotate(-8deg) scale(1); } }
        .stamp { animation: stampIn 0.6s cubic-bezier(.2,.8,.3,1) both; animation-delay: 0.9s; }
        .ruled { background-image: repeating-linear-gradient(to bottom, transparent, transparent 30px, ${c.lineSoft} 31px); }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes photoScaleIn {
          from {
            opacity: 0;
            transform: rotate(6deg) scale(0.92);
          }
          to {
            opacity: 1;
            transform: rotate(1deg) scale(1);
          }
        }

        @keyframes lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }

        @keyframes ringFadeIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-up-1 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.1s; }
        .fade-up-2 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.25s; }
        .fade-up-3 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.4s; }
        .fade-up-4 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.55s; }

        .photo-card { animation: photoScaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.3s; }
        .line-grow { animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .ring-fade { animation: ringFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      {/* decorative notebook margin — desktop only */}
      <div
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-16 bottom-0 w-px z-0 line-grow"
        style={{ backgroundColor: c.red, opacity: 0.35 }}
      />
      <div aria-hidden="true" className="hidden md:flex fixed top-0 left-0 bottom-0 w-16 z-0 flex-col items-center justify-evenly">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full ring-fade"
            style={{
              backgroundColor: c.paperShade,
              border: `1px solid ${c.line}`,
              animationDelay: `${i * 0.08}s`
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(247,245,239,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          borderBottom: isScrolled ? `1px solid ${c.line}` : "1px solid transparent",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:pl-24">
          <div className="flex justify-between items-center h-16">
            <a
              href="#top"
              className="flex items-center gap-2.5 font-serif text-lg italic transition-opacity hover:opacity-85"
              style={{ color: c.ink }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-7 h-7">
                <circle cx="50" cy="50" r="45" fill="none" stroke={c.ink} strokeWidth="2.5" />
                <circle cx="50" cy="50" r="41" fill="none" stroke={c.red} strokeWidth="1" strokeDasharray="3 3" />
                <text x="50" y="58" fontFamily="'Playfair Display', Georgia, serif" fontSize="28" fontWeight="bold" fill={c.ink} textAnchor="middle" letterSpacing="1">DP</text>
                <circle cx="68" cy="42" r="3.5" fill={c.red} />
              </svg>
              <span>S Devi Parvathy</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-sans text-sm transition"
                  style={{ color: c.inkMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = c.red)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = c.inkMuted)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              style={{ color: c.ink }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden px-6 pb-4"
            style={{ backgroundColor: c.paperShade, borderBottom: `1px solid ${c.line}` }}
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 font-sans text-sm"
                style={{ color: c.ink }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center px-6 md:pl-24 pt-24">
        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h1
              className="font-serif leading-[1.05] mb-5 fade-up-1"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", color: c.ink }}
            >
              S Devi Parvathy
            </h1>
            <p className="text-lg sm:text-xl mb-2 fade-up-2" style={{ color: c.ink }}>
              Aspiring Full-Stack Developer, 4th Year B.Tech CSE Student
            </p>
            <p className="text-sm sm:text-base mb-8 fade-up-3" style={{ color: c.inkMuted }}>
              Trivandrum, Kerala — building with Java, Spring Boot, React and
              AI-integrated APIs.
            </p>

            <div className="flex flex-wrap gap-4 fade-up-4">
              <a
                href="mailto:deviparvathys2005@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition"
                style={{ backgroundColor: c.ink, color: c.paper }}
              >
                <Mail size={15} /> Get in touch
              </a>
              <a
                href="https://github.com/deviparvathy-23"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition"
                style={{ border: `1.5px solid ${c.ink}`, color: c.ink }}
              >
                <Github size={15} /> View GitHub
              </a>
            </div>
          </div>

          {/* photo, pinned like an ID card, with a review stamp */}
          <div className="relative w-44 sm:w-56 justify-self-center md:justify-self-end photo-card">
            <div
              className="w-full aspect-[3/4] rounded-sm overflow-hidden rotate-1"
              style={{
                backgroundColor: c.paperShade,
                border: `1px solid ${c.line}`,
                boxShadow: "0 12px 24px -12px rgba(27,26,22,0.35)",
              }}
            >
              <img
                src={heroImg}
                alt="S Devi Parvathy"
                className="w-full h-full object-cover"
              />
            </div>

           
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 md:pl-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="About" />
          <div
            className="ruled rounded-sm p-6 sm:p-10"
            style={{ border: `1px solid ${c.line}`, backgroundColor: c.paperShade }}
          >
            <p className="font-serif text-lg sm:text-xl leading-relaxed" style={{ color: c.ink }}>
              A B.Tech Computer Science & Engineering student at APJ Abdul
              Kalam Technological University, with a strong foundation in
              full-stack development and AI integration.
            </p>
            <p className="font-serif text-lg sm:text-xl leading-relaxed mt-5" style={{ color: c.ink }}>
              Builds with Java Spring Boot, Next.js/React (TypeScript), and
              Python backends — through internships and personal projects,
              including AI-powered BI systems. Currently preparing for
              placements and GATE 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 md:pl-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Experience" />
          <div className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0 w-24 text-right">
                  <span className="font-serif italic text-sm" style={{ color: c.red }}>
                    {e.date}
                  </span>
                </div>
                <div
                  className="flex-1 pb-8"
                  style={{ borderLeft: `1px solid ${c.line}`, paddingLeft: "1.25rem" }}
                >
                  <p className="font-serif text-lg" style={{ color: c.ink }}>
                    {e.role}
                  </p>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: c.inkMuted }}>
                    {e.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 md:pl-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Skills" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {SKILLS.map((s, i) => (
              <div key={i}>
                <p className="font-serif italic text-base mb-2" style={{ color: c.red }}>
                  {s.group}
                </p>
                <ul>
                  {s.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 py-1 text-sm"
                      style={{
                        color: c.ink,
                        borderBottom: j !== s.items.length - 1 ? `1px dotted ${c.line}` : "none",
                      }}
                    >
                      <Check size={13} style={{ color: c.red }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 md:pl-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Projects" />
          <div className="space-y-6">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="rounded-sm p-6 sm:p-8 relative"
                style={{ backgroundColor: c.paperShade, border: `1px solid ${c.line}` }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <p className="font-sans text-xs tracking-widest uppercase" style={{ color: c.red }}>
                    {p.tag}
                  </p>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs"
                      style={{ color: c.ink }}
                    >
                      view source <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-xs italic" style={{ color: c.inkMuted }}>
                      {p.note}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl mb-3" style={{ color: c.ink }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: c.inkMuted }}>
                  {p.description}
                </p>
                <p className="text-xs uppercase tracking-wide mb-2" style={{ color: c.red }}>
                  Tools used
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ border: `1px solid ${c.line}`, color: c.ink }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:pl-24 text-center">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Contact" />
          <p className="text-sm sm:text-base mb-10" style={{ color: c.inkMuted }}>
            Open to internships, collaborations, and full-time opportunities.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { Icon: Github, href: "https://github.com/deviparvathy-23", label: "GitHub" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/s-devi-parvathy-5b024a2b2/",
                label: "LinkedIn",
              },
              { Icon: Mail, href: "mailto:deviparvathys2005@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 group"
                style={{ color: c.ink }}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center transition"
                  style={{ border: `1.5px solid ${c.ink}` }}
                >
                  <Icon size={18} />
                </span>
                <span className="text-xs" style={{ color: c.inkMuted }}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center text-xs md:pl-24"
        style={{ borderTop: `1px solid ${c.line}`, color: c.inkMuted }}
      >
        © 2026 S Devi Parvathy
      </footer>
    </div>
  );
};

export default Portfolio;
