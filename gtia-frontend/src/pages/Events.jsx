import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCarousel from '../components/EventCarousel';

const Events = () => {
  return (
    <div className="events-page">
      <Header />
      <main>
        <div className="container py-5">
          <h1 className="mb-5">Events</h1>
          <EventCarousel />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events; 