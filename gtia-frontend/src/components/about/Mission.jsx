import { missionCards } from "./missionData";

/**
 * Our Mission — from Paper "GTIA About — Desktop" / Our Mission.
 */
const Mission = () => {
  return (
    <section id="mission" className="w-full scroll-mt-28 bg-blue-25">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-8 pt-[72px] pb-24 md:px-16">
        <h2 className="m-0 text-center font-sans text-h2 font-bold leading-[44px] text-ink">
          Our Mission
        </h2>

        <div className="mission-cards w-full max-w-[1312px]">
          {missionCards.map((card) => {
            return (
              <article
                key={card.id}
                className="flex min-h-[440px] flex-col items-center gap-4 rounded-[40px] bg-white px-7 pt-8 pb-10 shadow-[0_4px_10px_#0000000D]"
              >
                <div className="flex size-[88px] shrink-0 items-center justify-center rounded-pill">
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="m-0 font-sans text-[32px] font-bold leading-[38px] tracking-[-0.02em] text-ink">
                    {card.title}
                  </h3>
                  <p className="m-0 font-sans text-[20px] font-semibold leading-6 text-ink">
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex w-full max-w-[252px] flex-col gap-3">
                  {card.description.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="m-0 text-center font-sans text-[16px] font-normal leading-[22px] text-night"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
