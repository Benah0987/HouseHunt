import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './property.css';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data
    fetch('http://127.0.0.1:3000/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
        crossOrigin="anonymous"
      />

<div id="propertyCarousel" className="carousel slide" data-ride="carousel" >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1612637968894-660373e23b03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
            className="d-block w-100 carousel-image"
            alt="Slide 1"
          />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="text-center text-white">
              <h2>Discover Your Dream Home</h2>
              <p>
                Explore our curated selection of properties listed on HouseHunt.
                Find your ideal home and start your journey today!
              </p>
              <Link to="/properties" className="btn btn-light btn-lg">
                Explore Properties
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 - Replace with your own image and content */}
        <div className="carousel-item">
          <img
            src="https://your-image-url-2.jpg"
            className="d-block w-100 carousel-image"
            alt="Slide 2"
          />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="text-center text-white">
              <h2>Your Heading 2</h2>
              <p>Your content for slide 2</p>
              <Link to="/your-link-2" className="btn btn-light btn-lg">
                Your Link 2
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 3 - Replace with your own image and content */}
        <div className="carousel-item">
          <img
            src="https://your-image-url-3.jpg"
            className="d-block w-100 carousel-image"
            alt="Slide 3"
          />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="text-center text-white">
              <h2>Your Heading 3</h2>
              <p>Your content for slide 3</p>
              <Link to="/your-link-3" className="btn btn-light btn-lg">
                Your Link 3
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <a
        className="carousel-control-prev"
        href="#propertyCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#propertyCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
</div>


        <div className="row mt-4">
          <div className="col-lg-10 mx-auto">
            <div className="property-list mb-60">
              {properties.map(property => (
                <div
                  key={property.id}
                  className="property-card mb-4 d-md-flex align-items-center justify-content-between"
                  style={{ height: '300px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginTop: '20px' }}
                >
                  <div className="property-image-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    {/* Assuming images is an array of URLs */}
                    {property.images && property.images.length > 0 && (
                      <img
                        src={property.images[0]}
                        alt={`Property ${property.id}`}
                        style={{ maxWidth: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    )}
                  </div>
                  <div className="property-content">
                    <h5 className="text-center text-md-left">{property.name}</h5>
                    <div className="property-details">
                      <p>
                        <strong>Location:</strong> {property.location}
                      </p>
                      <p>
                        <strong>Environment:</strong> {property.environment}
                      </p>
                      <p>
                        <strong>Security:</strong> {property.security}
                      </p>
                    </div>
                    <Link to={`/property/${property.id}`} className="btn btn-primary btn-sm">
                      See Rooms
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="search-button mb-4">
              <button
                type="button"
                className="btn btn-lg btn-block btn-light btn-custom"
                id="contact-submit"
              >
                Search for More Properties
              </button>
            </div>
          </div>
        </div>
      </div>
  
    
  );
}

export default PropertyList;
