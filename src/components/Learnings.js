/**
 * Learnings Component
 * Displays professional certificates and GitHub projects in an interactive grid layout.
 */

import React, { useState } from 'react';
import { Container, Typography, Box, Grid, IconButton, Modal, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { commonStyles, colors, effects } from '../styles/common';
import '../styles/Learnings.css';
import { usePortfolioData } from '../context/DataContext';
import { SectionTitle, ContentCard } from './shared';

const Learnings = () => {
  // State for certificate modal
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Use data from context
  const { 
    projects, 
    getRecentCertifications 
  } = usePortfolioData();
  
  // Get certificates and sort by date (newest first)
  const certificates = getRecentCertifications();

  return (
    <Container>
      <Box sx={{ mt: 12, mb: 8 }}>
        {/* Certificates Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle>Certificates</SectionTitle>

          {/* Certificates Grid */}
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="certificate-item"
                onClick={() => setSelectedImage(cert)}
              >
                <img
                  src={process.env.PUBLIC_URL + cert.imageUrl}
                  alt={cert.title}
                />
                <div className="certificate-title">
                  {cert.title}
                </div>
                <div className="certificate-platform">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* GitHub Projects Section */}
        <Box sx={{ mt: 8 }}>
          <SectionTitle>Projects</SectionTitle>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <ContentCard className="project-item">
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
                      <Box
                        key={techIndex}
                        component="span"
                        sx={commonStyles.tag}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </ContentCard>
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
              src={selectedImage ? process.env.PUBLIC_URL + selectedImage.imageUrl : ''}
              alt={selectedImage?.title}
              sx={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: effects.shadows.medium
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Learnings;
