import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const features = [
  {
    number: "01",
    title: "CREATE TASKS",
    text: "Add tasks in seconds with title, description, priority, and due dates. Stay on top of everything.",
  },
  {
    number: "02",
    title: "TRACK PROGRESS",
    text: "Visualize your workflow with status tags — pending, in-progress, or completed at a glance.",
  },
  {
    number: "03",
    title: "STAY ORGANIZED",
    text: "Filter by priority, sort by due date, and keep your entire workload structured in one place.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Product Manager",
    text: "Tasko replaced 3 different apps for me. Simple, fast, and exactly what I needed.",
  },
  {
    name: "James L.",
    role: "Freelancer",
    text: "I finally know what I'm working on every day. The dashboard is clean and distraction-free.",
  },
  {
    name: "Priya M.",
    role: "Student",
    text: "Managing assignments and projects has never been easier. Highly recommend it.",
  },
];

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="landing">
      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="logo">
          TASK<span>O</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="start-btn" onClick={() => setMenuOpen(false)}>Get Started →</Link>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home" ref={addSectionRef}>
        <div className="hero-content">
          <div className="hero-badge">
            ✦ SIMPLE TASK MANAGEMENT
          </div>

          <h1>
            ORGANIZE YOUR WORK.
            <br />
            <span>GET THINGS DONE.</span>
          </h1>

          <p>
            Tasko helps you create, organize, and track your
            tasks so you can focus on what actually matters.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">
              Start Managing Tasks →
            </Link>

            <a href="#features" className="secondary-btn">
              See Features
            </a>
          </div>

          <div className="hero-note">
            ✓ Easy to use &nbsp;&nbsp; ✓ Fast &nbsp;&nbsp; ✓ Organized
          </div>
        </div>

        {/* DASHBOARD CARD */}
        <div className="hero-visual">
          <div className="floating-card card-one pulse">
            <span>✓</span>
            Task Completed
          </div>

          <div className="dashboard-card">
            <div className="dashboard-header">
              <div>
                <small>MY TASKS</small>
                <h3>Today&apos;s Tasks</h3>
              </div>

              <div className="progress-circle">
                80%
              </div>
            </div>

            <div className="task-item completed">
              <span className="checkbox">✓</span>
              <div>
                <strong>Finish Portfolio</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="task-item">
              <span className="checkbox"></span>
              <div>
                <strong>Create API</strong>
                <small>Backend</small>
              </div>
            </div>

            <div className="task-item">
              <span className="checkbox"></span>
              <div>
                <strong>Push to GitHub</strong>
                <small>Development</small>
              </div>
            </div>

            <div className="progress-bar">
              <div></div>
            </div>

            <div className="dashboard-footer">
              <span>3 Tasks</span>
              <strong>1 Completed</strong>
            </div>
          </div>

          <div className="floating-card card-two pulse">
            ⚡ Stay Productive
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats reveal" ref={addSectionRef}>
        <div className="stat">
          <strong>100+</strong>
          <span>Tasks Created</span>
        </div>

        <div className="stat">
          <strong>500+</strong>
          <span>Tasks Completed</span>
        </div>

        <div className="stat">
          <strong>99%</strong>
          <span>Uptime</span>
        </div>

        <div className="stat">
          <strong>24/7</strong>
          <span>Available</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section reveal" id="features" ref={addSectionRef}>
        <div className="section-heading">
          <span>WHY TASKO?</span>

          <h2>
            EVERYTHING YOU NEED
            <br />
            TO STAY <em>ORGANIZED.</em>
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.number}>
              <div className="feature-number">
                {feature.number}
              </div>

              <div className="feature-icon">
                {feature.number === "01"
                  ? "＋"
                  : feature.number === "02"
                  ? "↗"
                  : "✦"}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

              <span className="arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section reveal" id="testimonials" ref={addSectionRef}>
        <div className="section-heading">
          <span>WHAT PEOPLE SAY</span>

          <h2>
            LOVED BY
            <br />
            <em>REAL USERS.</em>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="workflow reveal" id="how-it-works" ref={addSectionRef}>
        <div className="workflow-title">
          <span>HOW IT WORKS</span>

          <h2>
            THREE STEPS.
            <br />
            <em>ZERO CONFUSION.</em>
          </h2>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Create</h3>
            <p>Add your task with a title, description, priority, and due date.</p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Organize</h3>
            <p>Manage your tasks, set priorities, and keep your workflow clear.</p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Complete</h3>
            <p>Finish your work, mark tasks as done, and stay productive.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal" ref={addSectionRef}>
        <div className="cta-content">
          <span>READY?</span>

          <h2>
            GET THINGS
            <br />
            <em>DONE.</em>
          </h2>

          <p>
            Stop keeping your tasks in your head.
            Start managing them with Tasko.
          </p>

          <Link to="/signup" className="cta-btn">
            Get Started — It&apos;s Free →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          TASK<span>O</span>
        </div>

        <p>Task management made simple.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        <div className="copyright">
          © 2026 Tasko. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
