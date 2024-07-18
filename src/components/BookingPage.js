import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div>
      <h1>Book a Table</h1>
      <p>Please fill out the form below to reserve a table.</p>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
