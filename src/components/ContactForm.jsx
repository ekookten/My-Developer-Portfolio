import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title is-3">Contact Us</h1>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="notification is-success">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
