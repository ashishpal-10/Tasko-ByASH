import React from "react";
import "./Landing.css";

const features = [
  {
    number: "01",
    title: "CREATE TASKS",
    text: "Create and manage your daily tasks in seconds.",
  },
  {
    number: "02",
    title: "TRACK PROGRESS",
    text: "Keep track of pending and completed tasks easily.",
  },
  {
    number: "03",
    title: "STAY ORGANIZED",
    text: "Keep all your work organized in one simple dashboard.",
  },
];

const Landing = () => {
  return (
    <div className="landing">
      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="logo">
          TASK<span>O</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <a href="/login" className="login-btn">
            Login
          </a>

          <a href="/signup" className="start-btn">
            Get Started →
          </a>
        </div>

        <button className="menu-btn">
          ☰
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
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
            Tasko helps you create, organize and track your
            tasks so you can focus on what actually matters.
          </p>

          <div className="hero-buttons">
            <a href="/signup" className="primary-btn">
              Start Managing Tasks →
            </a>

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
          <div className="floating-card card-one">
            <span>✓</span>
            Task Completed
          </div>

          <div className="dashboard-card">
            <div className="dashboard-header">
              <div>
                <small>MY TASKS</small>
                <h3>Today's Tasks</h3>
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

          <div className="floating-card card-two">
            ⚡ Stay Productive
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <strong>10K+</strong>
          <span>Tasks Created</span>
        </div>

        <div className="stat">
          <strong>50K+</strong>
          <span>Tasks Completed</span>
        </div>

        <div className="stat">
          <strong>99.9%</strong>
          <span>Focus</span>
        </div>

        <div className="stat">
          <strong>24/7</strong>
          <span>Available</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
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

      {/* HOW IT WORKS */}
      <section className="workflow" id="how-it-works">
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
            <p>Add your task with a simple title and description.</p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Organize</h3>
            <p>Manage your tasks and keep your priorities clear.</p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Complete</h3>
            <p>Finish your work and mark your tasks as completed.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="about">
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

          <a href="/signup" className="cta-btn">
            Get Started — It's Free →
          </a>
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