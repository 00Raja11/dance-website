import React from "react";

function Services() {
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

      {/* Services Section */}
      <section id="services">
        <h1>Dance Classes & Programs</h1>
        <p>Join our workshops and classes to explore your passion, master new moves, and express yourself through dance.</p>


        <div className="services-container">
          <div className="service-card">
            <img src="/static/img/ballet.jpg" alt="Ballet Class" />
            <h3>Ballet Classes</h3>
            <p>Master the elegance of ballet and express yourself with poise under expert guidance.</p>
            <a className="button" href="/contact">Enroll Now</a>
          </div>

          <div className="service-card">
            <img src="/static/img/hiphop.jpg" alt="Hip-Hop Class" />
            <h3>Hip-Hop Classes</h3>
            <p>Feel the beat and move with confidence in our high-energy hip-hop classes.</p>
            <a className="button" href="/contact">Enroll Now</a>
          </div>

          <div className="service-card">
            <img src="/static/img/contemporary.jpg" alt="Contemporary Class" />
            <h3>Contemporary Dance</h3>
            <p>Unleash your creativity through modern and contemporary dance movements.</p>
            <a className="button" href="/contact">Enroll Now</a>
          </div>

          <div className="service-card">
            <img src="/static/img/private.jpg" alt="Private Coaching" />
            <h3>Private Coaching</h3>
            <p>Receive personalized guidance to master your dance techniques and reach your full potential.</p>
            <a className="button" href="/contact">Enroll Now</a>
          </div>

          <div className="service-card">
            <img src="/static/img/workshops.jpg" alt="Workshops" />
            <h3>Dance Workshops</h3>
            <p>Experience dynamic workshops featuring special guest choreographers and industry insights.</p>
            <a className="button" href="/contact">Enroll Now</a>
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

export default Services;
