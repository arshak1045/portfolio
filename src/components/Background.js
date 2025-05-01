/**
 * Background Component
 * 
 * Creates the visual background for the entire application with:
 * - A base colored background
 * - Optional pattern or image overlay
 * - Gradient color effect for visual interest
 * 
 * The background is fixed and spans the entire viewport, positioned
 * behind all other content with the appropriate z-index.
 */
import React from 'react';
import '../styles/Background.css';

/**
 * Background Component
 * 
 * Renders a decorative background for the entire application
 * with layered elements for visual depth and interest.
 * 
 * @returns {JSX.Element} The background component
 */
const Background = () => {
  return (
    <div className="background-pattern">
      {/* Base background image (pattern or texture) */}
      <div className="background-image" />
      
      {/* Colored gradient overlay for visual effect */}
      <div className="gradient-overlay" />
    </div>
  );
};

export default Background;
