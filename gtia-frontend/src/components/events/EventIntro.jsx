/**
 * Events intro — compact page title on the same blue-25 wash as Annual Events.
 */
const EventIntro = () => {
  return (
    <section className="event-intro w-full bg-blue-25">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-8 pt-[150px] pb-6 md:px-16">
        <div className="flex w-full max-w-[1256px] flex-col items-start gap-[16px] text-left">
          <h1 className="m-0 w-full max-w-full whitespace-normal break-words font-sans text-[40px] font-bold leading-[44px] tracking-[-0.02em] text-ink sm:text-h1 sm:leading-[52px]">
            Events
          </h1>
          <p className="m-0 w-full font-sans text-body font-normal leading-7 text-ink-soft">
            Annual celebrations, workshops, and ambassador socials — all year
            round.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventIntro;
