import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer pt-3 pt-md-4 pt-lg-5">
      <div className="footer-main container d-flex flex-wrap justify-content-between align-items-start gap-3 gap-md-4 gap-lg-5 pb-3 pb-md-4">
        {/* Help Box */}
        <div className="footer-help-box order-1 order-md-1">
          <h2 className="footer-help-title mb-2 mb-md-3">
            Have a problem?
            <br className="d-none d-md-block" />
            <span className="d-md-none"> </span>We're here to help.
          </h2>
          <a href="mailto:gtia@gatech.edu" className="footer-help-link">
            Talk to us{" "}
            <span className="footer-help-icon">
              <i className="bi bi-envelope-fill"></i>
            </span>
          </a>
        </div>
        
        {/* Links Section */}
        <div className="footer-links order-2 order-md-2 w-100 w-md-auto">
          <div className="row row-cols-2 row-cols-md-4 g-3 g-md-4 g-lg-5">
            <div className="col">
              <div className="footer-link-col">
                <div className="footer-link-title">About</div>
                <a href="#" className="footer-link">Our Mission</a>
                <a href="#" className="footer-link">Our Story</a>
                <a href="#" className="footer-link">Our Exec Board</a>
                <a href="#" className="footer-link">Our Committees</a>
              </div>
            </div>
            <div className="col">
              <div className="footer-link-col">
                <div className="footer-link-title">Resources</div>
                <a href="#" className="footer-link">Transition to ATL</a>
                <a href="#" className="footer-link">Academic Resources</a>
                <a href="#" className="footer-link">Career Resources</a>
              </div>
            </div>
            <div className="col">
              <div className="footer-link-col">
                <div className="footer-link-title">Events</div>
                <a href="#" className="footer-link">Annual Events</a>
                <a href="#" className="footer-link">Internal Events</a>
                <a href="#" className="footer-link">Workshops</a>
              </div>
            </div>
            <div className="col">
              <div className="footer-link-col">
                <div className="footer-link-title">Connect</div>
                <a href="#" className="footer-link">Join Us</a>
                <a href="#" className="footer-link">Sponsor Us</a>
                <div className="footer-socials d-flex gap-2 gap-md-3 mt-2 mt-md-3">
                  <a href="#" className="footer-social" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="footer-social" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="footer-social" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="footer-bottom-bar d-flex flex-column flex-md-row justify-content-between align-items-center px-3 px-md-4 py-3 py-md-2">
        <span className="footer-copyright text-center text-md-start mb-2 mb-md-0">
          Copyright © International Ambassadors at Georgia Tech {new Date().getFullYear()}
        </span>
        <img
          src="/assets/images/gtia-gold-logo.png"
          alt="GTIA Logo"
          className="footer-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
