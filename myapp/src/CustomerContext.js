import React, { createContext, useContext } from 'react';

// Create the context with a default value (can be null or empty object)
const CustomerContext = createContext();

// Custom hook to use the context
export const useCustomer = () => useContext(CustomerContext);

// Provider component that wraps your application
export const CustomerProvider = ({ children, customerDetails }) => (
  <CustomerContext.Provider value={customerDetails}>
    {children}
  </CustomerContext.Provider>
);
