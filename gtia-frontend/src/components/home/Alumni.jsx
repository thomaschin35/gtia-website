import { alumniLogos, sponsors } from "./alumniData";

/**
 * Alumni + Sponsors — Paper Alumni section (36-0).
 * PNG logos in the Paper row; Apple falls back to a wordmark.
 * Sponsor marks are the existing PNGs only (no cards or labels).
 */
const Alumni = () => {
  return (
    <section className="w-full border-t border-line bg-blue-25">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-11 px-8 py-24 md:px-16">
        <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
          OUR ALUMNI ARE AT
        </span>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {alumniLogos.map((item) =>
            item.logo ? (
              <img
                key={item.id}
                src={item.logo}
                alt={item.name}
                className="h-16 w-auto max-w-[240px] object-contain sm:h-20"
              />
            ) : (
              <span
                key={item.id}
                className="font-sans text-[32px] font-semibold leading-10 text-ink sm:text-[36px]"
              >
                {item.name}
              </span>
            )
          )}
        </div>

        <div className="flex w-full max-w-[760px] flex-col items-center gap-7 border-t border-line pt-5">
          <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
            OUR SPONSORS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {sponsors.map((sponsor) => (
              <img
                key={sponsor.id}
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 w-auto max-h-20 max-w-[220px] object-contain sm:h-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
