import { useState, useEffect } from "react";
import "./App.css";
import mahad from "./assets/images/me3.jpg"


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

  
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

          {/* Hamburger Button for Mobile */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>

            {/* Navigation Menu */}
            <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
              <ul>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
            </nav>

          {/* Hero Section */}
          <section className="hero">
            <div className="hero-grid">
              {/* Hero Content */}
              <div className="hero-content">
                <h2>
                  Hi, I am <span>Mahad Munir!</span>
                </h2>
                <p>
                  A Final Year Computer Science Student specializing in AI, Data Science, and Quantum Computing.
                </p>
                <a href="#projects" className="btn">
                  View My Work
                </a>
              </div>

              {/* Hero Image with Social Icons */}
              <div className="hero-image">
                <img src={mahad} alt="Mahad Munir" />

                {/* Social Media Card */}
                <div className="card">
                  <ul>
                    <li className="iso-pro">
                      <span></span>
                      <span></span>
                      <span></span>
                      <a href="https://www.linkedin.com/in/mahad-munir">
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3333 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                          <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z"></path>
                        </svg>
                      </a>
                      <div className="text">LinkedIn</div>
                    </li>
                    <li className="iso-pro">
                      <span></span>
                      <span></span>
                      <span></span>
                      <a href="https://github.com/MMahad3">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>
                      <div className="text">Github</div>
                    </li>
                    <li className="iso-pro">
                      <span></span>
                      <span></span>
                      <span></span>
                      <a href="https://www.instagram.com/m.a.h.a.d.mm/">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"></path>
                        </svg>
                      </a>
                      <div className="text">Instagram</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

         

          {/* About Section */}
          <section id="about" className="about-me">
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
              <div className="project-card">
                <h3>{'MaadBazaar (Ecommerce Website)'}</h3>
                <p>
                  Built with React.js, Node.js, and SQL, this e-commerce website features product listings, user authentication, and a shopping cart. I applied database management concepts like indexing and query optimization to ensure efficient data handling, creating a seamless shopping experience with a responsive UI and optimized backend.
                </p>
              </div>
              <div className="project-card">
                <h3>Fifa WorldCup Predictor</h3>
                <p>
                A data science project predicting FIFA World Cup outcomes using a Kaggle dataset and machine learning techniques like linear and logistic regression. The project involves data preprocessing, feature engineering, and model evaluation to analyze team performance and predict match results.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experience-grid">
              <div className="experience-card">
                <h3>State Bank of Pakistan</h3>
                <p>
                <ul>
                 <li>Researched fake and genuine currency note detection using machine learning.</li>
                 <li>Analyzed computer vision techniques for currency authentication.</li>
                 <li>Identified challenges in mobile-based detection, including camera limitations.</li>
                 <li>Shifted focus to a research-based study due to technical constraints.</li>
                 <li>Collaborated with mentors and senior team members on research methodologies.</li>
                 <li>Explored algorithmic approaches for improving currency authentication.</li>
                 <li>Documented findings and presented insights on potential solutions.</li>
                </ul>
                </p>
              </div>
              <div className="experience-card">
                <h3>Interns Pakistan</h3>
                <p>
                <ul>
                 <li>Learned frontend development using HTML, CSS, and Bootstrap.</li>
                 <li>Developed responsive websites for cross-device compatibility.</li>
                 <li>Gained hands-on experience in modern web design and UI/UX principles.</li>
                 <li>Worked on styling and optimizing web pages for better user experience.</li>
                 <li>Improved skills in creating visually appealing and functional websites.</li>
                </ul>
                </p>
              </div>
            </div>
          </section>


          {/* Education Section */}
          <section id="education" className="education">
            <h2>Education</h2>
            <div className="education-grid">
              <div className="education-card">
                <h3>FAST-nuces</h3>
                <p>
                   
                </p>
              </div>
            </div>
          </section>



        
         {/* Contact Section */}
         <section id="contact" className="contact-me">
          <h2>Contact Me</h2>
           <p>If you have any questions or inquiries, feel free to reach out via email.</p>
  
           <a href="mailto:mahadmunir6@gmail.com?subject=Contact%20Me&body=Hello%2C%20I%20would%20like%20to%20connect." className="contact-button">
             <div className="svg-wrapper-1">
              <div className="svg-wrapper">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
               <path fill="none" d="M0 0h24v24H0z"></path>
               <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
               </svg>
             </div>
            </div>
            <span>Send</span>
          </a>
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
