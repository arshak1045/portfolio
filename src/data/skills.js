/**
 * Skills and Technologies
 * 
 * This file contains information about skills, technologies, and tools
 * used in your projects and professional work.
 */

const skills = {
  programming: [
    { name: "C#", level: 90, icon: "csharp" },
    { name: "JavaScript", level: 85, icon: "javascript" },
    { name: "TypeScript", level: 80, icon: "typescript" },
    { name: "SQL", level: 85, icon: "sql" },
    { name: "PowerShell", level: 75, icon: "powershell" },
    { name: ".NET", level: 85, icon: "dotnet" },
    { name: "Selenium", level: 90, icon: "selenium" },
    { name: "Playwright", level: 85, icon: "playwright" },
    { name: "NUnit", level: 90, icon: "nunit" },
    { name: "ASP.NET", level: 75, icon: "aspnet" },
    { name: "Blazor WebAssembly", level: 70, icon: "blazor" },
    { name: "WPF", level: 80, icon: "wpf" }
  ],
  
  tools: [
    { name: "Postman", level: 90, icon: "postman" },
    { name: "FlaUInspect", level: 85, icon: "flaui" },
    { name: "Swagger", level: 80, icon: "swagger" },
    { name: "Charles Proxy", level: 75, icon: "charlesproxy" },
    { name: "DevTools", level: 90, icon: "devtools" },
    { name: "VS Studio", level: 90, icon: "visualstudio" },
    { name: "Postgres", level: 75, icon: "postgres" },
    { name: "Oracle", level: 70, icon: "oracle" },
    { name: "MSSQL", level: 80, icon: "mssql" },
    { name: "Aqua", level: 70, icon: "aqua" },
    { name: "WebStorm", level: 80, icon: "webstorm" }
  ],
  
  devOps: [
    { name: "Git", level: 85, icon: "git" },
    { name: "Jenkins", level: 80, icon: "jenkins" },
    { name: "AWS", level: 75, icon: "aws" },
    { name: "CodeBuild", level: 75, icon: "codebuild" },
    { name: "SSM", level: 70, icon: "ssm" },
    { name: "EC2", level: 75, icon: "ec2" },
    { name: "PsExec", level: 70, icon: "psexec" }
  ],
  
  projectManagement: [
    { name: "Jira", level: 90, icon: "jira" },
    { name: "Confluence", level: 85, icon: "confluence" },
    { name: "TestRail", level: 90, icon: "testrail" },
    { name: "Agile", level: 85, icon: "agile" },
    { name: "Scrum", level: 85, icon: "scrum" },
    { name: "Kanban", level: 80, icon: "kanban" }
  ]
};

// All skills flattened into a single array for search/filter functionality
export const allSkills = [
  ...skills.programming,
  ...skills.tools,
  ...skills.devOps,
  ...skills.projectManagement
];

// Skills categorized by proficiency level
export const skillsByLevel = {
  expert: allSkills.filter(skill => skill.level >= 90),
  advanced: allSkills.filter(skill => skill.level >= 80 && skill.level < 90),
  intermediate: allSkills.filter(skill => skill.level >= 70 && skill.level < 80),
  beginner: allSkills.filter(skill => skill.level < 70),
};

export default skills; 