import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

/**
 * Event card — Paper Events / Event Card (1O-0): 400px, date badge, photo header.
 * Pass `href` when the destination is ready (defaults to "#").
 */
const EventCard = ({
  title,
  day,
  month,
  category,
  description,
  location,
  image,
  href = "#",
}) => {
  return (
    <Link
      to={href}
      className="flex w-[min(400px,100%)] shrink-0 flex-col overflow-hidden rounded-[16px] border border-solid border-line bg-white no-underline transition-shadow hover:shadow-[0_8px_24px_rgba(1,50,75,0.1)]"
    >
      <div className="relative flex h-[210px] shrink-0 items-start overflow-hidden bg-blue-100 p-[18px]">
        {image && (
          <img
            src={image}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        )}
        <div className="relative z-10 flex flex-col items-center rounded-[8px] bg-white px-3.5 py-2">
          <span className="font-sans text-[20px] font-bold leading-[22px] text-ink">
            {day}
          </span>
          <span className="font-sans text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-ink-soft">
            {month}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <span className="font-sans text-[12px] font-semibold leading-4 tracking-[0.1em] text-gt-gold">
          {category}
        </span>
        <h3 className="m-0 font-sans text-h3 font-bold leading-7 text-ink">{title}</h3>
        <p className="m-0 font-sans text-[15px] font-normal leading-[23px] text-ink-soft">
          {description}
        </p>
        <div className="flex items-center gap-2 pt-1.5">
          <MapPin className="size-4 shrink-0 text-grey" strokeWidth={1.6} aria-hidden="true" />
          <span className="font-sans text-label font-medium leading-4 text-grey">
            {location}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
