import React from 'react';

function Footer() {
  return (
    <div style={{ backgroundColor: '#2c3e50', marginBottom: '0' }}>
      {/* Footer */}
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#2c3e50' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#3498db' }}>
          {/* Left */}
          <div className="me-5">
            <span>Connect with us on social media:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">House Hunt</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ecf0f1', height: '2px' }} />
                <p>
                  Discover your comfort home with House Hunt. We make finding the perfect property easy and enjoyable.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Explore</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ecf0f1', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">Home Listings</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Mortgage Calculator</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Neighborhoods</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Resources</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful Links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ecf0f1', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">Contact Us</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">About Us</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">FAQs</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ecf0f1', height: '2px' }} />
                <p><i className="fas fa-envelope me-3"></i> info@househunt.com</p>
                <p><i className="fas fa-phone me-3"></i> +254 708636727</p>
                <p><i className="fas fa-map-marker-alt me-3"></i> Nairobi, Kenya</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 House Hunt. All rights reserved.
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    /* End of .container */
  );
}

export default Footer;
