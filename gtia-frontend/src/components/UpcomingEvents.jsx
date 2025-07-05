import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  // Sample event data, would be replaced with actual data from an API
  const events = [
    {
      id: 1,
      title: "Night Market",
      date: "November 8, 2025",
      image: "/placeholder.jpg",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      title: "Culture Fest",
      date: "December 10, 2025",
      image: "/placeholder.jpg",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 3,
      title: "Culture Fest",
      date: "December 10, 2025",
      image: "/placeholder.jpg",
      description: "Lorem ipsum dolor sit amet...",
    }
  ];

  return (
    <section id="upcoming-events" className="py-5">
      <Container>
        <div className="text-center mb-5 section-title-text">Upcoming Events</div>
        <Row className="g-4">
          {events.map((event) => (
            <Col key={event.id} md={6} lg={4}>
              <EventCard
                title={event.title}
                date={event.date}
                image={event.image}
                description={event.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default UpcomingEvents;
