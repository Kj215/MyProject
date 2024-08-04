import React, { useState } from 'react';
import './CustomerInfoForm.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can add the logic to send formData to your server
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Customer Info</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            className="form-textarea"
            required
          />
        </label>
        <label className="form-label">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
