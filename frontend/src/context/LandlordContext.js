// LandlordContext.js
import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert

const LandlordContext = createContext();

export function useLandlord() {
  return useContext(LandlordContext);
}

export function LandlordProvider({ children }) {
  const [Landlord, setLandlord] = useState(null);

  const login = async (email, password) => {
    try {
      // Make a request to your API endpoint for authentication
      const response = await fetch('http://127.0.0.1:3000/landlords/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful
        const data = await response.json();
        console.log('Login successful:', data);

        // Set the authenticated landlord
        setLandlord({ email, username: data.username });

        // Display a success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back, ' + data.username + '!',
        });

        // You can use the useNavigate hook here to navigate to the Dashboard.js
        // Example assuming you have useNavigate available in this context
        // const navigate = useNavigate();
        // navigate('/dashboard');
      } else {
        // Authentication failed
        const errorData = await response.json();
        console.error('Login failed:', errorData);

        // Display an error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });

        // Throw an error to be caught by the calling component
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Login failed:', error.message);

      // Display a generic error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'An error occurred. Please try again later.',
      });

      // Throw an error to be caught by the calling component
      throw new Error('Authentication failed');
    }
  };

  const logout = async () => {
    // Add logout logic here, clearing the authenticated landlord
    setLandlord(null);
  };

  return (
    <LandlordContext.Provider value={{ Landlord, login, logout }}>
      {children}
    </LandlordContext.Provider>
  );
}
