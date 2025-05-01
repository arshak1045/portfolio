/**
 * Navigation Bar Component
 * 
 * Provides the main navigation for the portfolio website with:
 * - Brand/Name as a link to home page
 * - Navigation links to different sections
 * - Visual indicators for the currently active page
 * 
 * The navbar has a transparent background with a glass-like effect
 * and highlights the active navigation item.
 */
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

/**
 * Navbar Component
 * 
 * @returns {JSX.Element} The navigation bar
 */
const Navbar = () => {
  // Get current location to determine active navigation link
  const location = useLocation();
  
  // Track scroll position for navbar background change
  const [scrolled, setScrolled] = useState(false);

  /**
   * Handle scroll events to update navbar appearance
   */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  /**
   * Determines if a navigation link is active based on current path
   * 
   * @param {string} path - The path to check against current location
   * @returns {boolean} True if the path matches current location
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  /**
   * Navigation links configuration
   * Each link has a path and display label
   */
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/learnings', label: 'Learnings' }
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      sx={{ 
        background: scrolled ? 'transparent' : 'transparent',
        boxShadow: 'none',
        py: scrolled ? 1 : 2,
        transition: 'all 0.3s ease'
      }}>
      <Toolbar>
        {/* Logo/Name - links to home page */}
        <Typography 
          variant="h6" 
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold',
            letterSpacing: 1,
            color: '#fff',
            textDecoration: 'none'
          }}>
          Arshak Hayriyan
        </Typography>

        {/* Navigation Links */}
        <Box 
          className="nav-links-container"
          sx={{
            '& .MuiButton-root': {
              mx: 1,
              color: '#fff',
              fontSize: '0.9rem',
              textTransform: 'none',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: '#a855f7',
                background: 'transparent'
              }
            }
          }}>
          {/* Map over navLinks to generate navigation buttons */}
          {navLinks.map((link) => (
            <Button 
              key={link.path}
              component={Link} 
              to={link.path} 
              sx={{
                // Highlight active link with color and bottom border
                color: isActive(link.path) ? '#a855f7' : '#fff',
                borderBottom: isActive(link.path) ? '2px solid #a855f7' : 'none'
              }}
            >
              {link.label}
            </Button>
          ))}

          {/* Empty IconButton - could be used for theme toggle or social links */}
          <IconButton 
            sx={{ 
              ml: 2,
              color: '#fff',
              '&:hover': {
                color: '#a855f7',
                background: 'transparent'
              }
            }}>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
