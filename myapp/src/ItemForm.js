import React, { useState } from 'react';
import './ItemForm.css';

// Define mapping between display values and stored values
const hallmarkOptions = [
  { label: '18K750', value: '18K' },
  { label: '22K916', value: '22K' }
];

const name = 'Deep';

const ItemForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    HallMark: '',
    Rate: '',
    pcs: '',
    weight: ''
  });

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert pcs to integer value if it's a number field
    setFormData({
      ...formData,
      [name]: name === 'pcs' ? (value === '' ? '' : parseInt(value, 10)) : value
    });
  };

  // Handle changes in the Hallmark select dropdown
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = hallmarkOptions.find(option => option.label === selectedValue);
    setFormData({
      ...formData,
      HallMark: selectedOption ? selectedOption.value : ''
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      HallMark: '',
      Rate: '',
      pcs: '',
      weight: ''
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Select Item for {name}</h2>
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
          HallMark:
          <select
            name="HallMark"
            value={hallmarkOptions.find(option => option.value === formData.HallMark)?.label || ''}
            onChange={handleSelectChange}
            className="form-select"
            required
          >
            <option value="" disabled>Select HallMark</option>
            {hallmarkOptions.map(option => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Pcs:
          <input
            type="number"
            name="pcs"
            value={formData.pcs || ''}
            onChange={handleChange}
            className="form-input"
            min="1"
            step="1"
            required
          />
        </label>
        <label className="form-label">
          Weight (g):
          <input
            type="number"
            name="weight"
            value={formData.weight || ''}
            onChange={handleChange}
            className="form-input"
            step="0.01"
            required
          />
        </label>
        <button type="submit" className="form-button">Add Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
