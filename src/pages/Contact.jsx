import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Handle form submission
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
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
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
