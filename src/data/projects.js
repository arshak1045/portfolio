/**
 * Projects
 * 
 * This file contains all the projects showcased in the portfolio.
 * Each project has details about technologies used, descriptions, and links.
 */

const projects = [
  {
    id: "project1",
    title: "Portfolio Website",
    description: "Personal portfolio built with React and TailwindCSS",
    longDescription: "Personal portfolio website built with React and Material UI to showcase skills, experience, and projects. Features responsive design, interactive UI components, and dynamic content rendering.",
    technologies: ["React", "TypeScript", "Material UI"],
    thumbnail: "/images/projects/portfolio-thumb.jpg",
    images: [
      "/images/projects/portfolio-1.jpg",
      "/images/projects/portfolio-2.jpg"
    ],
    demoUrl: "https://arshak1045.github.io/portfolio",
    githubUrl: "https://github.com/arshak1045/portfolio",
    featured: true,
    completionDate: "2023-12-15"
  },
  {
    id: "project2",
    title: "Selenium Test Framework",
    description: "Automated testing framework using Selenium and C#",
    longDescription: "Comprehensive testing framework built with Selenium WebDriver and C# using the NUnit testing framework. Includes page object model architecture, custom reporting, and integration with CI/CD pipelines.",
    technologies: ["C#", "Selenium", "NUnit"],
    thumbnail: "/images/projects/selenium-thumb.jpg",
    images: [
      "/images/projects/selenium-1.jpg",
      "/images/projects/selenium-2.jpg"
    ],
    demoUrl: null,
    githubUrl: "https://github.com/arshak1045/SeleniumNunit",
    featured: true,
    completionDate: "2023-06-20"
  },
  {
    id: "project3",
    title: "MVC Project",
    description: "Web application using ASP.NET MVC architecture",
    longDescription: "Booking Villa web application built with ASP.NET MVC architecture. Features include user authentication, property listings, booking system, and admin dashboard for property management.",
    technologies: ["ASP.NET", "C#", "SQL Server"],
    thumbnail: "/images/projects/mvc-thumb.jpg",
    images: [
      "/images/projects/mvc-1.jpg",
      "/images/projects/mvc-2.jpg"
    ],
    demoUrl: null,
    githubUrl: "https://github.com/arshak1045/BookingVilla",
    featured: false,
    completionDate: "2022-11-10"
  }
];

// Helper functions for project filtering
export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectsByTechnology = (technology) => 
  projects.filter(project => project.technologies.includes(technology));

export const getProjectById = (id) => 
  projects.find(project => project.id === id);

export default projects; 