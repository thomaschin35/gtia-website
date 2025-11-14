import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EventCard from "./EventCard";

// Event Carousel component needs to take in id, title, and events, events should an array where each event has these: Title, Event title, event subttle, event description, event image, and event date

const EventCarousel = ({ id, title, events }) => {
  // TAKEN FROM KEEN SLIDER DOCUMENTATION
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="event-carousel py-4 py-md-5" id={id}>
    <div className="section-title-text mb-4">{title}</div>

      <div className="event-carousel-container">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {events.map((event, index) => (
              <div className="keen-slider__slide" key={index}>
                <EventCard
                  title={event.title}
                  date={event.date}
                  image={event.image}
                  subtitle={event.subtitle}
                  description={event.description}
                />
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>

      {/* <h3>{eventTitle}</h3> */}
    </div>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default EventCarousel;
