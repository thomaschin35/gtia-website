import { Link } from "react-router-dom";

// Placeholder globe (served from public/). Swap this file to update the hero art.
const GLOBE_SRC = "/assets/images/home/globe-placeholder.png";

/**
 * Hero — from Paper "GTIA Homepage — Desktop" / Hero (D-0).
 * - Copy is a fixed 560px left column so the headline wraps to ~3 lines.
 * - Globe is absolute and pinned to the right (right: 16px) so it tracks resize.
 */
const Hero = () => {
  return (
    <section
      className="hero-v2 relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--color-blue-25) 0%, var(--color-white) 100%)",
      }}
    >
      <div className="relative mx-auto flex min-h-[660px] w-full max-w-[1440px] items-center px-8 pt-[150px] pb-[110px] md:px-16">
        {/* Fixed-width copy column — forces headline wrap like Paper (560px) */}
        <div className="relative z-10 box-border flex w-[min(560px,100%)] min-w-0 shrink-0 flex-col items-start gap-8 text-left">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-7 shrink-0 bg-gold" aria-hidden="true" />
            <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-ink-soft">
              GEORGIA TECH
            </span>
          </div>

          <h1 className="m-0 w-full max-w-full whitespace-normal break-words text-left font-sans text-[40px] font-bold leading-[44px] tracking-[-0.02em] text-ink sm:text-[52px] sm:leading-[56px] lg:text-[64px] lg:leading-[66px]">
            International Ambassadors at Georgia Tech
          </h1>

          <p className="m-0 w-full max-w-[440px] text-left font-sans text-[18px] font-normal leading-[28px] text-ink-soft">
            A student community connecting cultures, celebrating diversity, and
            building a global home on campus.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 rounded-pill bg-ink px-[34px] py-[15px] font-sans text-[16px] font-semibold leading-[20px] tracking-[0.04em] text-white no-underline transition-transform hover:scale-[1.03]"
          >
            LEARN MORE
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="var(--color-gold)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Pinned to the right — tracks viewport resize (Paper: ~16px from right edge) */}
        <div
          role="img"
          aria-label="Illustrated globe representing GTIA's international community"
          className="pointer-events-none absolute -top-10 right-4 size-[min(660px,55vw)] rounded-pill lg:size-[660px]"
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 38% 32%, var(--color-blue-50) 0%, var(--color-blue-100) 55%, var(--color-blue) 100%)",
          }}
        >
          <div
            className="absolute inset-5 rounded-pill bg-cover bg-center"
            style={{ backgroundImage: `url(${GLOBE_SRC})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
