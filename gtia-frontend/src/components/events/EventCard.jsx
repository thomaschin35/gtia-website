import React from "react";

const EventCard = ({ title, date, image, subtitle, description }) => {
  return (
    <div className="event-card-container">
      <div className="event-card">
        <div className="event-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="event-card-content">
          {/* NEED TO FIX THE POSITIONING OF THE DATE BADGE */}
          <div className="event-card-text">
            <div className="event-date-badge-epage mb-3">
              <span className="event-date-icon">
                <i className="bi bi-calendar-event"></i>
              </span>
              <span className="event-date-text">{date}</span>
            </div>
            <div className="event-card-title">
              <h2>{title}</h2>
            </div>
            <div className="event-card-subtitle">
              <h3>{subtitle}</h3>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
