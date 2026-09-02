import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, Footer } from "../components/home";
import EventIntro from "../components/events/EventIntro";
import EventCarousel from "../components/events/EventCarousel";
import {
  annualEvents,
  workshopEvents,
  internalEvents,
} from "../components/events/eventsData";

const Events = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    const frame = requestAnimationFrame(scroll);
    const timeout = window.setTimeout(scroll, 100);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [hash]);

  return (
    <div className="events min-h-screen bg-white font-sans text-ink">
      <Nav />
      <EventIntro />
      <EventCarousel
        id="annual-events"
        eyebrow="THIS YEAR"
        title="Annual Events"
        events={annualEvents}
        className="bg-blue-25"
      />
      <EventCarousel
        id="workshop-events"
        eyebrow="ON CAMPUS"
        title="Workshop Events"
        events={workshopEvents}
        className="bg-white"
      />
      <EventCarousel
        id="internal-events"
        eyebrow="FOR AMBASSADORS"
        title="Internal Events"
        events={internalEvents}
        className="bg-blue-25"
      />
      <Footer />
    </div>
  );
};

export default Events;
