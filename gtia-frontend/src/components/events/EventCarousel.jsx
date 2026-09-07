import { useEffect, useMemo, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EventCard from "../home/EventCard";
import { cn } from "@/lib/utils";

/**
 * Event carousel — Paper Events section chrome + existing keen-slider.
 * Header-row arrows (not overlay); 1 / 2 / 3 cards per view.
 */
const EventCarousel = ({
  id,
  eyebrow,
  title,
  events,
  className = "bg-white",
  contentClassName,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxIdx, setMaxIdx] = useState(() => Math.max(events.length - 1, 0));

  // Options must be referentially stable — a new object each render
  // makes keen-slider re-init and snaps back to slide 0.
  const sliderOptions = useMemo(
    () => ({
      initial: 0,
      rubberband: false,
      slides: { perView: 1, spacing: 28 },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 28 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 28 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    }),
    []
  );

  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  // keen-slider's first layout can miss slide widths; refresh once mounted.
  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;
    slider.update();
    setMaxIdx(slider.track.details.maxIdx);
  }, []);

  const showArrows = maxIdx > 0;

  return (
    <section id={id} className={cn("w-full scroll-mt-28", className)}>
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1440px] flex-col items-center gap-14 px-8 py-[104px] md:px-16",
          contentClassName
        )}
      >
        <div className="flex w-full max-w-[1256px] items-center justify-between gap-3.5">
          <div className="flex min-w-0 flex-col items-start gap-3.5 text-left">
            <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
              {eyebrow}
            </span>
            <h2 className="m-0 font-sans text-[32px] font-bold tracking-[-0.01em] text-ink sm:text-h1 sm:leading-[54px]">
              {title}
            </h2>
          </div>

          {showArrows && (
            <div className="flex shrink-0 items-center gap-2.5">
              <Arrow
                direction="prev"
                disabled={currentSlide === 0}
                onClick={(event) => {
                  event.stopPropagation();
                  instanceRef.current?.prev();
                }}
              />
              <Arrow
                direction="next"
                disabled={currentSlide === maxIdx}
                onClick={(event) => {
                  event.stopPropagation();
                  instanceRef.current?.next();
                }}
              />
            </div>
          )}
        </div>

        <div className="w-full max-w-[1256px] overflow-hidden">
          <div ref={sliderRef} className="keen-slider">
            {events.map((event) => (
              <div className="keen-slider__slide min-w-0" key={event.id}>
                <EventCard {...event} className="h-full w-full max-w-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function Arrow({ direction, disabled, onClick }) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous events" : "Next events"}
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-pill border border-solid transition-opacity",
        isPrev ? "border-line bg-white" : "border-ink bg-ink",
        disabled && "cursor-not-allowed opacity-40"
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d={isPrev ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke={isPrev ? "var(--color-ink)" : "var(--color-white)"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default EventCarousel;
