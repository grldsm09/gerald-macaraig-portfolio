import { useEffect, useState, type ReactNode } from "react"

const PROFILE = {
  email: "macaraiggerald97@gmail.com",
  github: "https://github.com/grldsm09",
  linkedin:
    "https://www.linkedin.com/in/macaraig-gerald/?isSelfProfile=true",
  resume: "/gerald-macaraig-resume.pdf",
}

type IconName = "arrow" | "check" | "code" | "cpu" | "document" | "download" | "external" | "github" | "layers" | "linkedin" | "mail" | "menu" | "spark" | "terminal" | "x"

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    cpu: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3M10 10h4v4h-4z" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6zM14 2v5h5M9 13h6M9 17h6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.9a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 6.9a4.8 4.8 0 0 0-1 3.4v4M8 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4zM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </>
    ),
    terminal: (
      <>
        <path d="m4 7 5 5-5 5M12 17h8" />
      </>
    ),
    x: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Monogram() {
  return (
    <span className="monogram" aria-hidden="true">
      <span>G</span>
      <i>/</i>
      <span>M</span>
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  id,
}: {
  eyebrow: string
  title: string
  copy?: string
  id?: string
}) {
  return (
    <div className="section-heading" id={id}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>
}

function ButtonLink({
  href,
  children,
  secondary = false,
  download = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
  download?: boolean
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
      download={download || undefined}
    >
      {children}
    </a>
  )
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: "github" | "linkedin"
}) {
  return (
    <a
      className="icon-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon name={icon} />
    </a>
  )
}

const skillGroups = [
  {
    icon: "code" as IconName,
    title: "Programming Languages",
    skills: ["Python", "Rust", "Java", "C / C++", "SQL", "JavaScript"],
  },
  {
    icon: "spark" as IconName,
    title: "AI & Language Models",
    skills: [
      "Gemma workflows",
      "Error analysis",
      "RAG",
      "BM25 ranking",
      "Vector search",
      "Prompt & API integration",
    ],
  },
  {
    icon: "layers" as IconName,
    title: "Computer Vision & Data",
    skills: [
      "YOLOv11",
      "OpenCV",
      "Tesseract OCR",
      "Pandas",
      "Image processing",
      "Object detection",
    ],
  },
  {
    icon: "terminal" as IconName,
    title: "Application Development",
    skills: [
      "PyQt6",
      "Python desktop apps",
      "Workflow automation",
      "API integration",
      "Developer tools",
    ],
  },
  {
    icon: "document" as IconName,
    title: "Databases & Retrieval",
    skills: [
      "SQLite",
      "MySQL",
      "PostgreSQL",
      "Local retrieval",
      "Information ranking",
    ],
  },
  {
    icon: "cpu" as IconName,
    title: "Hardware & Engineering",
    skills: [
      "Raspberry Pi",
      "Arduino",
      "Microcontrollers",
      "Circuit analysis",
      "Hardware integration",
    ],
  },
]

const projects = [
  {
    number: "02",
    category: "Computer Vision · AI · Electrical Engineering",
    title: "Smart Schematic Diagram Analyzer",
    description:
      "A vision-based system designed to analyze electrical schematics, detect components, verify diagram structure, and provide corrective guidance using retrieval-augmented generation.",
    tags: ["Python", "YOLOv11n", "OpenCV", "Tesseract", "RAG", "Raspberry Pi"],
    visual: "schematic" as const,
    featured: true,
  },
  {
    number: "01",
    category: "Rust · AI Systems · Developer Tools",
    title: "AI-Assisted Error Analysis",
    description:
      "Developer tooling that connects crash classification, BM25 retrieval, vector search, and Gemma workflows to support structured troubleshooting.",
    tags: ["Rust", "Gemma", "BM25", "Vector Search"],
    visual: "debug" as const,
    featured: false,
  },
  {
    number: "03",
    category: "Inventory · Process Automation",
    title: "Asset Monitoring System",
    description:
      "A structured system for organizing asset information, monitoring inventory records, and supporting efficient recordkeeping with Excel integration.",
    tags: ["Python", "Excel", "Automation"],
    visual: "inventory" as const,
    featured: false,
  },
]

function ProjectVisual({
  type,
}: {
  type: "schematic" | "debug" | "inventory"
}) {
  if (type === "schematic") {
    return (
      <div className="project-visual thesis-visual">
        <div className="thesis-gallery">
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}thesis-analysis.jpeg`}
              alt="Annotated electrical schematic analysis identifying a component to replace"
              loading="lazy"
            />
            <figcaption>Computer vision analysis</figcaption>
          </figure>
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}thesis-device.jpeg`}
              alt="Hardware prototype for the electrical schematic analyzer"
              loading="lazy"
            />
            <figcaption>Hardware prototype</figcaption>
          </figure>
        </div>
      </div>
    )
  }
  if (type === "debug") {
    return (
      <div className="project-visual debug-visual">
        <img
          src={`${import.meta.env.BASE_URL}error-handling.jpg`}
          alt="Crash handling screen in the app, offering AI-assisted troubleshooting and an optional drafted fix"
          loading="lazy"
        />
      </div>
    )
  }
  return (
    <div className="project-visual inventory-visual">
      <img
        src={`${import.meta.env.BASE_URL}asset-management-dashboard.png`}
        alt="Asset management database dashboard built by Gerald Macaraig"
        loading="lazy"
      />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap">
          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label="Gerald S. Macaraig home"
          >
            <Monogram />
            <span>Gerald S. Macaraig</span>
          </a>
          <nav
            id="main-navigation"
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <SocialLink
              href={PROFILE.github}
              label="GitHub profile"
              icon="github"
            />
            <SocialLink
              href={PROFILE.linkedin}
              label="LinkedIn profile"
              icon="linkedin"
            />
            <ButtonLink href={PROFILE.resume} download>
              <Icon name="download" size={16} /> Download resume
            </ButtonLink>
          </div>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-glow" />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker" id="home">
                <span /> Computer Engineering · Software · AI Systems
              </div>
              <h1>
                Engineering intelligent solutions through{" "}
                <span className="gradient-text">code and automation.</span>
              </h1>
              <div className="identity">
                <strong>Gerald S. Macaraig</strong>
                <span>
                  Automation Developer · Python Developer · Rust Programmer · AI
                  Systems Developer
                </span>
              </div>
              <p>
                I develop software tools and intelligent systems that connect
                programming, automation, and AI—from automated error analysis to
                computer vision and practical engineering applications.
              </p>
              <div className="hero-actions">
                <ButtonLink href="#projects">
                  Explore my projects <Icon name="arrow" />
                </ButtonLink>
                <ButtonLink href={PROFILE.resume} secondary download>
                  <Icon name="download" size={17} /> Download resume
                </ButtonLink>
                <a href="#contact" className="text-link">
                  Get in touch <Icon name="arrow" size={16} />
                </a>
              </div>
              <div className="availability">
                <i />
                <span>
                  Open to opportunities in software, automation, and AI systems
                </span>
              </div>
            </div>

            <div
              className="hero-system"
              aria-label="Abstract visualization of an intelligent software pipeline"
            >
              <div className="system-orbit orbit-one" />
              <div className="system-orbit orbit-two" />
              <div className="system-card main-system-card">
                <div className="system-header">
                  <span>
                    <i /> SYSTEM_PIPELINE
                  </span>
                  <small>ACTIVE</small>
                </div>
                <div className="code-window">
                  <span>
                    <i>01</i>
                    <code>
                      <b>fn</b> analyze(input: &amp;Signal) {"{"}
                    </code>
                  </span>
                  <span>
                    <i>02</i>
                    <code>
                      &nbsp;&nbsp;<b>let</b> matches = retrieve(input);
                    </code>
                  </span>
                  <span>
                    <i>03</i>
                    <code>&nbsp;&nbsp;rank(matches).explain()</code>
                  </span>
                  <span>
                    <i>04</i>
                    <code>{"}"}</code>
                  </span>
                </div>
                <div className="pipeline">
                  <span>
                    <Icon name="terminal" size={16} />
                    <b>Input</b>
                    <small>Crash log</small>
                  </span>
                  <i />
                  <span>
                    <Icon name="layers" size={16} />
                    <b>Retrieve</b>
                    <small>BM25 + vector</small>
                  </span>
                  <i />
                  <span>
                    <Icon name="spark" size={16} />
                    <b>Analyze</b>
                    <small>AI system</small>
                  </span>
                </div>
              </div>
              <div className="floating-card float-python">
                <span>PY</span>
                <div>
                  <b>Python</b>
                  <small>Automation layer</small>
                </div>
              </div>
              <div className="floating-card float-rust">
                <span>RS</span>
                <div>
                  <b>Rust</b>
                  <small>Systems logic</small>
                </div>
              </div>
              <div className="signal-card">
                <span>CONFIDENCE</span>
                <b>Structured output</b>
                <div>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
          <div className="tech-strip" aria-label="Core technologies">
            {[
              "Python",
              "Rust",
              "BM25",
              "Computer Vision",
              "AI Integration",
              "GitHub",
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="about-layout">
            <div>
              <SectionHeading
                id="about"
                eyebrow="01 · About"
                title="Building at the intersection of software and intelligence."
              />
              <div className="about-copy">
                <p>
                  I'm a Computer Engineering graduate from the University of
                  Cabuyao with a strong interest in software development,
                  automation, AI systems, and computer vision.
                </p>
                <p>
                  My technical work includes Python applications, Rust
                  programming, retrieval pipelines, automated error analysis,
                  and an AI-assisted electrical schematic analyzer.
                </p>
                <p>
                  I approach development with an engineering mindset: understand
                  the problem, evaluate possible solutions, build practical
                  tools, and continuously improve the result.
                </p>
              </div>
              <div className="education-card">
                <div className="education-icon">
                  <Icon name="document" />
                </div>
                <div>
                  <span>Education</span>
                  <strong>Bachelor of Science in Computer Engineering</strong>
                  <small>University of Cabuyao · 2022–2026</small>
                </div>
              </div>
            </div>
            <div className="principles">
              {[
                [
                  "01",
                  "Software Engineering",
                  "Practical, maintainable software tools built around real problems.",
                  "code",
                ],
                [
                  "02",
                  "AI Systems & Retrieval",
                  "Language models, ranking algorithms, and intelligent analysis integrated into useful workflows.",
                  "spark",
                ],
                [
                  "03",
                  "Automation & Computer Vision",
                  "Systems that process information, understand visual inputs, and reduce repetitive work.",
                  "layers",
                ],
              ].map(([number, title, copy, icon]) => (
                <article className="principle-card" key={title}>
                  <span className="card-number">{number}</span>
                  <div className="principle-icon">
                    <Icon name={icon as IconName} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <SectionHeading
            id="skills"
            eyebrow="02 · Capabilities"
            title="Technical stack"
            copy="Technologies and tools I use to develop, automate, analyze, and improve software systems."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-title">
                  <span>
                    <Icon name={group.icon} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="tools-row">
            <span>Development tools</span>
            <div>
              {[
                "Git",
                "GitHub",
                "VS Code",
                "Linux",
                "Microsoft Excel",
              ].map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title-row" id="projects">
            <SectionHeading
              eyebrow="03 · Selected work"
              title="Engineering in practice"
              copy="Projects that show how I approach software, AI, and engineering challenges."
            />
            <a className="text-link desktop-link" href="#code">
              Explore code <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                } ${
                  project.number === "01"
                    ? "error-analysis-card"
                    : project.number === "03"
                      ? "asset-monitoring-card"
                      : ""
                }`}
                key={project.number}
              >
                <ProjectVisual type={project.visual} />
                <div className="project-content">
                  <div className="project-meta">
                    <span>PROJECT {project.number}</span>
                    <small>{project.category}</small>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.featured && (
                    <div className="workflow">
                      <span>Capture</span>
                      <i />
                      <span>Detect</span>
                      <i />
                      <span>Construct</span>
                      <i />
                      <span>Verify</span>
                      <i />
                      <span>Feedback</span>
                    </div>
                  )}
                  <div className="project-footer">
                    <div>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      aria-label={`Ask about ${project.title}`}
                    >
                      <Icon name="arrow" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
            <article className="project-card automation-card">
              <div className="automation-mark">
                <Icon name="terminal" size={28} />
                <span>04 / ONGOING</span>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>PYTHON · WORKFLOW AUTOMATION</span>
                </div>
                <h3>Automation & Productivity Tools</h3>
                <p>
                  A growing collection of practical work focused on repetitive
                  task automation, data processing, and clearer technical
                  workflows.
                </p>
                <div className="project-footer">
                  <div>
                    <Tag>Python</Tag>
                    <Tag>APIs</Tag>
                    <Tag>Data</Tag>
                  </div>
                  <a href="#contact" aria-label="Ask about automation tools">
                    <Icon name="arrow" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section experience-section">
          <SectionHeading
            id="experience"
            eyebrow="04 · Journey"
            title="Experience & technical journey"
          />
          <div className="timeline">
            {[
              {
                date: "2026",
                title: "Rust Programmer / AI Systems Developer",
                org: "Technical project experience",
                copy: "Developed AI-assisted error-handling solutions, integrated Gemma workflows for crash analysis, and implemented BM25 and vector retrieval pipelines for error matching.",
                tags: ["Python", "Rust", "Gemma", "BM25", "Debugging"],
              },
              {
                date: "Project",
                title: "Asset Management Assistant",
                org: "Database development",
                copy: "Built a database to organize asset records and support asset tracking and day-to-day recordkeeping.",
                tags: ["Database Design", "Asset Tracking", "Recordkeeping"],
              },
              {
                date: "2022 — 2026",
                title: "BS Computer Engineering",
                org: "University of Cabuyao",
                copy: "Studied software, electronics, computer systems, and engineering fundamentals. Developed a capstone combining computer vision, AI, and hardware.",
                tags: ["Computer Vision", "Embedded Systems", "Software"],
              },
              {
                date: "Internship",
                title: "IT Support Intern",
                org: "Vmpowered Corp.",
                copy: "Supported hardware and software troubleshooting, IP configuration, operating system setup, and technical issue documentation.",
                tags: ["IT Support", "Networking", "Troubleshooting"],
              },
              {
                date: "2021",
                title: "Material Handler",
                org: "Nexperia",
                copy: "Supported material handling and inventory operations in a semiconductor manufacturing environment while working within established production procedures.",
                tags: ["Operations", "Inventory", "Manufacturing"],
              },
            ].map((item) => (
              <article className="timeline-entry" key={item.title}>
                <div className="timeline-marker">
                  <span />
                </div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <div>
                    <h3>{item.title}</h3>
                    <b>{item.org}</b>
                  </div>
                  <p>{item.copy}</p>
                  <div>
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <SectionHeading
            eyebrow="05 · Process"
            title="How I build solutions"
            copy="A deliberate engineering workflow, from understanding the system to improving the result."
          />
          <div className="process-grid">
            {[
              [
                "01",
                "Understand",
                "Define the problem, requirements, constraints, and intended outcome.",
              ],
              [
                "02",
                "Analyze",
                "Investigate the data, system behavior, and suitable technical approaches.",
              ],
              [
                "03",
                "Develop",
                "Build a practical solution using software, automation, AI, or hardware.",
              ],
              [
                "04",
                "Test & refine",
                "Evaluate the implementation, investigate errors, and improve reliability.",
              ],
            ].map(([number, title, copy], index) => (
              <article className="process-card" key={number}>
                <span>{number}</span>
                <div className="process-symbol">
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                {index < 3 && (
                  <b className="process-connector">
                    <Icon name="arrow" />
                  </b>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section code-section" id="code">
          <div className="code-panel">
            <div className="code-copy">
              <span className="eyebrow">06 · Open source</span>
              <h2>Explore my code</h2>
              <p>
                Repositories, experiments, and documented builds will live here.
                Repository cards are reserved for verified project details as
                documented source code becomes available.
              </p>
              <ButtonLink href={PROFILE.github}>
                <Icon name="github" /> Visit my GitHub{" "}
                <Icon name="external" size={15} />
              </ButtonLink>
            </div>
            <div className="repo-preview">
              <div className="repo-head">
                <Icon name="github" size={22} />
                <span>
                  github.com/<b>grldsm09</b>
                </span>
                <i>PROFILE</i>
              </div>
              <div className="repo-placeholder">
                <span>
                  <Icon name="terminal" />
                </span>
                <h3>Repository showcase</h3>
                <p>
                  Connect verified repositories here to display real project
                  descriptions and technology tags.
                </p>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section">
          <div className="contact-glow" />
          <div className="contact-copy" id="contact">
            <span className="eyebrow">07 · Let's connect</span>
            <h2>Have a technical challenge in mind?</h2>
            <p>
              I'm interested in opportunities involving software development,
              automation, AI systems, and practical engineering solutions. Let's
              discuss where I can contribute.
            </p>
            <div className="contact-actions">
              <ButtonLink href={`mailto:${PROFILE.email}`}>
                <Icon name="mail" /> Send an email
              </ButtonLink>
              <ButtonLink href={PROFILE.resume} secondary download>
                <Icon name="download" /> Download resume
              </ButtonLink>
            </div>
          </div>
          <div className="contact-details">
            <a href={`mailto:${PROFILE.email}`}>
              <span>
                <Icon name="mail" />
              </span>
              <div>
                <small>Email</small>
                <b>{PROFILE.email}</b>
              </div>
              <Icon name="arrow" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <span>
                <Icon name="github" />
              </span>
              <div>
                <small>GitHub</small>
                <b>github.com/grldsm09</b>
              </div>
              <Icon name="external" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <span>
                <Icon name="linkedin" />
              </span>
              <div>
                <small>LinkedIn</small>
                <b>linkedin.com/in/macaraig-gerald</b>
              </div>
              <Icon name="external" />
            </a>
            <p>Connect through email, GitHub, or LinkedIn.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <Monogram />
            <div>
              <b>Gerald S. Macaraig</b>
              <span>Automation · Software · AI Systems</span>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a href={`#${item.toLowerCase()}`} key={item}>
                  {item}
                </a>
              ),
            )}
          </nav>
          <div>
            <SocialLink
              href={PROFILE.github}
              label="GitHub profile"
              icon="github"
            />
            <SocialLink
              href={PROFILE.linkedin}
              label="LinkedIn profile"
              icon="linkedin"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Gerald S. Macaraig</span>
          <span>Built with curiosity. Driven by problem-solving.</span>
        </div>
      </footer>
    </div>
  )
}
