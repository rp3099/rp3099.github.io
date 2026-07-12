import "./FormStyles.css";
import React, { useState } from 'react';

// Static hosting (GitHub Pages) can't run server code, so the form composes a
// mailto: link and hands off to the visitor's email client. All user input is
// URL-encoded to avoid mailto header injection.
const RECIPIENT = 'rudrapatel3099@gmail.com';

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio contact from ${form.name || 'a website visitor'}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `${form.message}\n`;
    window.location.href =
      `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={update} required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={update} required />
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" value={form.subject} onChange={update} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Type your message" value={form.message} onChange={update} required />
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
