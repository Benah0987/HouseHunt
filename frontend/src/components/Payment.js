import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Payment() {
  const { state: { roomDetails } } = useLocation();
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        if (roomDetails && roomDetails.id) {
          const response = await fetch(`/properties/${roomDetails.property_id}/rooms/${roomDetails.id}`);
          if (response.ok) {
            const data = await response.json();
            setRoomData(data);
          } else {
            console.error('Error fetching room details:', response.status);
            // Handle non-JSON response, e.g., display an error message
          }
        }
      } catch (error) {
        console.error('Error fetching room details:', error);
        // Handle unexpected errors, e.g., display an error message
      }
    };
  
    fetchRoomDetails();
  }, [roomDetails]);
  

  return (
    <div>
      <h2>Payment</h2>
      {roomData ? (
        <>
          <h3>Room Details</h3>
          <p>Room Type: {roomData.room_type}</p>
          <p>Price: ${roomData.price.toFixed(2)}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Loading room details...</p>
      )}
    </div>
  );
}

export default Payment;
