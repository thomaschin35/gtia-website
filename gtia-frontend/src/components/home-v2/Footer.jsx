import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { footerColumns } from "./footerData";

/**
 * Footer — Paper Footer section (3V-0).
 * Help CTA (mailto) + four link columns + bottom bar with gold-ring mark.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-8 pt-[88px] pb-10 md:px-16">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex w-[min(420px,100%)] min-w-0 shrink-0 flex-col items-start gap-5 text-left">
            <h2 className="m-0 font-sans text-[32px] font-bold leading-[40px] tracking-[-0.01em] text-white sm:text-[34px] sm:leading-[42px]">
              Have any questions? We're here to help.
            </h2>
            <p className="m-0 font-sans text-[17px] font-normal leading-[26px] text-blue-100">
              Reach out and a member of our team will get back to you.
            </p>
            <a
              href="mailto:gtia@gatech.edu"
              className="inline-flex items-center gap-2.5 rounded-pill bg-gold px-[30px] py-[14px] font-sans text-[16px] font-semibold leading-5 tracking-[0.03em] text-ink no-underline transition-transform hover:scale-[1.03]"
            >
              Talk to us
              <Mail className="size-[18px] shrink-0" strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-wrap items-start gap-x-[72px] gap-y-8 pt-1.5">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="flex w-[130px] shrink-0 flex-col gap-4"
              >
                <span className="font-sans text-label font-bold leading-4 tracking-[0.1em] text-blue">
                  {column.title}
                </span>
                {column.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-sans text-[15px] font-normal leading-[18px] text-blue-100 no-underline transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="font-sans text-[15px] font-normal leading-[18px] text-blue-100 no-underline transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-blue/25 pt-7 sm:flex-row sm:items-center">
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline"
            aria-label="GTIA home"
          >
            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-pill border-2 border-gold">
              <span className="size-[11px] rounded-pill bg-gold" />
            </span>
            <span className="font-sans text-[16px] font-bold leading-5 tracking-[0.04em] text-white">
              GTIA
            </span>
          </Link>
          <span className="font-sans text-label font-normal leading-4 text-blue">
            © {year} Georgia Tech International Ambassadors
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
