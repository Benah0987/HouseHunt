// LandlordContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const LandlordContext = createContext();

export function useLandlord() {
  return useContext(LandlordContext);
}

export function LandlordProvider({ children }) {
  const [Landlord, setLandlord] = useState(null);

  const navigate = useNavigate();

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

        navigate('/dashboard');
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

  const signUp = async (formData) => {
    try {
      // Make a request to your API endpoint for sign-up
      const response = await fetch('http://127.0.0.1:3000/landlords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Sign-up successful
        const data = await response.json();
        console.log('Sign-up successful:', data);

        // Set the authenticated landlord
        setLandlord({ email: formData.email, username: data.username });

        // Display a success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful!',
          text: 'Welcome, ' + data.username + '!',
        });

        // You can use the useNavigate hook here to navigate to the Landlordin.js
        // Example assuming you have useNavigate available in this context
        // const navigate = useNavigate();
        // navigate('/landlordin');
      } else {
        // Sign-up failed
        const errorData = await response.json();
        console.error('Sign-up failed:', errorData);

        // Display an error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: 'Failed to sign up. Please try again.',
        });

        // Throw an error to be caught by the calling component
        throw new Error('Sign-up failed');
      }
    } catch (error) {
      console.error('Sign-up failed:', error.message);

      // Display a generic error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Failed',
        text: 'An error occurred. Please try again later.',
      });

      // Throw an error to be caught by the calling component
      throw new Error('Sign-up failed');
    }
  };

  const logout = async () => {
    // Add logout logic here, clearing the authenticated landlord
    setLandlord(null);
  };

  return (
    <LandlordContext.Provider value={{ Landlord, login, logout, signUp }}>
      {children}
    </LandlordContext.Provider>
  );
}
