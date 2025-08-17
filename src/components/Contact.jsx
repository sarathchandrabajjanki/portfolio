import React from "react";
import "../styles/contact.css";
import profilePic from "../assets/sarath.jpg"; // 👉 place your photo inside src/assets/

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-photo">
          <img src={profilePic} alt="Sarath Chandra" />
        </div>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sarathchandrabajjanki@gmail.com">
              sarathchandrabajjanki@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 9505376423
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sarathchandrabajjanki/"
              target="_blank"
              rel="noreferrer"
            >
              Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
