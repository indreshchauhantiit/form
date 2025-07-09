import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    feedback: '',
    areas: {
      support: false,
      development: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in formData.areas) {
      setFormData((prev) => ({
        ...prev,
        areas: { ...prev.areas, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Feedback Form</h2>

      <div>
        <label>Name: <span style={{ color: 'red' }}>*</span></label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label>E-mail Address:</label><br />
        <input
          type="email"
          name="email"
          placeholder="ex: myname@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <div style={{ fontSize: 'small' }}>example@example.com</div>
      </div>

      <div>
        <label>Country:</label><br />
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Please Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>

      <div>
        <label>Phone Number:</label><br />
        <input
          type="tel"
          name="phone"
          placeholder="(000) 000-0000"
          value={formData.phone}
          onChange={handleChange}
        />
        <div style={{ fontSize: 'small' }}>Please enter a valid phone number.</div>
      </div>

      <div>
        <label>Feedback Quality:</label><br />
        <label><input type="radio" name="feedback" value="Bad" onChange={handleChange} /> Bad</label><br />
        <label><input type="radio" name="feedback" value="Average" onChange={handleChange} /> Average</label><br />
        <label><input type="radio" name="feedback" value="Good" onChange={handleChange} /> Good</label>
      </div>

      <div>
        <label>Areas to Select:</label><br />
        <label><input type="checkbox" name="support" onChange={handleChange} /> Support</label><br />
        <label><input type="checkbox" name="development" onChange={handleChange} /> Development</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
