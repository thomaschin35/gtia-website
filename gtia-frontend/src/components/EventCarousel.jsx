import React, { useState, useRef } from 'react';

const events = [
  {
    id: 1,
    title: 'Night Market',
    date: 'November 8, 2025',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...',
  },
  {
    id: 2,
    title: 'Culture Fest',
    date: 'December 10, 2025',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 3,
    title: 'Spring Gala',
    date: 'March 15, 2026',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 4,
    title: 'Winter Ball',
    date: 'January 20, 2026',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 5,
    title: 'Food Festival',
    date: 'April 10, 2026',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 6,
    title: 'Music Night',
    date: 'May 5, 2026',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 7,
    title: 'Art Expo',
    date: 'June 1, 2026',
    image: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet...'
  }
];

const VISIBLE_RANGE = 1; // Show 1 card on each side (3 total)

const EventCarousel = () => {
  const [active, setActive] = useState(3); // Start in the middle
  const dragStartX = useRef(null);
  const dragging = useRef(false);

  const mod = (n, m) => ((n % m) + m) % m; // true modulo for wrapping

  // Drag/Swipe Handlers
  const handleDragStart = (e) => {
    dragging.current = true;
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  };
  const handleDragMove = (e) => {
    if (!dragging.current) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        setActive((prev) => mod(prev + 1, events.length));
        dragging.current = false;
      } else if (diff > 0) {
        setActive((prev) => mod(prev - 1, events.length));
        dragging.current = false;
      }
    }
  };
  const handleDragEnd = () => {
    dragging.current = false;
    dragStartX.current = null;
  };

  const handleNext = () => {
    setActive((prev) => mod(prev + 1, events.length));
  };
  const handlePrev = () => {
    setActive((prev) => mod(prev - 1, events.length));
  };

  return (
    <div
      className="event-slider"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
    >
      {events.map((event, idx) => {
        // Calculate shortest offset for infinite carousel
        let offset = idx - active;
        if (offset > events.length / 2) offset -= events.length;
        if (offset < -events.length / 2) offset += events.length;
        let style = {};
        let isActive = idx === active;
        if (isActive) {
          style = {
            transform: 'none',
            zIndex: 10,
            filter: 'none',
            opacity: 1,
            pointerEvents: 'none',
            cursor: 'default',
          };
        } else if (Math.abs(offset) <= VISIBLE_RANGE) {
          style = {
            transform: `translateX(${540 * offset}px) scale(${1 - 0.2 * Math.abs(offset)})`,
            zIndex: 10 - Math.abs(offset),
            filter: 'blur(0.8px)',
            opacity: 0.9,
            pointerEvents: 'auto',
            cursor: 'pointer',
          };
        } else if (offset < 0) {
          style = {
            transform: 'translateX(-900px)',
            zIndex: 1,
            filter: 'blur(2px)',
            opacity: 0,
            pointerEvents: 'none',
          };
        } else if (offset > 0) {
          style = {
            transform: 'translateX(900px)',
            zIndex: 1,
            filter: 'blur(2px)',
            opacity: 0,
            pointerEvents: 'none',
          };
        }
        return (
          <div
            className="event-carousel-item"
            key={event.id}
            style={{
              ...style,
              backgroundImage: `url('assets/images/test.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              width: '506px',
              height: '308px',
            }}
            onClick={() => !isActive && Math.abs(offset) <= VISIBLE_RANGE && setActive(idx)}
          >
            {/* Date badge at top right */}
            <div className="event-date-badge">
              <span className="event-date-icon">
                <i className="bi bi-calendar-event"></i>
              </span>
              <span className="event-date-text">{event.date}</span>
            </div>
            {/* Bottom text area */}
            <div className="event-card-bottom-text">
              <h2 className="event-card-title">{event.title}</h2>
              <div className="event-card-subtitle">{event.description}</div>
            </div>
          </div>
        );
      })}
      {/* <button className="event-carousel-btn event-carousel-btn-next" onClick={handleNext}>&gt;</button>
      <button className="event-carousel-btn event-carousel-btn-prev" onClick={handlePrev}>&lt;</button> */}
    </div>
  );
};

export default EventCarousel; 