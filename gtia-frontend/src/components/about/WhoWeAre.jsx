// Swap to a public/ path when the photo is ready.
const IMAGE_SRC = "public/assets/images/about/about-us.jpeg";

/**
 * Who We Are — from Paper "GTIA About — Desktop" / Who We Are (64-0).
 * Left copy (560px bound) + right image slot (620×380, radius-lg).
 */
const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="who-we-are w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-12 px-8 pt-[150px] pb-20 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="box-border flex w-[min(560px,100%)] max-w-[560px] min-w-0 shrink-0 flex-col items-start gap-6 text-left">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-7 shrink-0 bg-gold" aria-hidden="true" />
            <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-ink-soft">
              ABOUT US
            </span>
          </div>

          <h1 className="m-0 w-full max-w-full whitespace-normal break-words font-sans text-h1 font-bold leading-[52px] tracking-[-0.02em] text-ink">
            Who are we?
          </h1>

          <p className="m-0 w-full max-w-[520px] font-sans text-body font-normal leading-7 text-ink-soft">
            Georgia Tech International Ambassadors is a student organization
            that welcomes incoming international students, celebrates cultures
            from around the world, and builds a home on campus for anyone who
            wants to belong globally.
          </p>
        </div>

        {IMAGE_SRC ? (
          <img
            src={IMAGE_SRC}
            alt="Georgia Tech International Ambassadors community"
            className="h-[240px] w-full shrink-0 rounded-[28px] object-cover sm:h-[300px] lg:ml-auto lg:h-[380px] lg:w-[620px] lg:max-w-[620px]"
          />
        ) : (
          <div
            className="h-[240px] w-full shrink-0 rounded-[28px] bg-blue-50 sm:h-[300px] lg:ml-auto lg:h-[380px] lg:w-[620px] lg:max-w-[620px]"
            role="img"
            aria-label="Who we are photo placeholder"
          />
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
