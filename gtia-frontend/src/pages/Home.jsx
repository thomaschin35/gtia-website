import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Testimonials from '../components/home/Testimonials';
import Companies from '../components/home/Companies';
import Sponsors from '../components/home/Sponsors';
import JoinDiscord from '../components/home/JoinDiscord';
import Footer from '../components/Footer';
import HomepageBgStackTop from '../components/home/HomepageBgStackTop';
import HomepageBgStackBottom from '../components/home/HomepageBgStackBottom';
import DecorativePath from '../components/home/DecorativePath';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HomepageBgStackTop />
      <HeroSection />
      <div className="events-testimonials-viewport events-testimonials-desktop-spacing position-relative">
        {/* Desktop decorative path - behind event carousel */}
        <DecorativePath className="decorative-path-desktop" />
        <UpcomingEvents />
        <Testimonials />
      </div>
      <Companies />
      <Sponsors />
      {/* <JoinDiscord /> */}
      <Footer />
      <HomepageBgStackBottom />
    </div>
  );
};

export default Home; 