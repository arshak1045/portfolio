/**
 * Resume Generator Utility
 * 
 * This utility creates and downloads a PDF resume based on the portfolio data.
 * It uses jsPDF and jspdf-autotable for PDF generation.
 */
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

/**
 * Generates and downloads a PDF resume
 * @param {Object} personalInfo - Personal information
 * @param {Object} skills - Skills information
 * @param {Object} experience - Experience information
 * @param {Object} education - Education information
 */
export const generateResume = (personalInfo, skills, experience, education) => {
  // Create new jsPDF instance (A4 size)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  // Set document properties
  doc.setProperties({
    title: `${personalInfo.name} - Resume`,
    subject: 'Resume',
    author: personalInfo.name,
    creator: 'Portfolio Website'
  });
  
  // Define colors and styles
  const primaryColor = [168, 85, 247]; // Purple (#a855f7)
  const textColor = [51, 51, 51]; // Dark gray (#333)
  const secondaryTextColor = [102, 102, 102]; // Medium gray (#666)
  
  // Set fonts
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  
  // Margins
  const margin = 20;
  let y = margin;
  
  // Page dimensions
  const pageHeight = doc.internal.pageSize.height;
  const maxY = pageHeight - margin; // Maximum y position before needing a new page
  
  // Helper function to check if we need a new page
  const checkForNewPage = (currentY, neededSpace) => {
    if (currentY + neededSpace > maxY) {
      doc.addPage();
      return margin;
    }
    return currentY;
  };
  
  // Helper function to add section title
  const addSectionTitle = (title, yPos) => {
    // Check if we need a new page for the section title
    yPos = checkForNewPage(yPos, 15);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title, margin, yPos);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos + 1, 190, yPos + 1);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    return yPos + 8;
  };
  
  // Header - Name and Title
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(personalInfo.name, margin, y);
  y += 8;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(secondaryTextColor[0], secondaryTextColor[1], secondaryTextColor[2]);
  doc.text(personalInfo.title, margin, y);
  y += 6;
  
  // Contact Information
  doc.setFontSize(10);
  const contactInfo = `${personalInfo.location.full} | +37433150750 | hayryan1045@gmail.com`;
  doc.text(contactInfo, margin, y);
  y += 12;
  
  // Professional Summary
  y = addSectionTitle('PROFESSIONAL SUMMARY', y);
  
  // Wrap text for bio
  const bioLines = doc.splitTextToSize(personalInfo.bio, 170);
  doc.text(bioLines, margin, y);
  y += bioLines.length * 5 + 8;
  
  // Skills Section
  y = checkForNewPage(y, 60); // Check if we need a new page for skills
  y = addSectionTitle('SKILLS', y);
  
  // Create skill lists
  const skillCategoryWidth = 85;
  let leftColumnY = y;
  let rightColumnY = y;
  
  // Helper function to add skill category
  const addSkillCategory = (title, skills, x, currentY) => {
    doc.setFont('helvetica', 'bold');
    doc.text(title, x, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 5;
    
    skills.forEach(skill => {
      // Check if we need a new page
      if (currentY > maxY - 5) {
        doc.addPage();
        currentY = margin;
      }
      
      doc.text(`• ${skill.name}`, x + 2, currentY);
      currentY += 5;
    });
    
    return currentY + 3;
  };
  
  // Left column skills (Programming & Tools)
  leftColumnY = addSkillCategory('Programming:', skills.programming, margin, leftColumnY);
  leftColumnY = addSkillCategory('Tools:', skills.tools, margin, leftColumnY);
  
  // Right column skills (DevOps & Project Management)
  rightColumnY = addSkillCategory('DevOps:', skills.devOps, margin + skillCategoryWidth, rightColumnY);
  rightColumnY = addSkillCategory('Project Management:', skills.projectManagement, margin + skillCategoryWidth, rightColumnY);
  
  // Set Y to the highest value
  y = Math.max(leftColumnY, rightColumnY);
  
  // Experience Section
  y = checkForNewPage(y, 20); // Ensure space for the section title
  y = addSectionTitle('PROFESSIONAL EXPERIENCE', y);
  
  // Ensure experience is an array
  const experienceArray = Array.isArray(experience) ? experience : [];
  
  experienceArray.forEach(job => {
    // Check if we need a new page for this job
    y = checkForNewPage(y, 20); // At least 20mm for job title, company, dates
    
    // Job title and company
    doc.setFont('helvetica', 'bold');
    doc.text(job.title, margin, y);
    y += 5;
    
    doc.setFont('helvetica', 'italic');
    doc.text(job.company, margin, y);
    y += 5;
    
    // Dates
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(secondaryTextColor[0], secondaryTextColor[1], secondaryTextColor[2]);
    const dateText = `${job.startDate} - ${job.current ? 'Present' : job.endDate}`;
    doc.text(dateText, margin, y);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    y += 6;
    
    // Job responsibilities
    if (job.responsibilities && Array.isArray(job.responsibilities)) {
      job.responsibilities.forEach(responsibility => {
        // Split text to fit width
        const respLines = doc.splitTextToSize(`• ${responsibility}`, 170);
        
        // Check if we need a new page for this responsibility
        const neededSpace = respLines.length * 5;
        y = checkForNewPage(y, neededSpace);
        
        // Draw the text
        doc.text(respLines, margin, y);
        y += neededSpace;
      });
    }
    
    y += 8; // Add space between jobs
  });
  
  // Education & Certifications Section
  y = checkForNewPage(y, 20); // Ensure space for the section title
  y = addSectionTitle('EDUCATION & CERTIFICATIONS', y);
  
  // Ensure certifications is an array
  const certifications = education.certifications && Array.isArray(education.certifications) 
    ? education.certifications 
    : [];
  
  certifications.forEach(cert => {
    // Check if we need a new page
    y = checkForNewPage(y, 15);
    
    doc.setFont('helvetica', 'bold');
    doc.text(cert.title, margin, y);
    y += 5;
    
    doc.setFont('helvetica', 'normal');
    const certDetails = `${cert.issuer} | ${cert.date.substring(0, 7)}`;
    doc.text(certDetails, margin, y);
    y += 8;
  });
  
  // Save the PDF
  doc.save(`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
}; 