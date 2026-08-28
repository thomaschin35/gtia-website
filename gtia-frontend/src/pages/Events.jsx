import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/events.scss';
import EventIntro from '../components/events/EventIntro';
import EventCarousel from '../components/events/EventCarousel';

// Make an array of events
const annualEvents = [
  {
    title: 'Night Market',
    date: 'November 8, 2025',
    image: '/assets/images/events/night-market.jpg',
    subtitle: 'Biggest event of the year',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'ANOTHER EVENT',
    date: 'November 8, 2025',
    image: '/assets/images/events/annual-events.png',
    subtitle: 'subtitle sadf',
    description: 'description asdfsa',
  },
];


const Events = () => {
  return (
    <div className="events-page">
      <Header />
      <EventIntro />
      <div className="event-carousels-container">
        <EventCarousel id="annual-events" title="🌍 Annual Events!" events={annualEvents} />
        <EventCarousel id="workshop-events" title="💡 Workshop Events!" events={annualEvents} />
        <EventCarousel id="internal-events" title="🎉 Internal Events!" events={annualEvents} />
      </div>
      <Footer />
    </div>
  );
};

export default Events; 