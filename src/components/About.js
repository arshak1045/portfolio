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

// Common styles for section titles
const sectionTitleStyles = {
  color: '#fff',
  textAlign: 'center',
  fontWeight: 600,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    background: '#a855f7',
    borderRadius: '2px'
  }
};

/**
 * About Component
 * 
 * @returns {JSX.Element} The About page content
 */
const About = () => {
  const [loading, setLoading] = useState(true);

  /**
   * Skills data organized by categories
   * Each category contains an array of related skills
   */
  const skillsData = {
    'Tools': [
      'Postman',
      'FlaUInspect',
      'NUnit',
      'Postman',
      'Swagger',
      'Charles Proxy',
      'DevTools',
      'VS Studio',
      'Postgres',
      'Oracle',
      'MSSQL',
      'PlayWright',
      'Aqua',
      'WeBstorm'
    ],
    'Programming': [
      'C#',
      'JavaScript',
      'TypeScript',
      'SQL',
      'Powershell',
      '.NET',
      'Playwright',
      'NUnit',
      'Selenium',
      'ASP.NET',
      'Blazor WebAssembly',
      'WPF'
    ],
    'DevOps & CI/CD': [
      'Git',
      'Jenkins',
      'AWS',
      'CodeBuild',
      'SSM',
      'EC2',
      'PsExec'
    ],
    'Project Management': [
      'Jira ',
      'Confluence',
      'TestRail ',
      'Agile',
      'Scrum',
      'Kanban'
    ]
  };

  // Experience data
  const experienceData = {
    title: 'Software QA Engineer',
    company: 'Zealous CJSC',
    period: '2021 - Present',
    responsibilities: [
      'Developed and maintained an automated testing framework for desktop applications using C#, FlaUI, and NUnit, significantly reducing manual testing time and improving test efficiency.',
      'Designed and implemented web automation tests with Playwright and TypeScript, increasing coverage and reliability for web applications while minimizing the need for manual tests.',
      'Configured automated test execution on EC2 instances using AWS CodeBuild, SSM, and PowerShell with PsExec, allowing for efficient and scalable testing in cloud environments.',
      'Integrated Allure reporting into the testing process, generating comprehensive reports and storing logs in S3, providing clear insights into test execution and results.',
      'Conducted thorough API testing using Postman, Charles Proxy, and Swagger, validating that RESTful APIs met functional and performance requirements.',
      'Automated APIs for an internal Slackbot project using Postman, ensuring seamless communication and functionality of the bot\'s APIs.',
      'Set up and maintained a Jenkins project to automate testing within the CI/CD pipeline, streamlining the process of building, testing, and deploying software.',
      'Worked closely with development teams in an Agile environment, using Jira and TestRail to track test cases, manage defects, and ensure testing aligned with sprint goals.',
      'Validated data integrity across PostgreSQL, Oracle, and MS SQL Server databases, ensuring accuracy and consistency of application data.'
    ]
  };

  return (
    <Container>
      {/* Experience Section */}
      <Box sx={{ mt: 8, mb: 8 }}>
        {/* Section Title with purple underline */}
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={sectionTitleStyles}>
          Experience
        </Typography>

        {/* Experience Card with shimmer effect */}
        <Paper 
          elevation={3} 
          className="experience-card"
          sx={{ 
            p: 4, 
            mt: 6,
            background: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(168, 85, 247, 0.15)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}>
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
        </Paper>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 8 }}>
        {/* Section Title */}
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={sectionTitleStyles}>
          Skills
        </Typography>

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
          >
            {/* Map over skills categories to create slides */}
            {Object.entries(skillsData).map(([category, skillList]) => (
              <SwiperSlide key={category}>
                {loading ? (
                  <Skeleton variant="rectangular" width="90%" height={200} sx={{ mx: 'auto', borderRadius: '16px' }} />
                ) : (
                  <Paper 
                    className="skills-category-card"
                    sx={{ 
                      p: 4,
                      background: 'rgba(30, 41, 59, 0.4)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(168, 85, 247, 0.15)',
                      borderRadius: '16px',
                      minHeight: '150px',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      transform: 'translateZ(0)', // Hardware acceleration
                      willChange: 'opacity',      // Performance optimization
                      mx: 'auto',                 // Center the slide
                      maxWidth: '90%'             // Prevent overflow issues
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
          
          {/* Custom Navigation Buttons */}
          <IconButton 
            className="swiper-custom-prev" 
            sx={{ 
              position: 'absolute',
              left: { xs: '5px', sm: '-5px', md: '-20px' },
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#fff',
              zIndex: 20,
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              p: 1,
              '&:hover': { 
                color: '#a855f7',
                background: 'rgba(30, 41, 59, 0.8)'
              }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          
          <IconButton 
            className="swiper-custom-next"
            sx={{ 
              position: 'absolute',
              right: { xs: '5px', sm: '-5px', md: '-20px' },
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#fff',
              zIndex: 20,
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              p: 1,
              '&:hover': { 
                color: '#a855f7',
                background: 'rgba(30, 41, 59, 0.8)'
              }
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
