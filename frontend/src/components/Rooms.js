import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './rooms.css';

function Rooms() {
  const { property_id } = useParams();
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (property_id) {
          const response = await fetch(`http://127.0.0.1:3000/properties/${property_id}/rooms`);
          if (response.ok) {
            const data = await response.json();
            console.log('Fetched rooms data:', data);
            setRoomsData(data);
          } else {
            console.error('Error fetching rooms:', response.status);
          }
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();

    // Specify property_id as a dependency for useEffect
  }, [property_id]);

  return (
    <div className="container-background container py-5">
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">Rooms for Property {property_id || 'N/A'}</h1>
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
                    <p className="font-italic text-muted mb-0 small">
                      {room.occupied ? 'Occupied' : 'Vacant'}
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <h6 className="font-weight-bold my-2">${room.price.toFixed(2)}</h6>
                    </div>
                  </div>
                  {room.image && (
                    <img
                      src={room.image}
                      alt={`Room ${room.id}`}
                      width="200"
                      className="ml-lg-5 order-1 order-lg-2"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
