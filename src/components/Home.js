import React from 'react';
import { Container, Typography, Box, IconButton, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../styles/Home.css';

/**
 * Home Component
 * 
 * Main landing page of the portfolio website that displays:
 * - Personal introduction and headline
 * - Professional title and brief summary
 * - Profile image
 * - Contact information sidebar with tooltip details
 * 
 * @returns {JSX.Element} The Home page content
 */
const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Common styles for reuse
  const tooltipStyles = {
    '& .MuiTooltip-tooltip': {
      backgroundColor: 'rgba(30, 41, 59, 0.9)',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      fontSize: '0.9rem',
      padding: '8px 12px',
      borderRadius: '6px'
    },
    '& .MuiTooltip-arrow': {
      color: 'rgba(30, 41, 59, 0.9)'
    }
  };

  const contactCardStyles = {
    display: 'flex',
    alignItems: 'center',
    p: 1.5,
    gap: 1.5,
    width: { xs: '160px', sm: '200px' },
    background: 'rgba(30, 41, 59, 0.4)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(168, 85, 247, 0.15)',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 6px 20px rgba(168, 85, 247, 0.2)',
      borderColor: 'rgba(168, 85, 247, 0.4)'
    }
  };

  const iconButtonStyles = {
    color: '#a855f7',
    p: 1,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    '&:hover': { 
      backgroundColor: 'rgba(168, 85, 247, 0.2)' 
    }
  };

  // Contact information array for rendering
  const contactInfo = [
    {
      id: 'email',
      icon: <EmailIcon />,
      label: 'Email',
      value: 'hayryan1045@gmail.com',
      href: 'mailto:hayryan1045@gmail.com'
    },
    {
      id: 'phone',
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+37433150750',
      href: 'tel:+37433150750'
    },
    {
      id: 'telegram',
      icon: <TelegramIcon />,
      label: 'Telegram',
      value: '@arsh_hayr',
      href: 'https://t.me/arsh_hayr',
      target: '_blank'
    },
    {
      id: 'linkedin',
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'arshak-hayriyan-8a00a2229',
      href: 'https://linkedin.com/in/arshak-hayriyan-8a00a2229',
      target: '_blank'
    }
  ];

  // Render the contacts section in different layouts based on screen size
  const renderContacts = () => {
    // Common contact cards rendering logic
    const renderContactCards = () => (
      <>
        {/* Contact cards */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isDesktop ? 'column' : 'row',
          flexWrap: isDesktop ? 'nowrap' : 'wrap',
          gap: 2,
          justifyContent: isDesktop ? 'flex-start' : 'center'
        }}>
          {/* Render contact cards using the contactInfo array */}
          {contactInfo.map((contact) => (
            <Tooltip 
              key={contact.id}
              title={contact.value} 
              placement={isDesktop ? "left" : "top"}
              arrow
              sx={tooltipStyles}
            >
              <Paper 
                className="contact-item"
                sx={contactCardStyles}
              >
                <IconButton 
                  sx={iconButtonStyles}
                  href={contact.href}
                  target={contact.target}
                >
                  {contact.icon}
                </IconButton>
                <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                  {contact.label}
                </Typography>
              </Paper>
            </Tooltip>
          ))}
        </Box>
        
        {/* Location information */}
        <Tooltip 
          title="Armenia, Yerevan" 
          placement={isDesktop ? "left" : "top"}
          arrow
          sx={tooltipStyles}
        >
          <Box 
            sx={{
              ...contactCardStyles,
              mt: isDesktop ? 3 : 2,
              mx: isDesktop ? 0 : 'auto'
            }}
            className="contact-item"
          >
            <LocationOnIcon sx={{ color: '#a855f7', mr: 1.5, fontSize: '1.2rem' }} />
            <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
              Location
            </Typography>
          </Box>
        </Tooltip>
      </>
    );

    if (isDesktop) {
      // Desktop: Side panel that stays visible
      return (
        <Box
          className="contacts-sidebar"
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'fixed',
            right: { lg: '5%', xl: '10%' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            padding: 2,
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.3)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168, 85, 247, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#a855f7', 
              mb: 2,
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                width: '30px',
                height: '2px',
                background: '#a855f7',
                borderRadius: '2px'
              }
            }}
          >
            Contacts
          </Typography>
          
          {renderContactCards()}
        </Box>
      );
    } else {
      // Mobile/Tablet: Bottom of the page
      return (
        <Box
          className="contacts-mobile"
          sx={{ 
            width: '100%',
            my: 6,
            py: 4,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.3)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168, 85, 247, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#a855f7', 
              mb: 3,
              fontWeight: 600,
              position: 'relative',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '2px',
                background: '#a855f7',
                borderRadius: '2px'
              }
            }}
          >
            Contacts
          </Typography>
          
          {renderContactCards()}
        </Box>
      );
    }
  };

  return (
    <Container maxWidth="lg">
      <Box 
        className="home-container"
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
          position: 'relative',
          zIndex: 1,
          pt: { xs: 4, md: 0 }
        }}>
        
        {/* Desktop Contacts section - right side */}
        {isDesktop && renderContacts()}

        {/* Text content section */}
        <Box 
          className="content-section"
          sx={{ flex: 1 }}>
          {/* Name with highlighted accent */}
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 500,
              mb: 2,
              color: '#fff'
            }}>
            Hi, I'm <span style={{ color: '#a855f7' }}>Arshak Hayriyan</span>
          </Typography>
          
          {/* Professional title */}
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#fff',
              mb: 3,
              fontWeight: 400
            }}>
            Software QA Engineer
          </Typography>
          
          {/* Brief professional summary */}
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#fff',
              maxWidth: '600px',
              mb: 4,
              lineHeight: 1.8
            }}>
            Experienced Software QA Engineer with over 4 years of expertise in automated testing for web, desktop, and API applications.
            Adept at designing and executing comprehensive test strategies that ensure high-quality software delivery throughout the development lifecycle. 
            Skilled in integrating automated tests into CI/CD pipelines, optimizing testing processes, and collaborating with development teams to improve workflows and accelerate delivery cycles. 
            Known for strong problem-solving skills and the ability to identify and resolve issues early in the process, ensuring robust and reliable software. 
            Focused on enhancing test coverage, efficiency, and scalability, while staying aligned with Agile methodologies. 
            Committed to continuous learning and improving testing practices to meet evolving business needs and deliver high-performing, reliable software solutions.
          </Typography>
        </Box>

        {/* Profile image section */}
        <Box 
          className="profile-image-container"
          sx={{ 
            flex: '0 0 auto',
            width: { xs: '280px', md: '320px' },
            height: { xs: '280px', md: '320px' },
            position: 'relative'
          }}
        >
          <Box
            component="img"
            className="profile-image"
            src="/images/profile.jpg"
            alt="Arshak Hayriyan"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              background: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(20px)'
            }}
          />
        </Box>
        
        {/* Mobile/Tablet Contacts section - bottom */}
        {!isDesktop && renderContacts()}
      </Box>
    </Container>
  );
};

export default Home;
