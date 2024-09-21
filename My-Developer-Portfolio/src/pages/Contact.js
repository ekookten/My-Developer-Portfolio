contact.js

import React, { useState } from "react";
import "../index.css"; // Import your CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
      // Clear form after submission
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="pageh2">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

