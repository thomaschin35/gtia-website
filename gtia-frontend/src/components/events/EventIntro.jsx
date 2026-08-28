import React from "react";
import { scrollToElement } from "../../utils.jsx";

const EventIntro = () => {
  return (
    <section className="event-intro-section" id="event-intro">
      <div className="event-banner">
        <div className="event-banner-content">
          <img
            className="event-banner-globe"
            src="/assets/images/events/events_globe.png"
            alt="Event globe"
          />
          <div className="event-banner-text">
            <h1 className="event-intro-title">All year round, we are</h1>
            <p className="event-intro-hollow-text">EVENTFUL.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventIntro;
