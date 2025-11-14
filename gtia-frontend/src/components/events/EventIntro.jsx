import React from 'react';

const EventIntro = () => {
  return (
    <section className="event-intro-section" id="event-intro">
        <div className="event-banner">
            <div className="event-banner-content">
                <img className="event-banner-globe" src="/assets/images/events/events_globe.png" alt="Event globe" />
               <div className="event-banner-text">
                    <h1 className="event-intro-title">All year round, we are</h1>
                    <p className="event-intro-hollow-text">EVENTFUL.</p>
                </div>
            </div>
        </div>
        <div className="event-buttons">
            <a className="event-option" href="#annual-events" >
                Annual Events
            </a>
            <a className="event-option" href="#workshop-events" >
                Workshop Events
            </a>
            <a className="event-option" href="#internal-events" >
                Internal Events
            </a>
        </div>
    </section>
  );
};

export default EventIntro;