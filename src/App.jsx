const highlights = [
  'Built and maintained MERN applications with secure authentication and scalable backend APIs.',
  'Improved product quality through bug fixing, UI enhancements, and performance-focused delivery.',
  'Collaborated with engineering teams in remote workflows using Git, GitHub, and structured updates.',
]

const experience = [
  {
    role: 'Software Engineer (MERN Stack)',
    company: 'Botx Automations',
    period: 'Apr 2025 - Present',
    location: 'Kochi, Remote',
    points: [
      'Developing and maintaining full-stack applications using the MERN stack, Next.js, and SQL databases.',
      'Working with engineering stakeholders to gather requirements, provide updates, and keep delivery aligned with product goals.',
      'Contributing through Git and GitHub-based collaboration, code reviews, and organized development workflows.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Innobyte Services',
    period: 'Jan 2025 - Feb 2025',
    location: 'Delhi, Remote',
    points: [
      'Built full-stack web features across frontend and backend layers using modern JavaScript tools.',
      'Improved user experience through bug fixes, smoother UI behavior, and practical performance tuning.',
    ],
  },
]

const projects = [
  {
    name: 'Integrated Home Management System',
    type: 'Full-stack MERN application',
    repo: 'https://github.com/fayiz-123/IHMS_Deployment',
    summary:
      'A smart services platform for managing electricity, plumbing, and waste collection workflows in one place.',
    points: [
      'Implemented OTP-based email verification with Nodemailer and Google OAuth for trusted user access.',
      'Added PWA support to deliver real-time service updates across devices.',
      'Deployed with a Render backend and Vercel frontend using CI/CD-friendly release flows.',
    ],
  },
  {
    name: 'E-commerce Website',
    type: 'MERN storefront',
    repo: 'https://github.com/fayiz-123/InnoByte-Services-E-commerce-Task',
    summary:
      'A full-stack shopping experience with product browsing, cart management, wishlists, profiles, and order handling.',
    points: [
      'Built structured APIs and JWT-based authentication for secure routes and session management.',
      'Designed key commerce flows for customer usability and maintainable backend operations.',
    ],
  },
]

const skills = {
  core: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  backend: ['JWT Auth', 'API Integration', 'Mongoose ODM', 'MySQL', 'PostgreSQL'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel', 'Netlify'],
}

const education = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    school: 'Al-Ameen College, Edathala',
    meta: '2021 - 2024',
  },
  {
    degree: 'Higher Secondary',
    school: 'Govt. Boys HSS, Aluva',
    meta: '2019 - 2021',
  },
]

export default function App() {
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <main className="portfolio">
        <section className="hero card">
          <div className="hero-copy">
            <p className="eyebrow">MERN Stack Developer</p>
            <h1>Fayiz Muhammed</h1>
            <p className="hero-text">
              Full-stack developer focused on building reliable web products with
              clean interfaces, practical backend systems, and a strong team
              mindset.
            </p>

            <div className="hero-actions">
              <a href="mailto:muhammedfayiz59@gmail.com" className="button primary">
                Email Me
              </a>
              <a href="#projects" className="button secondary">
                View Projects
              </a>
            </div>

            <div className="social-links" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/fayiz-muhammed-64a1a4292/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/fayiz-123"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                GitHub
              </a>
            </div>

            <ul className="quick-meta">
              <li>Kochi, Kerala</li>
              <li>+91 8593091453</li>
              <li>Open to full-stack opportunities</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="photo-card">
              <div className="photo-frame">
                <img
                  src="/profile-car.jpeg"
                  alt="Portrait of Fayiz Muhammed"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid-two">
          <article className="card intro-card">
            <p className="section-tag">Profile</p>
            <h2>Building full-stack products with clarity and momentum.</h2>
            <p>
              I build modern applications with the MERN stack, create secure APIs,
              improve user experience, and collaborate smoothly in team-based
              workflows. My work combines frontend polish with backend discipline
              so products stay useful, maintainable, and ready to scale.
            </p>
          </article>

          <article className="card highlight-card">
            <p className="section-tag">Strengths</p>
            <div className="highlight-list">
              {highlights.map((item) => (
                <div key={item} className="highlight-item">
                  <span className="highlight-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="card timeline-section" id="experience">
          <div className="section-heading">
            <p className="section-tag">Experience</p>
            <h2>Professional journey</h2>
          </div>

          <div className="timeline">
            {experience.map((job) => (
              <article key={job.role} className="timeline-item">
                <div className="timeline-top">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card" id="projects">
          <div className="section-heading">
            <p className="section-tag">Projects</p>
            <h2>Selected work</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View GitHub Repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid-two">
          <article className="card">
            <div className="section-heading">
              <p className="section-tag">Skills</p>
              <h2>Technical toolkit</h2>
            </div>

            <div className="skill-groups">
              {Object.entries(skills).map(([label, items]) => (
                <div key={label} className="skill-group">
                  <h3>{label}</h3>
                  <div className="chip-wrap">
                    {items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="section-heading">
              <p className="section-tag">Education</p>
              <h2>Academic background</h2>
            </div>

            <div className="education-list">
              {education.map((item) => (
                <div key={item.degree} className="education-item">
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <span>{item.meta}</span>
                </div>
              ))}
            </div>

            <div className="contact-panel">
              <p className="section-tag">Contact</p>
              <a href="mailto:muhammedfayiz59@gmail.com">muhammedfayiz59@gmail.com</a>
              <a href="tel:+918593091453">+91 8593091453</a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
