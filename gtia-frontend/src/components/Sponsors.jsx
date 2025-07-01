import React from "react";

const sponsors = [
  { name: "Amazon", logo: "/assets/images/amazon.png" },
  { name: "Stanford University", logo: "/assets/images/stanford.png" },
];

const Sponsors = () => {
  return (
    <section className="companies-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">Thank you Sponsors</h2>
        <div className="companies-logos d-flex flex-wrap align-items-center gap-5">
          {sponsors.map((sponsor, idx) => (
            <div className="company-logo-wrapper" key={idx}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="company-logo"
                height={64}
                style={{ maxWidth: "180px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
