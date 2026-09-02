import { useState } from "react";
import CardFlip from "@/components/kokonutui/card-flip";

const Stamp = ({ committee }) => (
  <div className="relative h-[100px] w-[100px] shrink-0 rounded-[3px]">
    <div className="relative h-full w-full overflow-hidden rounded-[1px] border border-dashed border-white/80">
      {committee.stampSrc ? (
        <img
          src={committee.stampSrc}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
          style={{ objectPosition: committee.stampFocus ?? "center" }}
        />
      ) : (
        // fallback keeps the old plain-gold look for committees without art yet
        <div className="size-full bg-gold/70" />
      )}
    </div>
  </div>
);

const PostcardFront = ({ committee }) => (
  <div
    className="relative h-full w-full overflow-hidden rounded-[16px] shadow-[0_8px_20px_#01324B14]"
    style={{ backgroundColor: committee.tint }}
  >
    {committee.imageSrc ? (
      <img
        src={committee.imageSrc}
        alt=""
        className="absolute inset-0 size-full"
      />
    ) : (
      // fallback should still feel like a place, not a blank swatch —
      // swap this for a subtle pattern/illustration per committee, not a flat fill
      <div className="absolute inset-0" role="img" aria-label={`${committee.title} photo placeholder`} />
    )}
  </div>
);

const PostcardBack = ({ committee }) => (
  <div className="relative flex h-full w-full rounded-[16px] border border-dashed border-gold bg-white p-5 shadow-[0_8px_20px_#01324B14]">
    {/* message side: ruled lines, no photo */}
    <div className="flex min-w-0 flex-[1.4] flex-col gap-2 pr-5">
      <h3 className="m-0 font-sans text-[20px] font-bold leading-6 text-ink">
        {committee.title}
      </h3>
      <p
        className="m-0 flex-1 overflow-hidden font-sans text-label font-normal text-ink-soft"
        style={{
          lineHeight: "24px",
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 22px, #01324B26 22px, #01324B26 23px)",
        }}
      >
        {committee.description}
      </p>
    </div>

    {/* divider */}
    <div className="w-px shrink-0 bg-gold/40" aria-hidden="true" />

    {/* address side */}
    <div className="flex w-[100px] shrink-0 flex-col items-end pl-4" aria-hidden="true">
      <Stamp committee={committee} />
      {/* faux postmark, overlapping the stamp corner */}
      <div className="mt-9 flex w-full flex-col gap-2.5">
        <div className="h-px w-full bg-ink/15" />
        <div className="h-px w-full bg-ink/15" />
        <div className="h-px w-[70%] bg-ink/15" />
      </div>
    </div>
  </div>
);

/**
 * Committee postcard — KokonutUI 3D flip shell with Paper front/back faces.
 * Hover, click, and keyboard (Enter/Space) all flip the card.
 */
const CommitteePostcard = ({ committee }) => {
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false);
  const isFlipped = hovered || locked;

  const toggle = () => setLocked((value) => !value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <CardFlip
      isFlipped={isFlipped}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
      onKeyDown={onKeyDown}
      ariaLabel={`${committee.title} postcard. ${
        isFlipped ? "Showing description" : "Flip to read the description"
      }`}
      ariaPressed={isFlipped}
      className="committee-postcard h-[260px] select-none"
      front={<PostcardFront committee={committee} />}
      back={<PostcardBack committee={committee} />}
    />
  );
};

export default CommitteePostcard;
