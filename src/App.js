/**
 * Main Application Component
 * 
 * This is the entry point for the portfolio website that handles:
 * - Theme configuration with Material UI
 * - Routing between different pages
 * - Layout structure with background and navigation
 * 
 * The application uses React Router for navigation and Material UI for styling.
 * Implements lazy loading for non-home routes to improve initial load time.
 */
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Background from './components/Background';
import { DataProvider } from './context/DataContext';
import './App.css';

// Lazy loaded components for better performance
const About = lazy(() => import('./components/About'));
const Learnings = lazy(() => import('./components/Learnings'));

// Loading component for suspense fallback
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#a855f7',
    fontSize: '1.2rem'
  }}>
    Loading...
  </div>
);

/**
 * Custom theme configuration for the application
 * Uses a dark theme with purple accents for a modern tech look
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7',      // Purple accent color
      light: '#c084fc',     // Lighter purple for hover states
      dark: '#9333ea',      // Darker purple for active states
    },
    background: {
      default: '#0f172a',   // Dark blue background
      paper: '#1e293b',     // Slightly lighter blue for cards
    },
    text: {
      primary: '#ffffff',   // White text for high contrast
      secondary: '#94a3b8', // Muted gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0f172a',
          color: '#ffffff',
        },
      },
    },
  },
});

/**
 * App Component
 * 
 * Provides the overall structure of the application with:
 * - ThemeProvider for consistent styling
 * - DataProvider for accessing personal data across the app
 * - Router for navigation between pages
 * - Background component for visual effects
 * - Navbar for site navigation
 * - Routes for different pages of the portfolio
 * 
 * @returns {JSX.Element} The rendered application
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Reset default CSS */}
      <CssBaseline />
      
      {/* Data Provider for personal information */}
      <DataProvider>
        {/* Router setup for navigation */}
        <Router>
          <div className="App">
            {/* Background provides the animated background effect */}
            <Background />
            
            {/* Navbar for site navigation */}
            <Navbar />
            
            {/* Routes configuration with lazy loading */}
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learnings" element={<Learnings />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
