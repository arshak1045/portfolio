/**
 * Theme Configuration Module
 * 
 * Centralized style definitions for consistent UI across the application.
 * This module exports color definitions, effects, and common component styles
 * that can be used throughout the application.
 * 
 * Benefits of this approach:
 * - Ensures visual consistency
 * - Makes global style changes easier
 * - Reduces style duplication across components
 */

/**
 * Color Palette
 * 
 * Primary colors and their variants used throughout the application.
 * Using this centralized palette ensures color consistency.
 */
export const colors = {
  primary: '#a855f7',      // Purple accent color
  background: {
    main: 'rgba(30, 41, 59, 0.4)',  // Main background with transparency
    hover: 'rgba(30, 41, 59, 0.6)'   // Darker shade for hover effects
  },
  text: {
    primary: '#fff',       // Main text color
    secondary: '#94a3b8'    // Subtitle and less emphasis text
  },
  border: 'rgba(168, 85, 247, 0.15)'  // Purple-tinted borders
};

/**
 * Base Visual Effects
 * 
 * Reusable style effect definitions including glassmorphism,
 * transitions, and shadows.
 */
export const effects = {
  // Glass morphism effect used across components
  glass: {
    background: colors.background.main,
    backdropFilter: 'blur(20px)',
    border: `1px solid ${colors.border}`,
    borderRadius: '16px',
  },
  // Hover transition for interactive elements
  hoverTransition: {
    transition: 'all 0.3s ease',
  },
  // Shadow effects
  shadows: {
    soft: '0 4px 30px rgba(0, 0, 0, 0.1)',
    medium: '0 8px 30px rgba(0, 0, 0, 0.2)'
  }
};

/**
 * Common Component Styles
 * 
 * Reusable style objects for consistent UI components across the application.
 * These styles can be applied directly to Material UI components.
 */
export const commonStyles = {
  /**
   * Base glass effect
   * Applies a translucent, blurred background with subtle border
   */
  glassEffect: effects.glass,

  /**
   * Section title with purple underline
   * Used for main section headings throughout the site
   */
  sectionTitle: {
    color: colors.text.primary,
    fontWeight: 600,
    textAlign: 'center',
    position: 'relative',
    mb: 6,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: colors.primary,
      borderRadius: '2px'
    }
  },

  /**
   * Category header style
   * Used for section subheadings in accent color
   */
  categoryHeader: {
    color: colors.primary,
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    textAlign: 'center',
    mb: 2
  },

  /**
   * Main title style
   * Used for large, prominent titles
   */
  mainTitle: {
    color: colors.text.primary,
    fontWeight: 600,
    mb: 2,
    textAlign: 'center',
    fontSize: '2.5rem'
  },

  /**
   * Subtitle text style
   * Used for descriptive text under headings
   */
  subtitle: {
    color: colors.text.secondary,
    textAlign: 'center',
    maxWidth: '600px',
    mx: 'auto'
  },

  /**
   * Paper component with glass effect
   * Used for cards and content containers
   */
  paper: {
    ...effects.glass,
    p: 3,
    boxShadow: effects.shadows.soft,
    ...effects.hoverTransition,
    '&:hover': {
      boxShadow: effects.shadows.medium
    }
  },

  /**
   * Modal box styling
   * Used for modal dialogs and popups
   */
  modalBox: {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
    outline: 'none',
    ...effects.glass,
    boxShadow: effects.shadows.medium
  },

  /**
   * Tag/chip styling
   * Used for technology labels, categories, etc.
   */
  tag: {
    px: 1.5,
    py: 0.5,
    background: 'rgba(168, 85, 247, 0.08)',
    backdropFilter: 'blur(20px)',
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    color: colors.text.primary,
    ...effects.hoverTransition,
    '&:hover': {
      background: 'rgba(168, 85, 247, 0.15)',
      transform: 'translateY(-2px)'
    }
  },

  /**
   * Icon button styling
   * Used for action buttons with icons
   */
  iconButton: {
    color: colors.text.primary,
    background: colors.background.main,
    backdropFilter: 'blur(20px)',
    border: `1px solid ${colors.border}`,
    ...effects.hoverTransition,
    '&:hover': {
      color: colors.primary,
      background: colors.background.hover
    }
  },

  /**
   * Tooltip styling
   * Used for tooltips throughout the site
   */
  tooltip: {
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
  },

  /**
   * Contact card styling
   * Used for contact information cards
   */
  contactCard: {
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
  },

  /**
   * Contact icon button styling
   * Used specifically for contact buttons
   */
  contactIconButton: {
    color: '#a855f7',
    p: 1,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    '&:hover': { 
      backgroundColor: 'rgba(168, 85, 247, 0.2)' 
    }
  },

  /**
   * Enhanced hover effect for content cards
   * Used for cards that need more pronounced hover animations
   */
  cardHoverEffect: {
    transform: 'translateY(0)',
    transition: 'all 0.4s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(168, 85, 247, 0.3)',
      borderColor: 'rgba(168, 85, 247, 0.4)',
      '&::after': {
        opacity: 1
      }
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
    }
  }
};
