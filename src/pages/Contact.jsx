import React from "react";

function Contact() {
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

      {/* Contact Section */}
      <section id="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Please fill out the form below and we will get back to you shortly.</p>

          {/* Success Message Example */}
          {/* <div className="success-message">
            <p>✅ Your message has been sent successfully!</p>
          </div> */}

          <form id="contact-form" action="/contact" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder="Your name" autoComplete="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Your email" autoComplete="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required placeholder="Write your message here"></textarea>

            <button type="submit">Send Message</button>
          </form>
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

export default Contact;
