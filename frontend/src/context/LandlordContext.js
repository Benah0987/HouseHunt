import { createContext, useContext, useState } from 'react';

const LandlordContext = createContext();

export function useLandlord() {
  return useContext(LandlordContext);
}

export function LandlordProvider({ children }) {
  const [Landlord, setLandlord] = useState(null);

  const login = async (email, password) => {
    try {
      // Add your authentication logic here
      // For simplicity, setting a dummy authenticated landlord
      setLandlord({ email, username: 'Dummy Landlord' });
    } catch (error) {
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
