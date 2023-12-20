import React from 'react';
import { useParams } from 'react-router-dom';

function Payment() {
  const { roomId } = useParams();

  return (
    <div>
      <h2>Payment for Room {roomId}</h2>
      {/* Add your payment content here */}
    </div>
  );
}

export default Payment;
