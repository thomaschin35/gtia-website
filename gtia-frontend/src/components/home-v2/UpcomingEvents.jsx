import EventCard from "./EventCard";
import { upcomingEvents } from "./eventsData";

/**
 * Upcoming Events — Paper Events section (1I-0): centered heading + 3-card row.
 */
const UpcomingEvents = () => {
  return (
    <section className="w-full bg-blue-25">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-14 px-8 py-[104px] md:px-16">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
            WHAT'S HAPPENING
          </span>
          <h2 className="m-0 font-sans text-[32px] font-bold tracking-[-0.01em] text-ink sm:text-h1 sm:leading-[54px]">
            Upcoming Events
          </h2>
        </div>

        <div className="flex w-full flex-wrap items-stretch justify-center gap-7">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
