// LandlordContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LandlordContext = createContext();

export function useLandlord() {
  return useContext(LandlordContext);
}

export function LandlordProvider({ children }) {
  const [landlord, setLandlord] = useState(null); // Rename Landlord to lowercase

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/landlords/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
  
        setLandlord(data); // Set the entire user data
  
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back, ' + data.username + '!',
        });
  
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
  
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
  
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
  
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'An error occurred. Please try again later.',
      });
  
      throw new Error('Authentication failed');
    }
  };
  

  const signUp = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/landlords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Sign-up successful:', data);

        setLandlord({ email: formData.email, username: data.username });

        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful!',
          text: 'Welcome, ' + data.username + '!',
        });

        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Sign-up failed:', errorData);

        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: 'Failed to sign up. Please try again.',
        });

        throw new Error('Sign-up failed');
      }
    } catch (error) {
      console.error('Sign-up failed:', error.message);

      Swal.fire({
        icon: 'error',
        title: 'Sign Up Failed',
        text: 'An error occurred. Please try again later.',
      });

      throw new Error('Sign-up failed');
    }
  };

  const logout = async () => {
    setLandlord(null);
  };

  return (
    <LandlordContext.Provider value={{ landlord, login, logout, signUp }}>
      {children}
    </LandlordContext.Provider>
  );
}
