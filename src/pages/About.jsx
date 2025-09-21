import React from "react";

function About() {
  return (
    <div>
      {/* Navbar */}
      <nav id="navbar">
        <div id="logo">
          <img className="logo" src="/static/img/logo.png" alt="Khan Dance Logo" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section id="about" className="about-section">
        <h1>Who We Are</h1>
        <p>
          At <strong>Khan Dance Academy</strong>, we are more than just a school – we are a vibrant community of dancers, creators, and dreamers. Our passion is bringing rhythm, energy, and creativity to life.
        </p>

        <ul className="about-points">
          <li>
            <span className="icon">💃</span>
            <strong>Express Yourself:</strong> Showcase your unique style and creativity through dance.
          </li>
          <li>
            <span className="icon">🎓</span>
            <strong>Learn & Grow:</strong> Improve your skills with guidance from professional instructors.
          </li>
          <li>
            <span className="icon">🌟</span>
            <strong>Shine On Stage:</strong> Perform confidently and make every moment unforgettable.
          </li>
          <li>
            <span className="icon">🤝</span>
            <strong>Community & Fun:</strong> Join a supportive community where every dancer belongs.
          </li>
        </ul>

        <a className="button" href="/contact">Join Us Today</a>
      </section>


      {/* Footer */}
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-card">
            <h3>Contact</h3>
            <p>📧 info@khandance.com</p>
            <p>📞 +91-9876543210</p>
          </div>

          <div className="footer-card">
            <h3>Explore</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-card">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
