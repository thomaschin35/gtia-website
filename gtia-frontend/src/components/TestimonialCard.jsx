import React from "react";

const TestimonialCard = ({ avatar, text, name }) => {
  return (
    <div className="keen-slider__slide">
      <div className="testimonial-content">
        <div className="testimonial-avatar">
          <img src={avatar} alt="Testimonial Avatar" />
        </div>
        <div className="testimonial-text">
          <span className="testimonial-text-content">"{text}"</span>
          <span className="testimonial-name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 