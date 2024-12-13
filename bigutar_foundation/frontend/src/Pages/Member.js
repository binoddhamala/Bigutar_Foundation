
/*import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Member.css';
import Layout from '../Components/Layout/Layout';

const Member = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    gender: 'male',
    father_name: '',
    grandfather_name: '',
    permanent_state: '',
    permanent_district: '',
    permanent_municipality: '',
    permanent_ward_no: '',
    temporary_state: '',
    temporary_district: '',
    temporary_municipality: '',
    temporary_ward_no: '',
    date_of_birth: '',
    phone_number: '',
    email: '',
    blood_group: '',
    agree_terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      agree_terms: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/form-submissions/', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      alert('There was an error submitting the form');
    }
  };

  return (
    <Layout>
    <div className="form-container">
      <h3>Become a Member</h3>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="father_name" value={formData.father_name} onChange={handleChange} placeholder="Father's Name" required />
        <input type="text" name="grandfather_name" value={formData.grandfather_name} onChange={handleChange} placeholder="Grandfather's Name" required />
        <input type="text" name="permanent_state" value={formData.permanent_state} onChange={handleChange} placeholder="Permanent State" required />
        <input type="text" name="permanent_district" value={formData.permanent_district} onChange={handleChange} placeholder="Permanent District" required />
        <input type="text" name="permanent_municipality" value={formData.permanent_municipality} onChange={handleChange} placeholder="Permanent Municipality" required />
        <input type="text" name="permanent_ward_no" value={formData.permanent_ward_no} onChange={handleChange} placeholder="Permanent Ward No" required />
        <input type="text" name="temporary_state" value={formData.temporary_state} onChange={handleChange} placeholder="Temporary State" />
        <input type="text" name="temporary_district" value={formData.temporary_district} onChange={handleChange} placeholder="Temporary District" />
        <input type="text" name="temporary_municipality" value={formData.temporary_municipality} onChange={handleChange} placeholder="Temporary Municipality" />
        <input type="text" name="temporary_ward_no" value={formData.temporary_ward_no} onChange={handleChange} placeholder="Temporary Ward No" />
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="blood_group" value={formData.blood_group} onChange={handleChange} placeholder="Blood Group" required />
        <label>
          <input type="checkbox" checked={formData.agree_terms} onChange={handleCheckboxChange} />
          I agree to the terms and conditions
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </Layout>
  );
};

export default Member;*/
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Member.css';
import Layout from '../Components/Layout/Layout';

const Member = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    gender: 'male',
    father_name: '',
    grandfather_name: '',
    permanent_state: '',
    permanent_district: '',
    permanent_municipality: '',
    permanent_ward_no: '',
    temporary_state: '',
    temporary_district: '',
    temporary_municipality: '',
    temporary_ward_no: '',
    date_of_birth: '',
    phone_number: '',
    email: '',
    blood_group: '',
    agree_terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      agree_terms: e.target.checked,
    }));
  };

  // Simple validation functions
  const validateForm = () => {
    const newErrors = {};

    // Validate full name (must not be empty)
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full Name is required';
    }

    // Validate phone number (must match a valid phone pattern)
    const phonePattern = /^[0-9]{10}$/; // Change this pattern as per your phone number format
    if (!phonePattern.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone number must be 10 digits';
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate date of birth (user must be at least 18 years old)
    const dob = new Date(formData.date_of_birth);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18) {
      newErrors.date_of_birth = 'You must be at least 18 years old';
    }

    // Validate checkbox (terms and conditions)
    if (!formData.agree_terms) {
      newErrors.agree_terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    // If no errors, return true to proceed with submission
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/form-submissions/', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      alert('There was an error submitting the form');
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h3>Become a Member</h3>
        <form onSubmit={handleSubmit} className="form">
          
          {/* Personal Details Section */}
          <div className='section'>
            <legend>Personal Details</legend>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            {errors.full_name && <span className="error">{errors.full_name}</span>}

            <select name="gender"  value={formData.gender} onChange={handleChange}  required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="text"
              name="father_name"
              value={formData.father_name}
              onChange={handleChange}
              placeholder="Father's Name"
              required
            />
            
            <input
              type="text"
              name="grandfather_name"
              value={formData.grandfather_name}
              onChange={handleChange}
              placeholder="Grandfather's Name"
              required
            />
            
            <input
              placeholder="Date of Birth"
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
            {errors.date_of_birth && <span className="error">{errors.date_of_birth}</span>}

            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            {errors.phone_number && <span className="error">{errors.phone_number}</span>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="text"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="Blood Group"
              required
            />
        </div>

          {/* Permanent Address Section */}
          <div className="section">
            <legend>Permanent Address</legend>
            <input
              type="text"
              name="permanent_state"
              value={formData.permanent_state}
              onChange={handleChange}
              placeholder="State"
              required
            />

            <input
              type="text"
              name="permanent_district"
              value={formData.permanent_district}
              onChange={handleChange}
              placeholder="District"
              required
            />

            <input
              type="text"
              name="permanent_municipality"
              value={formData.permanent_municipality}
              onChange={handleChange}
              placeholder="Municipality"
              required
            />

            <input
              type="text"
              name="permanent_ward_no"
              value={formData.permanent_ward_no}
              onChange={handleChange}
              placeholder="Ward No"
              required
            />
          </div>

          {/* Temporary Address Section */}
          <div className="section">
            <legend>Temporary Address</legend>
            <input
              type="text"
              name="temporary_state"
              value={formData.temporary_state}
              onChange={handleChange}
              placeholder=" State"
            />

            <input
              type="text"
              name="temporary_district"
              value={formData.temporary_district}
              onChange={handleChange}
              placeholder=" District"
            />

            <input
              type="text"
              name="temporary_municipality"
              value={formData.temporary_municipality}
              onChange={handleChange}
              placeholder="Municipality"
            />

            <input
              type="text"
              name="temporary_ward_no"
              value={formData.temporary_ward_no}
              onChange={handleChange}
              placeholder="Ward No"
            />
          </div>

          {/* Terms and Conditions Section */}
          <label>
            <input
              type="checkbox"
              checked={formData.agree_terms}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
          {errors.agree_terms && <span className="error">{errors.agree_terms}</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Member;


