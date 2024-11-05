import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Here you can add your form submission logic, like sending data to an API
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Name
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Subject
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </label>
      <label>
        Message
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
