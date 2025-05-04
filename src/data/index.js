/**
 * Data Index
 * 
 * This file serves as a central export point for all data files.
 * Import this file to access all data using destructuring.
 */

import personalInfo from './personalInfo';
import contactInfo, { contactInfoArray } from './contactInfo';
import skills, { allSkills, skillsByLevel } from './skills';
import projects, { getFeaturedProjects, getProjectsByTechnology, getProjectById } from './projects';
import experience, { getCurrentJob, getPastJobs, getSortedExperience } from './experience';
import education, { getLatestDegree, getRecentCertifications } from './education';

// Export all data and helper functions
export {
  // Personal Info
  personalInfo,
  
  // Contact Info
  contactInfo,
  contactInfoArray,
  
  // Skills
  skills,
  allSkills,
  skillsByLevel,
  
  // Projects
  projects,
  getFeaturedProjects,
  getProjectsByTechnology,
  getProjectById,
  
  // Experience
  experience,
  getCurrentJob,
  getPastJobs,
  getSortedExperience,
  
  // Education
  education,
  getLatestDegree,
  getRecentCertifications
}; 