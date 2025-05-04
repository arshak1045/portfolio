/**
 * Section Title Component
 * 
 * A reusable component for section titles with consistent styling.
 * Uses the common styles for section titles.
 */
import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { commonStyles } from '../../styles/common';

/**
 * SectionTitle Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.children - Title text
 * @param {Object} props.sx - Additional MUI sx styles to apply
 * @returns {JSX.Element} Section title with consistent styling
 */
const SectionTitle = ({ children, sx = {} }) => {
  return (
    <Typography 
      variant="h3" 
      sx={{ ...commonStyles.sectionTitle, ...sx }}
    >
      {children}
    </Typography>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
};

export default SectionTitle; 