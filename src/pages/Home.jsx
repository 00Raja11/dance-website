import React from "react";

function Home() {
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

      {/* Intro Section */}
      <section id="introsection">
        <div className="intro-content">
          <h1>Discover Your Moves with Khan Dance Academy...</h1>
          <h2>Learn. Groove. Inspire.</h2>
        </div>
        <div className="intro-image">
          <img src="/static/1bg.jpg" alt="Welcome to Khan Dance Academy" />
        </div>
      </section>

      {/* Sponsor Section */}
<section id="Sponsorsection">
  <h2>Our Valued Sponsors</h2>
  <p>With the support of our sponsors, we bring our passion for dance to life and inspire others to move.</p>
  <div className="sponsor-logos">
    <a href="https://www.instagram.com/sponsor1" target="_blank" rel="noopener noreferrer">
      <img src="/static/img2/d1.jpg" alt="Sponsor 1 Logo" />
    </a>
    <a href="https://www.tiktok.com/about?lang=en" target="_blank" rel="noopener noreferrer">
      <img src="/static/img2/d2.jpg" alt="Sponsor 2 Logo" />
    </a>
    <a href="https://youtu.be/6jJ1Q0uyfP8?si=N5ON7m-SuEKw9HQd" target="_blank" rel="noopener noreferrer">
      <img src="/static/img2/d3.jpg" alt="Sponsor 3 Logo" />
    </a>
  </div>
</section>


      {/* Mission Section */}
      <section id="our-mission">
        <h2>Our Purpose & Vision</h2>
        <p>Empowering people to move, create, and grow together in a community fueled by passion, discipline, and self-expression, where every dancer’s journey is celebrated and creativity knows no bounds.</p>

        <div className="card-container">
          <div className="card">
            <h3>Dance Perfection</h3>
            <div className="card-img">
              <img src="/static/img/c1.jpg" alt="Dance Perfection" />
            </div>
            <div className="card-content">
              <p>Experience elite training programs designed to enhance technique, rhythm, and performance.</p>
            </div>
          </div>

          <div className="card">
            <h3>Freestyle Energy</h3>
            <div className="card-img">
              <img src="/static/img/c2.jpg" alt="Freestyle Energy" />
            </div>
            <div className="card-content">
              <p>Transform your energy into powerful moves and captivate every audience.</p>
            </div>
          </div>

          <div className="card">
            <h3>Expert Faculty</h3>
            <div className="card-img">
              <img src="/static/img/c3.jpg" alt="Expert Faculty" />
            </div>
            <div className="card-content">
              <p>Train under certified dancers and choreographers with years of global experience.</p>
            </div>
          </div>
        </div>
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

export default Home;
