import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Testimonials from '../components/home/Testimonials';
import Companies from '../components/home/Companies';
import Sponsors from '../components/home/Sponsors';
import Footer from '../components/Footer';
import DecorativePath from '../components/home/DecorativePath';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <div className="events-testimonials-viewport events-testimonials-desktop-spacing position-relative">
        {/* Desktop decorative path - behind event carousel */}
        <DecorativePath className="decorative-path-desktop" />
        <UpcomingEvents />
        <Testimonials />
      </div>
      <Companies />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
