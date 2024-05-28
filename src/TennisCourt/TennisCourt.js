import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import ReservationForm from '../ReservationForm/ReservationForm';

const TennisCourt = ({ name, price, playTime, stadium, gameHour, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleReservation = () => {
    setShowForm(true);
  };

  const handleReservationSubmit = async (reservationData) => {
    try {
      // Logic for sending reservation to the backend
      await axios.post('/api/reservation', reservationData);
      console.log('Reservation sent:', reservationData);
      // Sending email notification
      await axios.post('/api/send-email', {
        recipient: reservationData.email,
        subject: 'Tennis Court Reservation',
        body: `Your reservation for tennis court "${name}" at ${gameHour} has been successfully made.`,
      });
      // Closing the form after successful reservation
      setShowForm(false);
      setReservationSuccess(true);
      // Navigate back to the home page after successful reservation
      navigate('/');
    } catch (error) {
      console.error('Error occurred during reservation:', error);
    }
  };

  return (
    <div className="tennis-court">
      {showForm ? (
        <ReservationForm
          courtName={name}
          onReservationSubmit={handleReservationSubmit}
        />
      ) : (
        <>
          <img src={image} alt={name} />
          <div className="court-details">
            <h3>{name}</h3>
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Play Time:</strong> {playTime}</p>
            <p><strong>Stadium:</strong> {stadium}</p>
            <p><strong>Game Hour:</strong> {gameHour}</p>
            <button onClick={handleReservation}>Reserve</button>

          </div>
        </>
      )}
      {reservationSuccess && (
        <div className="success-message">
          <p>Reservation successfully made. Check your email for confirmation.</p>
        </div>
      )}
    </div>
  );
};

export default TennisCourt;