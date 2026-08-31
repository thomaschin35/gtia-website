import React from "react";
import { Container } from "react-bootstrap";
import EventCarousel from "./EventCarousel";
import DecorativePath from "./DecorativePath";

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
    <section id="upcoming-events" className="upcoming-events-viewport position-relative">
      {/* Mobile decorative path - behind title */}
      <DecorativePath className="decorative-path-mobile" />
      <Container className="h-100 d-flex flex-column">
        <div className="text-center mb-3 mb-md-4 section-title-text position-relative">Upcoming Events</div>
        <div className="flex-grow-1 d-flex align-items-center">
          <EventCarousel />
        </div>
      </Container>
    </section>
  );
};

export default UpcomingEvents;
