import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  Eye,
  ChevronDown,
  BriefcaseBusiness,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Workflow,
  X,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { projects, skillGroups } from "./data/portfolio";
import { useTheme } from "./hooks/useTheme";
import "./styles/tokens.css";
import "./styles/global.css";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";

const githubUrl = "https://github.com/PranayIngole7";
const linkedinUrl = "https://www.linkedin.com/in/pranayingole1/";
const email = "pranayingole1@gmail.com";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    if (!resumeMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !resumeMenuRef.current?.contains(event.target)
      ) {
        setResumeMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResumeMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [resumeMenuOpen]);

  return (
    <>
      <MotionConfig reducedMotion="user">
        <AnimatedBackground />
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <section className="hero section-shell" id="home">
            <div className="hero-grid container">
              <div className="hero-copy">


                <h1>
                  <span className="hero-greeting">Hello, I am</span>
                  <br />
                  <span className="text-accent hero-name">Pranay Ingole</span>
                </h1>

                <p className="hero-professional-title">
                  Software Engineer <span className="title-divider">|</span> Backend Engineering
                  <span> · </span>Cloud &amp; DevOps<span> · </span>AI/ML
                </p>

                <p className="hero-description">
                  Building backend applications, automating software delivery, and
                  exploring practical applications of AI and machine learning.
                </p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#projects">
                    Explore my work <ArrowRight size={17} />
                  </a>
                  <div className="resume-dropdown" ref={resumeMenuRef}>
                    <button
                      className="button button-resume-dropdown"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={resumeMenuOpen}
                      aria-controls="resume-dropdown-menu"
                      onClick={() => setResumeMenuOpen((open) => !open)}
                    >
                      Resume
                      <ChevronDown
                        size={16}
                        className={
                          resumeMenuOpen
                            ? "resume-chevron is-open"
                            : "resume-chevron"
                        }
                      />
                    </button>

                    {resumeMenuOpen && (
                      <div
                        className="resume-dropdown-menu"
                        id="resume-dropdown-menu"
                        role="menu"
                      >
                        <a
                          className="resume-dropdown-item"
                          href="/multi-media/pranay-ingole-resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          role="menuitem"
                          onClick={() => setResumeMenuOpen(false)}
                        >
                          <Eye size={17} aria-hidden="true" />
                          <span>View Resume</span>
                        </a>

                        <a
                          className="resume-dropdown-item"
                          href="/multi-media/pranay-ingole-resume.pdf"
                          download="pranay-ingole-resume.pdf"
                          role="menuitem"
                          onClick={() => setResumeMenuOpen(false)}
                        >
                          <Download size={17} aria-hidden="true" />
                          <span>Download Resume</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <a className="button button-secondary" href="#contact">
                    Get in touch <ArrowUpRight size={17} />
                  </a>
                </div>

                <div className="hero-socials">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Code2 size={17} /> GitHub
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <BriefcaseBusiness size={17} /> LinkedIn
                  </a>
                  <a href={`mailto:${email}`}>
                    <Mail size={17} /> Email
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <img
                  className="profile-photo"
                  src="/multi-media/9562.jpg"
                  alt="Portrait of Pranay Ingole"
                  width="600"
                  height="725"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            <a className="scroll-cue" href="#about">
              Scroll to explore <ArrowDown size={15} />
            </a>
          </section>

          <section className="identity-strip" aria-label="Professional focus">
            <div className="container identity-inner">
              <span>🛠️ Building</span>
              <i />
              <span>⚙️ Automating</span>
              <i />
              <span>🤖 Integrating</span>
            </div>
          </section>

          <section className="section-shell section-padding" id="about">
            <div className="container about-grid">
              <div>
                <SectionHeading
                  eyebrow="01 / ABOUT"
                  title="About Me"
                />
              </div>

              <div className="about-content">
                <p className="about-lead">
                  A software engineer focused on building scalable backend applications with clean architectures, implementing robust business logic, and developing solutions that balance performance and security.
                </p>
                <p>
                  Skilled in backend engineering, full-stack development,
                  data systems, and deployment automation.
                </p>
                <p>
                  Exploring how AI and machine learning can solve
                  practical problems — with a focus on useful integrations
                  in real-world applications.
                </p>

                <a className="text-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
                  More about my work on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <section className="section-shell section-padding" id="projects">
            <div className="container">
              <div className="section-heading-row">
                <SectionHeading
                  eyebrow="02 / PROJECTS"
                  title="Featured Projects"
                  description="Projects demonstrating my work across backend development, full-stack applications, and deployment automation."
                />
                <a className="text-link all-projects-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
                  All repositories <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="projects-grid">
                {projects.map((project) => (
                  <ProjectCard key={project.number} project={project} />
                ))}
              </div>
            </div>
          </section>

          <section className="section-shell section-padding section-muted" id="skills">
            <div className="container">
              <SectionHeading
                eyebrow="03 / TECHNICAL SKILLS"
                title="Technical Skills"
                description="Core technologies across application development, data systems, software delivery, and emerging AI."
              />

              <div className="skills-grid">
                {skillGroups.map((group, index) => {
                  const Icon = [Code2, Code2, Workflow, BrainCircuit, BrainCircuit][index];

                  return (
                    <motion.article
                      className="skill-card"
                      key={group.title}
                      initial={{ opacity: 1, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45, delay: index * 0.12 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="skill-icon"><Icon size={21} /></div>
                      <span className="skill-index">0{index + 1}</span>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                      <div className="tag-list">
                        {group.skills.map((skill) => {
                          const featuredSkills = [
                            "Java",
                            "Spring Boot",
                            "Spring MVC",
                            "Python",
                            "Postman",
                            "HTML",
                            "CSS",
                            "MySQL",
                            "Linux",
                            "AWS",
                            "GitHub Actions",
                            "REST APIs",
                            "PostgreSQL",
                            "React",
                            "TypeScript",
                            "Git",
                            "Docker",
                            "Kubernetes",
                            "CI/CD",

                            "Machine Learning (ML)",
                            "Model Context Protocol (MCP)",
                            "Spring AI",];

                          return (
                            <span
                              className={`tag ${
                                featuredSkills.includes(skill) ? "core-skill" : ""
                              }`}
                              key={skill}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section-shell section-padding section-muted" id="experience">
            <div className="container experience-grid">
              <div>
                <SectionHeading
                  eyebrow="04 / EXPERIENCE"
                  title="Experience"
                  description="Professional experience in software engineering, collaboration, and practical problem-solving."
                />
              </div>
              <div className="journey-list">
                <article className="journey-item">
                  <div className="journey-marker"><BriefcaseBusiness size={18} /></div>
                  <div>
                    <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
                    <h3>Software Engineer · FEV India Pvt Ltd, Pune</h3>
                    <p className="journey-meta">May 2022 – October 2023</p>
                    <p>
                      Contributed to <strong>Java-based software development</strong> within
                      the <strong>Software Defined Vehicle (SDV)</strong> department.
                    </p>
                    <ul className="experience-highlights">
                      <li>
                        Developed a <strong>Bluetooth application using Java</strong> for
                        device connectivity and application functionality.
                      </li>
                      <li>
                        Developed a <strong>media player using Java and SQLite</strong>,
                        with <strong>Git-based development</strong> and debugging.
                      </li>
                      <li>
                        Applied <strong>multithreading, concurrency, and code optimization</strong> techniques in application development.
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section-shell section-padding" id="certifications">
            <div className="container">
              <SectionHeading
                eyebrow="05 / CERTIFICATIONS"
                title="Certifications and Courses"
                description="Professional training and credentials supporting my work in software engineering, cloud computing, and DevOps practices."
              />
              <div className="certification-grid">
                <article className="certification-card">
                  <a
                    className="certificate-image-link"
                    href="https://www.credly.com/badges/cf55bbb6-1469-42f5-b0c9-2bd5f8442ddb/public_url"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View Linux Foundation credential on Credly"
                  >
                    <img
                      className="certificate-image"
                      src="/images/serverless-k8s.png"
                      alt="LFS157 Introduction to Serverless on Kubernetes credential"
                      loading="lazy"
                    />
                  </a>
                  <div className="certification-content">
                    <span className="eyebrow">THE LINUX FOUNDATION</span>
                    <h3>LFS157: Introduction to Serverless on Kubernetes</h3>
                    <p>
                      Explored building and deploying serverless functions with
                      OpenFaaS across Kubernetes and Docker, including function
                      configuration, secrets management, autoscaling, and TLS.
                    </p>
                    <div className="certification-tags">
                      <span>Kubernetes</span>
                      <span>OpenFaaS</span>
                      <span>Serverless</span>
                      <span>Secrets Management</span>
                    </div>
                    <a
                      className="certification-link"
                      href="https://www.credly.com/badges/cf55bbb6-1469-42f5-b0c9-2bd5f8442ddb/public_url"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View verified credential <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>

                <article className="certification-card">
                  <a
                    className="certificate-image-link"
                    href="/images/Devops_Sunbeam_certificate.jpg"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Sunbeam CDAC DevOps certificate"
                  >
                    <img
                      className="certificate-image"
                      src="/images/Devops_Sunbeam_certificate.jpg"
                      alt="DevOps training certificate from Sunbeam CDAC, Pune"
                      loading="lazy"
                    />
                  </a>
                  <div className="certification-content">
                    <span className="eyebrow">SUNBEAM CDAC · PUNE</span>
                    <h3>DevOps Training</h3>
                    <p className="journey-meta">September – November 2025</p>
                    <p>
                      Training covered DevOps principles, culture and Agile,
                      Git and GitHub, CI/CD pipelines, containerization,
                      orchestration, cloud infrastructure, automation, and monitoring.
                    </p>
                    <div className="certification-tags">
                      <span>DevOps &amp; Agile</span>
                      <span>Git &amp; GitHub</span>
                      <span>Jenkins</span>
                      <span>GitHub Actions</span>
                      <span>Docker</span>
                      <span>Kubernetes</span>
                      <span>Cloud &amp; Monitoring</span>
                    </div>
                    <a
                      className="certification-link"
                      href="/images/Devops_Sunbeam_certificate.jpg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View certificate <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section-shell section-padding section-muted" id="education">
            <div className="container experience-grid">
              <div>
                <SectionHeading
                  eyebrow="06 / EDUCATION"
                  title="Education"
                  description="Formal education that established my foundation in computing and software development."
                />
              </div>
              <div className="journey-list">
                <article className="journey-item">
                  <div className="journey-marker"><CheckCircle2 size={18} /></div>
                  <div>
                    <span className="eyebrow">POSTGRADUATE EDUCATION</span>
                    <h3>PG-Diploma · Mobile Computing</h3>
                    <p>Sunbeam CDAC, Pune</p>
                    <p>Percentage: 66.86%</p>
                  </div>
                </article>
                <article className="journey-item">
                  <div className="journey-marker"><CheckCircle2 size={18} /></div>
                  <div>
                    <span className="eyebrow">UNDERGRADUATE EDUCATION</span>
                    <h3>B.E. · Computer Science</h3>
                    <p>Sant Gadge Baba Amravati University, Amravati</p>
                    <p>Percentage: 70%</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section-shell section-padding" id="contact">
            <div className="container contact-panel">
              <div className="contact-copy">
                <span className="eyebrow">07 / CONTACT</span>
                <h2>Have a challenge in mind? Let's solve it.</h2>
                <p>
                  Interested in thoughtful engineering, useful automation,
                  and practical applications of AI. Let's connect.
                </p>
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={contactModalOpen}
                >
                  Start a conversation <ArrowUpRight size={17} />
                </button>

                <div className="about-location contact-location">
                  <MapPin size={16} /> Pune, Maharashtra, India
                </div>
              </div>

              <div className="contact-links">
                <a href="tel:+917822051743">
                  <span className="contact-link-icon"><Phone size={19} /></span>
                  <span><small>PHONE</small><strong>+91 7822051743</strong></span>
                  <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://wa.me/917822051743?text=Hi%20Pranay%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Pranay on WhatsApp"
                >
                  <span className="contact-link-icon"><MessageCircle size={19} /></span>
                  <span><small>WHATSAPP</small><strong>Chat with me</strong></span>
                  <ArrowUpRight size={17} />
                </a>
                <a href={`mailto:${email}`}>
                  <span className="contact-link-icon"><Mail size={19} /></span>
                  <span><small>EMAIL</small><strong>{email}</strong></span>
                  <ArrowUpRight size={17} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-icon"><BriefcaseBusiness size={19} /></span>
                  <span><small>LINKEDIN</small><strong>Connect professionally</strong></span>
                  <ArrowUpRight size={17} />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-icon"><Code2 size={19} /></span>
                  <span><small>GITHUB</small><strong>Explore my repositories</strong></span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            {contactModalOpen && createPortal(
              <div
                className="contact-modal-backdrop"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    setContactModalOpen(false);
                  }
                }}
              >
                <section
                  className="contact-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="contact-modal-title"
                >
                  <button
                    className="contact-modal-close"
                    type="button"
                    onClick={() => setContactModalOpen(false)}
                    aria-label="Close contact options"
                    autoFocus
                  >
                    <X size={20} />
                  </button>

                  <span className="eyebrow">LET'S CONNECT</span>
                  <h2 id="contact-modal-title">Choose how to reach me</h2>
                  <p>Select whichever option works best for you.</p>

                  <div className="contact-modal-options">
                    <a
                      className="contact-modal-option"
                      href={`mailto:${email}`}
                      onClick={() => setContactModalOpen(false)}
                    >
                      <span className="contact-modal-icon"><Mail size={21} /></span>
                      <span><strong>Email me</strong><small>{email}</small></span>
                      <ArrowUpRight size={17} />
                    </a>

                    <a
                      className="contact-modal-option"
                      href="tel:+917822051743"
                      onClick={() => setContactModalOpen(false)}
                    >
                      <span className="contact-modal-icon"><Phone size={21} /></span>
                      <span><strong>Call me</strong><small>+91 7822051743</small></span>
                      <ArrowUpRight size={17} />
                    </a>

                    <a
                      className="contact-modal-option"
                      href="https://wa.me/917822051743?text=Hi%20Pranay%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setContactModalOpen(false)}
                    >
                      <span className="contact-modal-icon"><MessageCircle size={21} /></span>
                      <span><strong>WhatsApp</strong><small>Chat with me</small></span>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </section>
              </div>,
              document.body
            )}
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <a className="brand" href="#home">
              <span className="brand-mark">P.</span>
              <span>Pranay Ingole</span>
            </a>
            <p className="footer-disclaimer">
              © 2026 Pranay Ingole. All rights reserved.
            </p>
            <a className="back-to-top" href="#home" aria-label="Back to top">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </footer>
      </MotionConfig>
    </>
  );
}

export default App;
