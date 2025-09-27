import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log("Form submitted:", formData);

    // Example: send to backend API (if you have one)
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div>
      <section id="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Please fill out the form below and we will get back to you shortly.</p>

          {success && (
            <div className="success-message">
              <p>✅ Your message has been sent successfully!</p>
            </div>
          )}

          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
