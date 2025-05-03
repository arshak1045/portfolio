/**
 * Learnings Component
 * Displays professional certificates and GitHub projects in an interactive grid layout.
 */

import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Paper, IconButton, Modal, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { commonStyles, colors } from '../styles/common';
import '../styles/Learnings.css';

// Certificate data with fully qualified URLs
const certificates = [
  {
    title: 'Clean Architecture in .NET Core MVC|.NET 8| - Complete Guide',
    image: process.env.PUBLIC_URL + '/images/certificates/clean-architecture.jpg',
    platform: 'Udemy'
  },
  {
    title: 'Selenium WebDriver with C# from Scratch - Nunit Framework',
    image: process.env.PUBLIC_URL + '/images/certificates/selenium.jpg',
    platform: 'Udemy'
  },
  {
    title: 'Complete C# Masterclass',
    image: process.env.PUBLIC_URL + '/images/certificates/csharp.jpg',
    platform: 'Udemy'
  }
];

// Project data
const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and TailwindCSS',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/arshak1045/portfolio'
  },
  {
    title: 'Selenium Test Framework',
    description: 'Automated testing framework using Selenium and C#',
    technologies: ['C#', 'Selenium', 'NUnit'],
    githubUrl: 'https://github.com/arshak1045/SeleniumNunit'
  },
  {
    title: 'MVC Project',
    description: 'Web application using ASP.NET MVC architecture',
    technologies: ['ASP.NET', 'C#', 'SQL Server'],
    githubUrl: 'https://github.com/arshak1045/BookingVilla'
  }
];

const Learnings = () => {
  // State for certificate modal
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container>
      <Box sx={{ mt: 12, mb: 8 }}>
        {/* Certificates Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={commonStyles.sectionTitle}
          >
            Certificates
          </Typography>

          {/* Certificates Grid */}
          <div className="certificate-grid">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="certificate-item"
                onClick={() => setSelectedImage(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                />
                <div className="certificate-title">
                  {cert.title}
                </div>
                <div className="certificate-platform">
                  {cert.platform}
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* GitHub Projects Section */}
        <Box sx={{ mt: 8 }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={commonStyles.sectionTitle}
          >
            Projects
          </Typography>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  sx={commonStyles.paper}
                  className="project-item"
                >
                  {/* Project Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GitHubIcon sx={{ color: colors.text.primary, mr: 1 }} />
                    <Typography variant="h6" sx={{ color: colors.text.primary, flexGrow: 1 }}>
                      {project.title}
                    </Typography>
                    <IconButton 
                      href={project.githubUrl}
                      target="_blank"
                      sx={commonStyles.iconButton}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </Box>

                  {/* Project Description */}
                  <Typography sx={{ color: colors.text.secondary, mb: 2, flexGrow: 1 }}>
                    {project.description}
                  </Typography>

                  {/* Technology Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Paper
                        key={techIndex}
                        sx={commonStyles.tag}
                      >
                        {tech}
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Certificate Preview Modal */}
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Fade in={!!selectedImage}>
          <Box sx={commonStyles.modalBox}>
            {/* Close Button */}
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{
                position: 'absolute',
                right: -20,
                top: -20,
                ...commonStyles.iconButton
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Certificate Image */}
            <Box
              component="img"
              src={selectedImage?.image}
              alt={selectedImage?.title}
              sx={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: commonStyles.shadows
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Learnings;
