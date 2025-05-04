import React from 'react';
import { Container, Typography, Box, IconButton, Paper, Tooltip, useMediaQuery, useTheme, Button } from '@mui/material';
import '../styles/Home.css';
import { usePortfolioData } from '../context/DataContext';
import { LocationOnIcon } from '../data/contactInfo';
import { commonStyles } from '../styles/common';
import { SectionTitle, ContentCard } from './shared';
import { generateResume } from '../utils/resumeGenerator';
import DownloadIcon from '@mui/icons-material/Download';

/**
 * Home Component
 * 
 * Main landing page of the portfolio website that displays:
 * - Personal introduction and headline
 * - Professional title
 * - Contact information sidebar with tooltip details
 * - About Me section with bio
 * 
 * @returns {JSX.Element} The Home page content
 */
const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  // Use the portfolio data from context
  const { 
    personalInfo, 
    contactInfoArray,
    skills,
    experience,
    education
  } = usePortfolioData();

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
          {/* Render contact cards using the contactInfoArray from context */}
          {contactInfoArray.filter(contact => contact.id !== 'location').map((contact) => {
            const Icon = contact.icon;
            return (
              <Tooltip 
                key={contact.id}
                title={contact.value} 
                placement={isDesktop ? "left" : "top"}
                arrow
                sx={commonStyles.tooltip}
              >
                <Paper 
                  className="contact-item"
                  sx={commonStyles.contactCard}
                >
                  <IconButton 
                    sx={commonStyles.contactIconButton}
                    href={contact.href}
                    target={contact.target}
                  >
                    <Icon />
                  </IconButton>
                  <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                    {contact.label}
                  </Typography>
                </Paper>
              </Tooltip>
            );
          })}
        </Box>
        
        {/* Location information */}
        <Tooltip 
          title={personalInfo.location.full} 
          placement={isDesktop ? "left" : "top"}
          arrow
          sx={commonStyles.tooltip}
        >
          <Box 
            sx={{
              ...commonStyles.contactCard,
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
                width: '50%',
                height: '2px',
                background: 'linear-gradient(90deg, #a855f7 0%, rgba(168, 85, 247, 0) 100%)'
              }
            }}
          >
            Contact Me
          </Typography>
          {renderContactCards()}
        </Box>
      );
    } else {
      // Mobile: Horizontal contact bar at the bottom of the hero section
      return (
        <Box
          className="contacts-mobile"
          sx={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 6,
            mb: 4
          }}
        >
          {renderContactCards()}
        </Box>
      );
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 10, sm: 12, md: 16 } }}>
      <Box 
        className="hero-content"
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography
          variant="h1"
          className="name-title"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 800,
            backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #a855f7 100%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1,
            textShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
          }}
        >
          {personalInfo.name}
        </Typography>
        
        <Typography
          variant="h2"
          className="profession-title"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
            fontWeight: 600,
            color: '#94a3b8',
            mb: 3,
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          {personalInfo.title}
        </Typography>
        
        <Typography
          variant="body1"
          className="intro-text"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            fontWeight: 400,
            maxWidth: '800px',
            color: '#d1d5db',
            mb: 3,
            lineHeight: 1.6
          }}
        >
          {personalInfo.headline}
        </Typography>
        
        {/* Download CV Button */}
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => {
            console.log('Generating resume with:', { personalInfo, skills, experience, education });
            generateResume(personalInfo, skills, experience, education);
          }}
          sx={{
            backgroundColor: '#a855f7',
            mb: 5,
            px: 3,
            py: 1,
            borderRadius: '8px',
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
            '&:hover': {
              backgroundColor: '#9333ea',
              boxShadow: '0 6px 20px rgba(168, 85, 247, 0.6)',
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Download CV
        </Button>
        
        {/* Render contacts section */}
        {renderContacts()}
      </Box>

      {/* About Me Section */}
      <Box 
        sx={{ 
          mt: 12, 
          mb: 12,
          maxWidth: '900px',
          mx: 'auto'
        }}
      >
        <SectionTitle>About Me</SectionTitle>

        <ContentCard hoverEffect>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#fff', 
              lineHeight: 1.8,
              fontSize: '1.1rem',
              textAlign: 'center'
            }}
          >
            {personalInfo.bio}
          </Typography>
        </ContentCard>
      </Box>
    </Container>
  );
};

export default Home;
