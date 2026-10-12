import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Workflow,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { projects, skillGroups } from "./data/portfolio";
import { useTheme } from "./hooks/useTheme";
import "./styles/tokens.css";
import "./styles/global.css";
import "./App.css";

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

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" />
                SOFTWARE ENGINEER · BUILDING IN PUBLIC
              </div>

              <p className="hero-kicker">Hello, I'm Pranay.</p>

              <h1>
                Engineering
                <br />
                <span className="text-accent">what's next.</span>
              </h1>

              <p className="hero-role">
                Software Engineer <span>·</span> Bridging Dev &amp; Ops
              </p>

              <p className="hero-description">
                With Spring Boot, Kubernetes &amp; CI/CD — integrating AI into
                scalable backends and practical applications.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowRight size={17} />
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

            <div className="hero-visual" aria-label="Engineering focus">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="visual-card">
                <div className="visual-window-bar">
                  <span />
                  <span />
                  <span />
                  <p>engineering.md</p>
                </div>

                <div className="code-preview" aria-hidden="true">
                  <p><span className="code-muted">01</span> <span className="code-purple">const</span> engineer = {"{"}</p>
                  <p><span className="code-muted">02</span> &nbsp;build: <span className="code-green">"reliable"</span>,</p>
                  <p><span className="code-muted">03</span> &nbsp;automate: <span className="code-green">"delivery"</span>,</p>
                  <p><span className="code-muted">04</span> &nbsp;integrate: <span className="code-green">"AI"</span>,</p>
                  <p><span className="code-muted">05</span> {"}"};</p>
                  <p className="code-spacer"><span className="code-muted">06</span></p>
                  <p><span className="code-muted">07</span> <span className="code-purple">while</span> (learning) {"{"}</p>
                  <p><span className="code-muted">08</span> &nbsp;ship(betterSoftware);</p>
                  <p><span className="code-muted">09</span> {"}"}</p>
                </div>

                <div className="visual-status">
                  <span className="availability-dot" />
                  Curious by default. Always improving.
                </div>
              </div>

              <div className="floating-note floating-note-top">
                <Code2 size={18} />
                <span><strong>Build</strong><small>Software &amp; systems</small></span>
              </div>
              <div className="floating-note floating-note-bottom">
                <Workflow size={18} />
                <span><strong>Automate</strong><small>Deploy &amp; deliver</small></span>
              </div>
              <div className="hero-visual-caption">
                <BrainCircuit size={15} /> Exploring practical AI
              </div>
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
                title="Engineering with the bigger picture in mind."
              />
            </div>

            <div className="about-content">
              <p className="about-lead">
                I enjoy connecting the dots between application code,
                infrastructure, and the systems that bring software to life.
              </p>
              <p>
                My work spans backend engineering, full-stack development,
                data systems, and deployment automation. I care about clean
                boundaries, reliable APIs, meaningful tests, and understanding
                what happens beyond a successful local build.
              </p>
              <p>
                I'm also exploring how AI and machine learning can solve
                practical problems — with a focus on useful integrations
                rather than technology for its own sake.
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
                eyebrow="02 / SELECTED WORK"
                title="Projects built to solve real problems."
                description="A look at the systems, applications, and engineering challenges I've been working on."
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
              eyebrow="03 / CAPABILITIES"
              title="Different disciplines. One engineering mindset."
              description="The tools are important. Knowing how to connect them to solve real problems matters more."
            />

            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = [Code2, Workflow, BrainCircuit][index];

                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-icon"><Icon size={21} /></div>
                    <span className="skill-index">0{index + 1}</span>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <div className="tag-list">
                      {group.skills.map((skill) => (
                        <span className="tag" key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
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
              <h2>Have an interesting problem to solve?</h2>
              <p>
                I'm interested in thoughtful engineering, useful automation,
                and practical applications of AI. Let's connect.
              </p>
              <a className="button button-primary" href={`mailto:${email}`}>
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-links">
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
          <p>Building reliable software. Automating delivery. Exploring what's next.</p>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUpRight size={18} />
          </a>
          <span className="footer-copyright">© {2026} Pranay Ingole</span>
        </div>
      </footer>
    </>
  );
}

export default App;
