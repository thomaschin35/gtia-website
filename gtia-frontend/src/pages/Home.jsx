import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import UpcomingEvents from '../components/UpcomingEvents';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSection />
        <UpcomingEvents />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 