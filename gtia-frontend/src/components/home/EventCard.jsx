import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({ title, date, image, description }) => {
  return (
    <Card className="event-card h-100">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <div className="event-date mb-2">{date}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard; 