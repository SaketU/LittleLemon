import React, { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ContactPage from './ContactPage';
import ConfirmedBooking from './ConfirmedBooking';

const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    return fetchAPI(today);
};

const updateTimes = (state, date) => {
    return fetchAPI(date);
};

const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

function Main() {
    const [availableTimes, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return updateTimes(state, action.date);
            case 'INITIALIZE_TIMES':
                return initializeTimes();
            default:
                return state;
        }
    }, []);

    useEffect(() => {
        dispatch({ type: 'INITIALIZE_TIMES' });
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </main>
    );
}

export default Main;
