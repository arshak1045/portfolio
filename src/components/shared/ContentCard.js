/**
 * Content Card Component
 * 
 * A reusable component for content cards with consistent styling.
 * Uses the common styles for paper elements.
 */
import React from 'react';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { commonStyles } from '../../styles/common';

/**
 * ContentCard Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {Object} props.sx - Additional MUI sx styles to apply
 * @param {number} props.elevation - Paper elevation
 * @param {boolean} props.hoverEffect - Whether to apply enhanced hover animation
 * @param {Object} props.paperProps - Additional props for Paper component
 * @returns {JSX.Element} Styled content card
 */
const ContentCard = ({ 
  children, 
  sx = {}, 
  elevation = 3,
  hoverEffect = false,
  ...paperProps 
}) => {
  // Combine base styles with hover effect if enabled
  const combinedStyles = {
    ...commonStyles.paper,
    ...(hoverEffect ? commonStyles.cardHoverEffect : {}),
    position: 'relative', // Required for the after pseudo-element
    overflow: 'hidden',   // Keep the gradient inside rounded corners
    ...sx
  };

  return (
    <Paper 
      elevation={elevation} 
      sx={combinedStyles} 
      {...paperProps}
    >
      {children}
    </Paper>
  );
};

ContentCard.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  elevation: PropTypes.number,
  hoverEffect: PropTypes.bool
};

export default ContentCard; 