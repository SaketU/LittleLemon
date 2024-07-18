import React, { useState } from 'react';

function BookingForm({ submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      submitForm(formData);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.guests || formData.guests <= 0) errors.guests = "Number of guests must be at least 1";
    if (!formData.occasion) errors.occasion = "Occasion is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      {formErrors.date && <p>{formErrors.date}</p>}

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select time</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
      </select>
      {formErrors.time && <p>{formErrors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        required
      />
      {formErrors.guests && <p>{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {formErrors.occasion && <p>{formErrors.occasion}</p>}

      <button type="submit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;
