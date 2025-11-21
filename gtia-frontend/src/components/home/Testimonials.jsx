import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    avatar: "/assets/images/people/Liam-Van-den-Bogert.jpg",
    text: "I've found some of my closest friends in GTIA, and I'm inspired everyday by the all the motivated, friendly, and multicultural members of the club. Being part of GTIA not only makes you more culturally aware, but also inspires you to branch out and connect with people who grew up in a completely different part of the world.",
    name: "Liam Van den Bogert, Class of 2025",
  },
  {
    avatar: "/assets/images/people/Marie-LinkedIn.jpg",
    text: "I am very grateful that I discovered and joined GTIA in my first semester freshman year. As a rather shy international student who has never really been in the U.S., I met so many cool friends who offer different backgrounds and perspectives! I understand that it is not easy to move from across the world here; being an ambassador fulfills me because I get to help build welcoming friendly environments for new international students. I also expanded my soft skills through being current President and Former VP Marketing!",
    name: "Marie Wibisana, Class of 2027",
  },
  {
    avatar: "/assets/images/people/Lorenzo-Niat.jpeg",
    text: "Even though I haven’t been part of GTIA for very long, I’ve already found a community that supports me and lifts me up. I’m so glad I decided to join - they know how to work hard and still have fun while doing it!",
    name: "Lorenzo Niat, Class of 2029",
  },
  {
    avatar: "/assets/images/people/Victory-Ladipo.jpeg",
    text: "GTIA is a fun and enriching experience. Here I was able to meet and befriend lots of people from different parts of the world both Domestic and International students. Here you can grow socially, professionally, and through cultural enrichment.",
    name: "Victory Ladipo, Class of 2026",
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
    <section id="testimonials" className="testimonials-section testimonials-viewport">
      <div className="container px-3 px-md-5 h-100 d-flex flex-column">
        <div className="section-title-text text-center mb-3 mb-md-4">What They Say...</div>
        <div className="flex-grow-1 d-flex align-items-center">
          <div ref={sliderRef} className="keen-slider w-100">
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
      </div>
    </section>
  );
};

export default Testimonials; 