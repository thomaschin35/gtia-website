import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "./TestimonialCard";


const nemoAvatar = "/assets/images/nemo.png";

const testimonialsData = [
  {
    avatar: nemoAvatar,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Nemo, Class of 2025",
  },
  {
    avatar: nemoAvatar,
    text: "This is another great testimonial from someone else who really enjoyed their time with GTIA. It was a wonderful experience that I'll never forget.",
    name: "Momo, Class of 2026",
  },
  {
    avatar: nemoAvatar,
    text: "A third testimonial to show how the carousel works. GTIA is the best club on campus for international students and ambassadors alike!",
    name: "Dori, Class of 2027",
  },
];

const Testimonials = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: {
            perView: 1,
            spacing: 30,
          },
        },
        '(min-width: 1200px)': {
          slides: {
            perView: 1,
            spacing: 50,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="testimonials-section py-4 py-md-5">
      <div className="container px-3 px-md-5">
        <div className="section-title-text text-center mb-4 mb-md-5">What They Say...</div>
        <div ref={sliderRef} className="keen-slider">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 