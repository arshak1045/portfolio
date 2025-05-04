/**
 * Education Information
 * 
 * Contains details about educational background, including degrees,
 * institutions, courses, and certifications.
 */

const education = {
  degrees: [],
  
  certifications: [
    {
      id: "cert1",
      title: "Clean Architecture in .NET Core MVC|.NET 8| - Complete Guide",
      issuer: "Udemy",
      date: "2023-09",
      expirationDate: null,
      credentialId: "UC-CLEAN-ARCH",
      credentialUrl: "#",
      imageUrl: "/images/certificates/clean-architecture.jpg"
    },
    {
      id: "cert2",
      title: "Selenium WebDriver with C# from Scratch - Nunit Framework",
      issuer: "Udemy",
      date: "2022-11",
      expirationDate: null,
      credentialId: "UC-SELENIUM",
      credentialUrl: "#",
      imageUrl: "/images/certificates/selenium.jpg"
    },
    {
      id: "cert3",
      title: "Complete C# Masterclass",
      issuer: "Udemy",
      date: "2022-05",
      expirationDate: null,
      credentialId: "UC-CSHARP",
      credentialUrl: "#",
      imageUrl: "/images/certificates/csharp.jpg"
    }
  ],
};

// Helper functions for education filtering
export const getLatestDegree = () => {
  return education.degrees.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))[0];
};

export const getRecentCertifications = (count = education.certifications.length) => {
  return education.certifications
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

export default education; 