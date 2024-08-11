"use client";
import React, { useState } from 'react';

const AddSchool = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    email_id: '',
    image: null
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      if (files && files.length > 0) {
        const file = files[0];
        setFormData({ ...formData, [name]: file });
        setImagePreview(URL.createObjectURL(file));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.contact || formData.contact.length < 10) newErrors.contact = 'Contact number must be at least 10 digits';
    if (!formData.email_id) newErrors.email_id = 'Email is required';
    if (!formData.image) newErrors.image = 'Image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newSchool = {
      ...formData,
      image: formData.image ? URL.createObjectURL(formData.image) : null
    };

    const storedSchools = JSON.parse(localStorage.getItem('schools')) || [];
    const updatedSchools = [...storedSchools, newSchool];
    localStorage.setItem('schools', JSON.stringify(updatedSchools));

    setFormData({
      name: '',
      address: '',
      city: '',
      state: '',
      contact: '',
      email_id: '',
      image: null
    });
    setImagePreview(null);

    alert('School has been submitted successfully!');

  };

  return (
    <div className="container">
      <h1>Add School</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <p className="error">{errors.state}</p>}
        </div>

        <div>
          <label htmlFor="contact">Contact Number</label>
          <input
            id="contact"
            name="contact"
            type="text"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>

        <div>
          <label htmlFor="email_id">Email</label>
          <input
            id="email_id"
            name="email_id"
            type="email"
            value={formData.email_id}
            onChange={handleChange}
          />
          {errors.email_id && <p className="error">{errors.email_id}</p>}
        </div>

        <div>
          <label htmlFor="image">School Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {errors.image && <p className="error">{errors.image}</p>}
          {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSchool;
