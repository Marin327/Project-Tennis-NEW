import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ReservationForm = ({ courtName, onReservationSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    selectedHour: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phoneNumber, email, message, selectedHour } = formData;

    if (!name || !phoneNumber || !email || !message || !selectedHour) {
      alert('Please fill in all fields.');
      return;
    }

    onReservationSubmit({
      courtName,
      ...formData
    });

    // Clear the form data
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
      selectedHour: ''
    });

    // Show success message
    setShowSuccessMessage(true);

    // Close the form after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      if (typeof onClose === 'function') {
        onClose();
      }
    }, 3000);
  };

  return (
    <motion.div
      className="reservation-form"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Reservation for {courtName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Selected Hour:
          <input
            type="text"
            name="selectedHour"
            value={formData.selectedHour}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Reserve</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">Reservation successful!</div>
      )}
    </motion.div>
  );
};

export default ReservationForm;