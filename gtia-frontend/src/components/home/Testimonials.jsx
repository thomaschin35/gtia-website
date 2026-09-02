import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonials } from "./testimonialsData";

const autoplay = (slider) => {
  let timeout;
  let mouseOver = false;

  const clearNextTimeout = () => {
    clearTimeout(timeout);
  };

  const nextTimeout = () => {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  };

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

/**
 * Testimonials — Paper Testimonial section (2V-0).
 * Eyebrow + quote mark stay static; quote + attribution auto-rotate.
 */
const Testimonials = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [autoplay]
  );

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-9 px-8 py-[112px] md:px-16">
        <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
          WHAT THEY SAY
        </span>

        <svg
          width="46"
          height="38"
          viewBox="0 0 46 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M0 38V22C0 9.85 7.4 1.6 19 0l2.4 7.2C14.6 9 11 13 11 18h7v20H0zm27 0V22C27 9.85 34.4 1.6 46 0l2.4 7.2C41.6 9 38 13 38 18h7v20H27z"
            fill="var(--color-blue-100)"
          />
        </svg>

        <div ref={sliderRef} className="keen-slider w-full max-w-[820px]">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide flex flex-col items-center gap-9"
            >
              <blockquote className="m-0 w-[min(820px,100%)] text-center font-sans text-[26px] font-semibold leading-[34px] tracking-[-0.01em] text-ink sm:text-[34px] sm:leading-[46px]">
                {item.quote}
              </blockquote>

              <div className="flex items-center gap-3.5 pt-2">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt=""
                    className="size-14 shrink-0 rounded-pill object-cover"
                  />
                ) : (
                  <div
                    className="size-14 shrink-0 rounded-pill bg-gradient-to-br from-gold to-gt-gold"
                    aria-hidden="true"
                  />
                )}
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="font-sans text-[17px] font-semibold leading-[22px] text-ink">
                    {item.name}
                  </span>
                  <span className="font-sans text-small font-normal leading-[18px] text-grey">
                    {item.meta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
