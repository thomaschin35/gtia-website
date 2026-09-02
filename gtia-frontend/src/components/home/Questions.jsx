import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const topics = [
  { id: "join", label: "How do I join GTIA?", href: "/resources#join" },
  { id: "visa", label: "Visa & immigration help", href: "/resources#visa" },
  { id: "community", label: "Finding community on campus", href: "/resources#community" },
  { id: "mentorship", label: "Mentorship & resources", href: "/resources#mentorship" },
];

/**
 * Questions — Paper Questions section (5A-0).
 * Topic links target a future /resources page (hash per topic).
 */
const Questions = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-8 py-[104px] md:px-16">
        <div className="flex w-full max-w-[1312px] flex-col items-start gap-12 rounded-[28px] bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-16">
          <div className="flex w-[min(520px,100%)] min-w-0 shrink-0 flex-col items-start gap-[22px] text-left">
            <span className="font-sans text-small font-semibold leading-[18px] tracking-[0.14em] text-gt-gold">
              WE'RE HERE FOR YOU
            </span>
            <h2 className="m-0 w-full font-sans text-[32px] font-bold leading-[40px] tracking-[-0.01em] text-ink sm:text-[42px] sm:leading-[50px]">
              Have any questions?
            </h2>
            <p className="m-0 font-sans text-body font-normal leading-[28px] text-ink-soft">
              Curious about GTIA, or navigating life as an international student
              — visas, housing, or just finding your people? Reach out and a
              member of our team will help you find your way.
            </p>
            <a
              href="mailto:info@gtiambassadors.com"
              className="inline-flex items-center gap-2.5 rounded-pill bg-ink px-8 py-[15px] font-sans text-[16px] font-semibold leading-5 tracking-[0.03em] text-white no-underline transition-transform hover:scale-[1.03]"
            >
              Ask us anything
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
            </a>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-3.5 lg:w-[420px] lg:shrink-0">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                to={topic.href}
                className="flex items-center justify-between gap-4 rounded-[16px] bg-white px-[26px] py-5 no-underline transition-shadow hover:shadow-[0_8px_24px_rgba(1,50,75,0.08)]"
              >
                <span className="font-sans text-[17px] font-semibold leading-[22px] text-ink">
                  {topic.label}
                </span>
                <ArrowRight
                  className="size-5 shrink-0 text-gt-gold"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
