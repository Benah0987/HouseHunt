import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './property.css';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/properties');
        if (response.ok) {
          const data = await response.json();
          setProperties(data);
        } else {
          console.error('Error fetching properties:', response.status);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties(); // Call the function immediately

    // No specific dependencies for useEffect in this case
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
        crossOrigin="anonymous"
      />

      <div id="propertyCarousel" className="carousel slide" data-ride="carousel">
        {/* ... Your carousel slides ... */}
      </div>

      <div className="row mt-4">
        <div className="col-lg-10 mx-auto">
          <div className="property-list mb-60">
            {properties.map(property => (
              <div
                key={property.id}
                className="property-card mb-4 d-md-flex align-items-center justify-content-between"
                style={{
                  height: '300px',
                  backgroundColor: '#f0f0f0',
                  padding: '20px',
                  borderRadius: '10px',
                  marginTop: '20px',
                }}
              >
                <div className="property-image-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                  {/* Check if property.images is an array */}
                  {Array.isArray(property.images) && property.images.length > 0 && (
                    <div>
                      {property.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Property ${property.id} - Image ${index + 1}`}
                          style={{
                            maxWidth: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginBottom: '10px',
                          }}
                        />
                      ))}
                    </div>
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
                  <Link to={`/properties/${property.id}/rooms`} className="btn btn-primary btn-sm">
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
