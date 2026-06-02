import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const contactDetails = [
  {
    label: "Email",
    value: "Available through the contact form",
  },
  {
    label: "Location",
    value: "Ethiopia",
  },
  {
    label: "Availability",
    value: "Open to internships and project collaboration",
  },
];

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("Sending your message...");

    emailjs
      .sendForm(
        "service_xjl7wpy",
        "template_38x3tgi",
        form.current,
        "T033iB4ISh_0kqBl7"
      )
      .then(
        () => {
          setStatus("Message sent successfully. Thank you for reaching out.");
          form.current.reset();
        },
        () => {
          setStatus("Message could not be sent right now. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-copy">
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s build something thoughtful together.</h2>
          <p>
            If you are looking for a developer who values clean execution,
            collaboration, and continuous growth, I would be happy to connect.
          </p>

          <div className="contact-details">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="contact-detail-card">
                <strong>{detail.label}</strong>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Tell me a little about your project or opportunity"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>

          {status && <p className="status">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
