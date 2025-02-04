import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {/* Splash Screen */}
      {showSplash && (
        <div className="splash-screen">
          <h1>Welcome to Mahad's Portfolio</h1>
          <div className="loader"></div>
        </div>
      )}

      {/* Main Content */}
      {!showSplash && (
        <>
          {/* Header with Navigation */}
          <header className="header">
            <h1 className="logo">MAHAD MUNIR</h1>
            <nav>
              <ul className="nav-links">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
            </nav>
          </header>

          {/* Hero Section */}
          
          <section className="hero">
            <div className="hero-content">
              <h2> Hi, I am <span>Mahad Munir !</span></h2>
              <p>A Final Year Computer Science Student specializing in AI, Data Science, and Quantum Computing</p>
              <a href="#projects" className="btn">View My Work</a>
            </div>
          </section>

         

          {/* About Section */}
          <section id="about" className="section">
            <h2>About Me</h2>
            <p>
              I'm a final year Computer Science student passionate about building scalable and user-friendly applications. With a solid foundation in AI, Data Science, and Quantum Computing, I enjoy solving complex problems and creating innovative solutions. Currently, I am working on a computer vision-based anomaly detection system for public safety in my final-year project.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Contributing in Public Safety: A Computer Vision Approach for Anomaly Detection</h3>
                <p>
                  This project focuses on detecting anomalies in live CCTV footage using a hybrid vision transformer. It aims to contribute to public safety by identifying abnormal behaviors in public spaces.
                </p>
              </div>
              <div className="project-card">
                <h3>Quantum Secure Direct Communication</h3>
                <p>
                  Exploring QSDC with the Ping-Pong protocol for secure message transmission without key exchange. This project is focused on high-security applications such as military communications.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2>Contact Me</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 Mahad Munir. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;