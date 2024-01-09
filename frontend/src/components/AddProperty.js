import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLandlord } from '../context/LandlordContext';

function AddProperty() {
  const { landlord } = useLandlord();
  const [propertyData, setPropertyData] = useState({
    location: '',
    environment: '',
    security: '',
    name: '',
    images: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    console.log('Landlord:', landlord);
  

    try {
      // Include landlord's information in the property data
      const propertyDataWithLandlord = {
        ...propertyData,
        landlordId: landlord.id, // Assuming landlord has an id property
      };

      const response = await fetch('http://127.0.0.1:3000/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyDataWithLandlord),
      });

      if (response.ok) {
        // Property added successfully
        console.log('Property added successfully!');
        // Redirect or show a success message
      } else {
        // Handle error response
        console.error('Failed to add property:', await response.json());
        // Show an error message
      }
    } catch (error) {
      console.error('An error occurred while adding property:', error);
      // Show a generic error message
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                <Link to="/addproperty" className="tab">
                  AddProperty
                </Link>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <Link to="/signup" className="tab">
                 s
                </Link>
                <div className="login-space">
                  <div className="login">
                    {/* Updated input fields for property */}
                    <div className="group">
                      <label htmlFor="location" className="label">
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        className="input"
                        name="location"
                        placeholder="Enter property location"
                        value={propertyData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="environment" className="label">
                        Environment
                      </label>
                      <input
                        id="environment"
                        type="text"
                        className="input"
                        name="environment"
                        placeholder="Enter property environment"
                        value={propertyData.environment}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="security" className="label">
                        Security
                      </label>
                      <input
                        id="security"
                        type="text"
                        className="input"
                        name="security"
                        placeholder="Enter property security"
                        value={propertyData.security}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="name" className="label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input"
                        name="name"
                        placeholder="Enter property name"
                        value={propertyData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="images" className="label">
                        Images
                      </label>
                      <input
                        id="images"
                        type="text"
                        className="input"
                        name="images"
                        placeholder="Enter property images URL"
                        value={propertyData.images}
                        onChange={handleChange}
                      />
                    </div>
                    {/* End of updated input fields */}

                    <div className="group">
                      <input
                        type="submit"
                        className="button"
                        value="Add Property"
                        onClick={handleAddProperty}
                      />
                    </div>
                    <div className="hr"></div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
