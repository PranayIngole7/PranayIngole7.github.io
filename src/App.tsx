import { useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  Workflow,
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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

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
                Software Engineer <span className="title-divider">|</span> Backend Development
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
                <a
                  className="button button-secondary"
                  href="/multi-media/pranay-ingole-resume.pdf"
                  download="Pranay-Ingole-Resume.pdf"
                >
                  Download Resume <Download size={17} />
                </a>
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

              <div className="about-location">
                <MapPin size={16} /> Pune, Maharashtra, India
              </div>

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
              description="Languages, frameworks, and tools used across application development, data systems, and software delivery."
            />

            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = [Code2, Workflow, BrainCircuit][index];

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
                      {group.skills.map((skill) => (
                        <span className="tag" key={skill}>{skill}</span>
                      ))}
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
                eyebrow="04 / EXPERIENCE & EDUCATION"
                title="Experience, training & education."
                description="Professional experience, focused training, and the academic foundation behind my engineering work."
              />
            </div>

            <div className="journey-list">
              <article className="journey-item">
                <div className="journey-marker"><CheckCircle2 size={18} /></div>
                <div>
                  <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
                  <h3>Software Engineer · FEV India</h3>
                  <p>
                    May 2022 – October 2023. Contributed to software engineering
                    in the automotive domain while building a foundation
                    in collaborative development and engineering practices.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-marker"><CheckCircle2 size={18} /></div>
                <div>
                  <span className="eyebrow">PROFESSIONAL DEVELOPMENT</span>
                  <h3>DevOps Training · Sunbeam CDAC, Pune</h3>
                  <p>
                    Completed DevOps training at Sunbeam CDAC, Pune
                    (September – November 2025), focusing on delivery
                    automation and modern software infrastructure.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-marker"><CheckCircle2 size={18} /></div>
                <div>
                  <span className="eyebrow">POSTGRADUATE EDUCATION</span>
                  <h3>PG-Diploma · Mobile Computing</h3>
                  <p>
                    Completed a Post Graduate Diploma in Mobile Computing
                    with 66.86%.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-marker"><CheckCircle2 size={18} /></div>
                <div>
                  <span className="eyebrow">UNDERGRADUATE EDUCATION</span>
                  <h3>B.E. · Computer Science</h3>
                  <p>
                    Bachelor of Engineering in Computer Science from
                    Sant Gadge Baba Amravati University (SGBAU), with 70%.
                  </p>
                </div>
              </article>

              <article className="journey-item">
                <div className="journey-marker"><CheckCircle2 size={18} /></div>
                <div>
                  <span className="eyebrow">CONTINUOUS LEARNING</span>
                  <h3>Machine Learning &amp; AI</h3>
                  <p>
                    Building foundational machine learning knowledge through
                    structured coursework, hands-on notebooks, and practical
                    experimentation.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell section-padding" id="contact">
          <div className="container contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">05 / CONTACT</span>
              <h2>Have a challenge in mind? Let's solve it.</h2>
              <p>
                Interested in thoughtful engineering, useful automation,
                and practical applications of AI. Let's connect.
              </p>
              <a className="button button-primary" href={`mailto:${email}`}>
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-links">
              <a href="tel:+917822051743">
                <span className="contact-link-icon"><Phone size={19} /></span>
                <span><small>PHONE</small><strong>+91 7822051743</strong></span>
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
