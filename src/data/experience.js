/**
 * Work Experience
 * 
 * Contains professional work history and details about past roles, 
 * responsibilities, and achievements.
 */

const experience = [
  {
    id: "job1",
    title: "Software QA Engineer",
    company: "Zealous CJSC",
    location: "Yerevan, Armenia",
    startDate: "2021-01",
    endDate: "Present",
    current: true,
    description: "Lead automation testing for web, desktop, and API applications using modern testing frameworks and CI/CD integration.",
    responsibilities: [
      "Developed and maintained an automated testing framework for desktop applications using C#, FlaUI, and NUnit, significantly reducing manual testing time and improving test efficiency.",
      "Designed and implemented web automation tests with Playwright and TypeScript, increasing coverage and reliability for web applications while minimizing the need for manual tests.",
      "Configured automated test execution on EC2 instances using AWS CodeBuild, SSM, and PowerShell with PsExec, allowing for efficient and scalable testing in cloud environments.",
      "Integrated Allure reporting into the testing process, generating comprehensive reports and storing logs in S3, providing clear insights into test execution and results.",
      "Conducted thorough API testing using Postman, Charles Proxy, and Swagger, validating that RESTful APIs met functional and performance requirements.",
      "Automated APIs for an internal Slackbot project using Postman, ensuring seamless communication and functionality of the bot's APIs.",
      "Set up and maintained a Jenkins project to automate testing within the CI/CD pipeline, streamlining the process of building, testing, and deploying software.",
      "Worked closely with development teams in an Agile environment, using Jira and TestRail to track test cases, manage defects, and ensure testing aligned with sprint goals.",
      "Validated data integrity across PostgreSQL, Oracle, and MS SQL Server databases, ensuring accuracy and consistency of application data."
    ],
    technologies: ["C#", "Playwright", "TypeScript", "NUnit", "FlaUI", "AWS", "Jenkins", "Postman", "SQL"]
  }
];

// Helper functions for experience filtering
export const getCurrentJob = () => experience.find(job => job.current);

export const getPastJobs = () => experience.filter(job => !job.current);

// Sort jobs by date (most recent first)
export const getSortedExperience = () => {
  return [...experience].sort((a, b) => {
    const dateA = a.current ? new Date() : new Date(a.endDate);
    const dateB = b.current ? new Date() : new Date(b.endDate);
    return dateB - dateA;
  });
};

export default experience; 