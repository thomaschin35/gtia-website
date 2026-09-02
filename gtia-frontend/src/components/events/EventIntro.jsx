const GLOBE_SRC = "/assets/images/home/globe.PNG";

/**
 * Events hero — from Paper "GTIA Events — Desktop" / Hero (C6-0).
 * White section + blue-25 Eventful banner; globe sits in a 220px circle.
 */
const EventIntro = () => {
  return (
    <section className="event-intro w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-8 pt-[150px] pb-[72px] md:px-16">
        <div className="flex w-full max-w-[1312px] flex-col items-center justify-center gap-8 rounded-[28px] bg-blue-25 px-8 py-12 sm:px-12 md:flex-row md:gap-12 md:px-16">
          <div className="flex min-w-0 flex-col items-start gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-7 shrink-0 bg-gold" aria-hidden="true" />
              <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-ink-soft">
                EVENTS
              </span>
            </div>

            <p className="m-0 font-sans text-h3 font-medium leading-7 text-ink-soft">
              All year round, we are
            </p>

            <h1 className="m-0 w-full max-w-full whitespace-normal break-words font-sans text-[40px] font-bold leading-[44px] tracking-[-0.03em] text-ink sm:text-display sm:leading-[72px]">
              EVENTFUL.
            </h1>
          </div>

          <div
            role="img"
            aria-label="Illustrated globe representing GTIA events"
            className="relative size-[160px] shrink-0 rounded-pill sm:size-[220px]"
            style={{
              backgroundImage:
                "radial-gradient(circle farthest-corner at 38% 32%, var(--color-blue-50) 0%, var(--color-blue-100) 55%, var(--color-blue) 100%)",
            }}
          >
            <div
              className="absolute inset-[7px] rounded-pill bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${GLOBE_SRC})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventIntro;
