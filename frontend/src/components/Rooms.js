import React, { useEffect, useState } from 'react';
import './rooms.css';


const Rooms = ({ match }) => {
  const propertyId = match.params.property_id;

  // Fetch rooms data for the specific property using the propertyId
  // You can fetch the data from an API or other data source

  // Mock data for demonstration
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    // Fetch rooms data from the API or other source
    // For now, using a mock API endpoint
    fetch(`https://your-api-endpoint/properties/${propertyId}/rooms`)
      .then(response => response.json())
      .then(data => setRoomsData(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, [propertyId]);

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
        minHeight: '100vh',
      }}
      className="container py-5"
    >
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">Rooms for Property {propertyId}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <ul className="list-group shadow">
            {roomsData.map(room => (
              <li key={room.id} className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{room.room_type}</h5>
                    <p className="font-italic text-muted mb-0 small">{room.occupied ? 'Occupied' : 'Vacant'}</p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <h6 className="font-weight-bold my-2">${room.price.toFixed(2)}</h6>
                    </div>
                  </div>
                  {room.image && (
                    <img src={room.image} alt={`Room ${room.id}`} width="200" className="ml-lg-5 order-1 order-lg-2" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
