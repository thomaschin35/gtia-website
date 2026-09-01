import { Link } from "react-router-dom";

/**
 * Mission — from Paper "GTIA Homepage — Desktop" / Mission (13-0).
 * Left copy (620px bound) + right image panel (468×360, radius-lg).
 */
const Mission = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-12 px-8 py-[104px] md:px-16 lg:flex-row lg:items-center lg:justify-between lg:gap-[72px]">
        {/* Fixed 620px column — Paper bound so the headline wraps */}
        <div className="box-border flex w-[min(620px,100%)] max-w-[620px] min-w-0 shrink-0 flex-col items-start gap-7 text-left">
          <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
            OUR MISSION
          </span>

          <h2 className="m-0 w-full max-w-full whitespace-normal break-words font-sans text-[32px] font-bold leading-[40px] tracking-[-0.01em] text-ink sm:text-[40px] sm:leading-[48px] lg:text-[46px] lg:leading-[54px]">
            Bringing Georgia Tech to the world, and the world to Georgia&nbsp;Tech.
          </h2>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 font-sans text-[16px] font-semibold leading-[20px] tracking-[0.06em] text-ink no-underline transition-opacity hover:opacity-70"
          >
            ABOUT US
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="var(--color-gold)"
                strokeWidth="1.5"
              />
              <path
                d="M9 12h6M12 9l3 3-3 3"
                stroke="var(--color-ink)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Gradient panel — Tailwind utilities (reliable) instead of inline CSS vars */}
        <div
          className="block h-[240px] w-full shrink-0 rounded-[28px] bg-gradient-to-br from-blue-100 to-blue sm:h-[300px] lg:ml-auto lg:h-[360px] lg:w-[468px] lg:max-w-[468px]"
          role="img"
          aria-label="Mission visual placeholder"
        />
      </div>
    </section>
  );
};

export default Mission;
