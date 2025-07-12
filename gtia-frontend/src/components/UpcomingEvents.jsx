import React from "react";
import { Container } from "react-bootstrap";
import EventCarousel from "./EventCarousel";

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
    <section id="upcoming-events" className="mt-4 mt-md-5">
      <Container>
        <div className="text-center mb-4 mb-md-5 section-title-text">Upcoming Events</div>
        <EventCarousel />
      </Container>
    </section>
  );
};

export default UpcomingEvents;
