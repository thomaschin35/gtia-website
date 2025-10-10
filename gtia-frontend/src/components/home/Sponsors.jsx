import React from "react";

const sponsors = [
  { name: "oie", logo: "/assets/images/homepage/oie.png" },
  { name: "SGA", logo: "/assets/images/homepage/sga.png" },
];

const Sponsors = () => {
  return (
    <section className="companies-section py-5">
      <div className="container text-center">
        <div className="section-title-text mb-5">Thank you Sponsors</div>
        <div className="companies-logos d-flex flex-wrap align-items-center gap-5">
          {sponsors.map((sponsor, idx) => (
            <div className="company-logo-wrapper" key={idx}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="company-logo"
                height={64}
                style={{ maxWidth: "300px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
