/**
 * Data Context
 * 
 * This context provides access to all personal data throughout the application.
 * Wrap your app with the DataProvider to make data available everywhere.
 */

import React, { createContext, useContext, useMemo } from 'react';
import * as portfolioData from '../data';

// Create context with default undefined value
const DataContext = createContext();

/**
 * Data Provider Component
 * 
 * Provides all personal data to child components through context.
 * Uses useMemo to prevent unnecessary recalculations of values.
 * 
 * @param {Object} props - Component props including children
 * @returns {JSX.Element} Context provider with all portfolio data
 */
export const DataProvider = ({ children }) => {
  // Memoize the value object to prevent unnecessary re-renders
  const value = useMemo(() => ({
    ...portfolioData,
    
    // You can add any additional data processing or computed values here
    lastUpdated: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
  }), []);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

/**
 * Custom hook to use the data context
 * 
 * @returns {Object} All portfolio data from context
 * @throws {Error} If used outside of DataProvider
 */
export const usePortfolioData = () => {
  const context = useContext(DataContext);
  
  if (context === undefined) {
    throw new Error('usePortfolioData must be used within a DataProvider');
  }
  
  return context;
};

export default DataContext; 