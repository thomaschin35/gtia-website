// Swap to a public/ path when the photo is ready.
const IMAGE_SRC = "public/assets/images/about/exec-board.PNG";

/**
 * Executive Board — from Paper "GTIA About — Desktop" / Executive Board (82-0).
 * Image left (620×380) + copy right (560px bound). Not the old passport cards.
 */
const ExecutiveBoard = () => {
  return (
    <section id="eboard" className="executive-board w-full scroll-mt-28 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-12 px-8 py-24 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {IMAGE_SRC ? (
          <img
            src={IMAGE_SRC}
            alt="GTIA executive board"
            className="h-[240px] w-full shrink-0 rounded-[28px] object-cover sm:h-[300px] lg:h-[380px] lg:w-[620px] lg:max-w-[620px]"
          />
        ) : (
          <div
            className="h-[240px] w-full shrink-0 rounded-[28px] bg-blue-50 sm:h-[300px] lg:h-[380px] lg:w-[620px] lg:max-w-[620px]"
            role="img"
            aria-label="Executive board photo placeholder"
          />
        )}

        <div className="box-border flex w-[min(560px,100%)] max-w-[560px] min-w-0 shrink-0 flex-col items-start gap-6 text-left">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-7 shrink-0 bg-gold" aria-hidden="true" />
            <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-ink-soft">
              LEADERSHIP
            </span>
          </div>

          <h2 className="m-0 w-full max-w-full whitespace-normal break-words font-sans text-h1 font-bold leading-[52px] tracking-[-0.02em] text-ink">
            Our Executive Board
          </h2>

          <p className="m-0 w-full max-w-[520px] font-sans text-body font-normal leading-7 text-ink-soft">
            The executive board sets the direction of GTIA — from welcome week
            to cultural nights — and works alongside every committee so
            ambassadors and incoming students have a place to land.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBoard;
