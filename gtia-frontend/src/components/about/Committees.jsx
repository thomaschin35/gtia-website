import { committees } from "./committeesData";
import CommitteePostcard from "./CommitteePostcard";

const firstRow = committees.slice(0, 3);
const secondRow = committees.slice(3);

/**
 * Our Committees — from Paper "GTIA About — Desktop" / Committees (8G-0).
 * 3+2 postcard grid; each card flips via KokonutUI CardFlip.
 */
const Committees = () => {
  return (
    <section id="committees" className="w-full scroll-mt-28 bg-blue-25">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-8 pt-[72px] pb-24 md:px-16">
        <div className="flex flex-col items-center gap-3">
          <h2 className="m-0 text-center font-sans text-h2 font-bold leading-[44px] text-ink">
            Our Committees
          </h2>
          <p className="m-0 font-sans text-small font-medium leading-5 tracking-[0.04em] text-ink-soft">
            Hover a card to flip the postcard
          </p>
        </div>

        <div className="committee-cards w-full max-w-[1312px]">
          <div className="committee-cards-row">
            {firstRow.map((committee) => (
              <CommitteePostcard key={committee.id} committee={committee} />
            ))}
          </div>
          <div className="committee-cards-row">
            {secondRow.map((committee) => (
              <CommitteePostcard key={committee.id} committee={committee} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;
