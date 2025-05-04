/**
 * About Page Component
 * 
 * This component displays personal and professional information including:
 * - Professional experience
 * - Technical skills with interactive carousel
 * 
 * The skills carousel uses Swiper with fade effect for smooth transitions
 * between different skill categories.
 */
import React, { useState } from 'react';
import { Container, Typography, Box, Paper, IconButton, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../styles/About.css';
import { usePortfolioData } from '../context/DataContext';
import { SectionTitle, ContentCard } from './shared';
import { commonStyles } from '../styles/common';

/**
 * About Component
 * 
 * @returns {JSX.Element} The About page content
 */
const About = () => {
  const [loading, setLoading] = useState(true);
  
  // Get data from context
  const { skills, getCurrentJob } = usePortfolioData();
  
  // Get the current job
  const currentJob = getCurrentJob();

  /**
   * Skills data organized by categories
   * Each category contains an array of related skills
   */
  const skillsData = {
    'Tools': skills.tools.map(skill => skill.name),
    'Programming': skills.programming.map(skill => skill.name),
    'DevOps & CI/CD': skills.devOps.map(skill => skill.name),
    'Project Management': skills.projectManagement.map(skill => skill.name)
  };

  // Experience data from context
  const experienceData = {
    title: currentJob.title,
    company: currentJob.company,
    period: `${currentJob.startDate.substring(0, 4)} - ${currentJob.current ? 'Present' : currentJob.endDate.substring(0, 4)}`,
    responsibilities: currentJob.responsibilities
  };

  return (
    <Container>
      {/* Experience Section */}
      <Box sx={{ mt: 8, mb: 8 }}>
        {/* Section Title with purple underline */}
        <SectionTitle>Experience</SectionTitle>

        {/* Experience Card with shimmer effect */}
        <ContentCard hoverEffect>
          {/* Job Title */}
          <Typography variant="h5" gutterBottom sx={{ color: '#a855f7', fontWeight: 600 }}>
            {experienceData.title}
          </Typography>
          
          {/* Company and Duration */}
          <Typography variant="subtitle1" gutterBottom sx={{ color: '#94a3b8', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
            {experienceData.company} • {experienceData.period}
          </Typography>
          
          {/* Job Responsibilities */}
          <Typography 
            component="div"
            sx={{ 
              color: '#fff', 
              mt: 2,
              lineHeight: 1.6,
              fontSize: '0.95rem',
              letterSpacing: '0.2px',
              '& span': {
                display: 'inline-block',
                width: '12px',
                color: '#a855f7',
                marginRight: '8px', 
                fontWeight: 600,
                verticalAlign: 'top'
              },
              '& p': {
                display: 'inline-block',
                width: 'calc(100% - 20px)',
                margin: 0,
                marginBottom: '12px'
              }
            }}>
            {experienceData.responsibilities.map((responsibility, index) => (
              <Box key={index} sx={{ display: 'flex', marginBottom: '12px' }}>
                <Box component="span" sx={{ color: '#a855f7', marginRight: '8px', fontWeight: 600 }}>•</Box>
                <Typography component="p" sx={{ margin: 0 }}>{responsibility}</Typography>
              </Box>
            ))}
          </Typography>
        </ContentCard>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 12 }}>
        {/* Section Title */}
        <SectionTitle>Skills</SectionTitle>

        {/* Navigation Buttons Container - Moved here to be under Skills title */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 6,
          mb: 1,
          gap: 2
        }}>
          <IconButton
            className="swiper-custom-prev"
            sx={commonStyles.iconButton}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            className="swiper-custom-next"
            sx={commonStyles.iconButton}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Skills Carousel with Swiper */}
        <Box sx={{ position: 'relative', my: 4 }}>
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.swiper-custom-prev',
              nextEl: '.swiper-custom-next',
            }}
            loop={true}
            speed={600}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="skills-swiper"
            sx={{ 
              // Optimized transitions for slide changes
              '& .swiper-slide': {
                opacity: 0,
                transition: 'opacity 0.5s ease-in-out',
              },
              '& .swiper-slide-active': {
                opacity: 1
              },
              '& .swiper-slide-next, & .swiper-slide-prev': {
                opacity: 0
              }
            }}
            onSwiper={() => setLoading(false)}
            preventScrollReset={true}
          >
            {/* Map over skills categories to create slides */}
            {Object.entries(skillsData).map(([category, skillList]) => (
              <SwiperSlide key={category}>
                {loading ? (
                  <Skeleton variant="rectangular" width="90%" height={200} sx={{ mx: 'auto', borderRadius: '16px' }} />
                ) : (
                  <Paper 
                    className="skills-category-card"
                    elevation={3}
                    sx={{ 
                      position: 'relative',
                      overflow: 'hidden',
                      p: 4,
                      minHeight: '150px',
                      mx: 'auto',
                      maxWidth: '90%',
                      background: 'rgba(30, 41, 59, 0.4)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(168, 85, 247, 0.15)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 15px 30px rgba(168, 85, 247, 0.3)',
                        borderColor: 'rgba(168, 85, 247, 0.4)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.05) 0%, rgba(30, 41, 59, 0) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                        borderRadius: '16px'
                      },
                      '&:hover::after': {
                        opacity: 1
                      }
                    }}
                  >
                    {/* Category Title */}
                    <Typography variant="h5" gutterBottom sx={{ color: '#a855f7', fontWeight: 600, textAlign: 'center' }}>
                      {category}
                    </Typography>

                    {/* Skills Grid */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 2, 
                      justifyContent: 'center',
                      mt: 3
                    }}>
                      {/* Individual Skill Items */}
                      {skillList.map((skill) => (
                        <Paper
                          key={skill}
                          sx={{
                            px: 2.5,
                            py: 1,
                            background: 'rgba(168, 85, 247, 0.08)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(168, 85, 247, 0.15)',
                            borderRadius: '20px',
                            color: '#fff',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                            willChange: 'transform, background',
                            transform: 'translateZ(0)',
                            '&:hover': {
                              background: 'rgba(168, 85, 247, 0.2)',
                              transform: 'translateY(-2px) translateZ(0)',
                              boxShadow: '0 4px 12px rgba(168, 85, 247, 0.15)'
                            }
                          }}
                        >
                          {skill}
                        </Paper>
                      ))}
                    </Box>
                  </Paper>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
