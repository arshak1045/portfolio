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
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Box, 
  useMediaQuery, 
  useTheme, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePortfolioData } from '../context/DataContext';
import '../styles/Navbar.css';

/**
 * Navbar Component
 * Handles navigation and responsive menu behavior
 * 
 * @returns {JSX.Element} The navigation bar component
 */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from context
  const { personalInfo } = usePortfolioData();

  // Navigation items with paths and labels
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/learnings', label: 'Learnings' }
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigate to route and close mobile menu
  const handleNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <AppBar 
      position="fixed" 
      className={scrolled ? 'navbar scrolled' : 'navbar'}
      sx={{ 
        boxShadow: 'none',
        background: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        padding: { xs: '0.5rem 0', md: scrolled ? '0.5rem 0' : '1rem 0' }
      }}
    >
      <Toolbar 
        sx={{ 
          width: '100%', 
          maxWidth: 'xl',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo / Name */}
        <Box 
          onClick={() => handleNavClick('/')}
          sx={{ 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#a855f7',
              letterSpacing: '0.5px'
            }}
          >
            {personalInfo.name.split(' ')[0]}
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => handleNavClick(item.path)} 
                sx={{ 
                  color: location.pathname === item.path ? '#a855f7' : '#fff',
                  mx: 1,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: location.pathname === item.path ? '0%' : '50%',
                    width: location.pathname === item.path ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: '#a855f7',
                    transition: 'all 0.3s ease-in-out',
                    transformOrigin: 'center',
                    opacity: location.pathname === item.path ? 1 : 0
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '100%',
                      left: '0%',
                      opacity: 1
                    }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton 
            color="inherit" 
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { 
            width: '240px',
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '-5px 0 30px rgba(0, 0, 0, 0.3)',
            borderLeft: '1px solid rgba(168, 85, 247, 0.2)'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ color: '#a855f7' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 3 }}>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.path} 
              onClick={() => handleNavClick(item.path)}
              sx={{ 
                mb: 1,
                background: location.pathname === item.path ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                borderRadius: '8px',
                '&:hover': {
                  background: 'rgba(168, 85, 247, 0.1)'
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  '& .MuiTypography-root': {
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    color: location.pathname === item.path ? '#a855f7' : '#fff'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
