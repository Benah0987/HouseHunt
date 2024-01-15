import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Payment() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/rooms/${roomId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched room details:', data);
          setRoomDetails(data);
        } else {
          console.error('Error fetching room details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    if (roomId) {
      fetchRoomDetails();
    }

    // Specify roomId as a dependency for useEffect
  }, [roomId]);

  return (
<div className="container d-lg-flex">

    <div className="box-1 bg-light user">
    {roomDetails && (
      <>
        <div className="d-flex align-items-center mb-3">
          <img src={roomDetails.image} className="pic rounded-circle" alt={`Room ${roomId}`} />
          <p className="ps-2 name">{roomDetails.tenant_name || 'Vacant'}</p>
        </div>
        <div className="box-inner-1 pb-3 mb-3 ">
          <div className="d-flex justify-content-between mb-3 userdetails">
            <p className="fw-bold">{roomDetails.room_type}</p>
            <p className="fw-lighter">
              <span className="fas fa-dollar-sign"></span>{roomDetails.price.toFixed(2)}+
            </p>
          </div>
          <div
            id="my"
            className="carousel slide carousel-fade img-details"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            {/* Carousel content remains unchanged */}
          </div>
          <p className="dis info my-3">
            {roomDetails.occupied
              ? `Occupied by ${roomDetails.tenant_name}`
              : 'Vacant room. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa sed officiis odio'}
          </p>
          {/* Rest of the content remains unchanged */}
        </div>
      </>
    )}
  </div>
  <div class="box-2">
      <div class="box-inner-2">
          <div>
              <p class="fw-bold">Payment Details</p>
              <p class="dis mb-3">Complete your purchase by providing your payment details</p>
          </div>
          <form action="">
              <div class="mb-3">
                  <p class="dis fw-bold mb-2">Email address</p>
                  <input class="form-control" type="email" value="luke@skywalker.com"/>
              </div>
              <div>
                  <p class="dis fw-bold mb-2">Card details</p>
                  <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                      <div class="fab fa-cc-visa ps-3"></div>
                      <input type="text" class="form-control" placeholder="Card Details"/>
                      <div class="d-flex w-50">
                        <input type="text" class="form-control px-0" placeholder="MM/YY" />
                        <input type="password" maxlength="3" class="form-control px-0" placeholder="CVV" />
                      </div>
                  </div>
                  <div class="my-3 cardname">
                      <p class="dis fw-bold mb-2">Cardholder name</p>
                      <input class="form-control" type="text"/>
                  </div>
                  <div class="address">
                      <p class="dis fw-bold mb-3">Billing address</p>
                      <select class="form-select" aria-label="Default select example">
                          <option selected hidden>United States</option>
                          <option value="1">India</option>
                          <option value="2">Australia</option>
                          <option value="3">Canada</option>
                      </select>
                      <div class="d-flex">
                          <input class="form-control zip" type="text" placeholder="ZIP"/>
                          <input class="form-control state" type="text" placeholder="State"/>
                      </div>
                      <div class=" my-3">
                          <p class="dis fw-bold mb-2">VAT Number</p>
                          <div class="inputWithcheck">
                              <input class="form-control" type="text" value="GB012345B9"/>
                              <span class="fas fa-check"></span>

                          </div>
                      </div>
                      <div class="d-flex flex-column dis">
                          <div class="d-flex align-items-center justify-content-between mb-2">
                              <p>Subtotal</p>
                              <p><span class="fas fa-dollar-sign"></span>33.00</p>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mb-2">
                              <p>VAT<span>(20%)</span></p>
                              <p><span class="fas fa-dollar-sign"></span>2.80</p>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mb-2">
                              <p class="fw-bold">Total</p>
                              <p class="fw-bold"><span class="fas fa-dollar-sign"></span>35.80</p>
                          </div>
                          <div class="btn btn-primary mt-2">Pay<span class="fas fa-dollar-sign px-1"></span>35.80
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>

    
  );
}

export default Payment;
