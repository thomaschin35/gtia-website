import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import UpcomingEvents from '../components/UpcomingEvents';
import Testimonials from '../components/Testimonials';
import Companies from '../components/Companies';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import HomepageBgStackTop from '../components/HomepageBgStackTop';
import HomepageBgStackBottom from '../components/HomepageBgStackBottom';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HomepageBgStackTop />
      <HeroSection />
      <UpcomingEvents />
      <Testimonials />
      <Companies />
      <Sponsors />
      <Footer />
      <HomepageBgStackBottom />
    </div>
  );
};

export default Home; 