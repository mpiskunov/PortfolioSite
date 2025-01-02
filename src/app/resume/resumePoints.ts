export interface ResumePointProps {
  grouping: string;
  order: number;
  textValue: string;
  tags: Set<string>;
  displayItem: boolean;
}

export const resumePointArray: ResumePointProps[] = [
  {
    grouping: "ml",
    order: 1,
    displayItem: true,
    textValue: `Collaborated in a cross-functional team of developers
                with varying expertise, fostering knowledge transfer in
                cloud platforms (GCP, AWS), Python, and system design.
                Provided code reviews for team members using Gitlab,
                upholding consistent coding standards. Performed a
                strategic migration of a dedicated ML project in GCP
                into separate, maintainable projects for multiple teams,
                leveraging Ansible, Terraform, Gitlab, GCP, and Vault.
                Documented the process using JIRA.`,
    tags: new Set(["cloud", "gcp", "aws", "infrastructure", "python", "gitlab", "pipelines", "ansible", "automation", "terraform", "vault", "jira", "linux", "cicd", "cloud storage"]),
  },
  {
    grouping: "ml",
    order: 2,
    displayItem: true,
    textValue: `Expertly crafted a Go binary capable of integrating with
                popular communication platforms like GChat, Slack, and
                email (SendGrid). Leveraged Terraform and Docker to
                streamline deployment and automation processes within
                GitLab pipelines, ensuring reliable and scalable
                notifications across multiple machine learning
                environments.`,
    tags: new Set(["golang", "infrastructure", "integration", "terraform", "docker", "containers", "gitlab", "cicd", "pipelines", "linux", "machine learning"]),
  },
  {
    grouping: "ml",
    order: 3,
    displayItem: true,
    textValue: `Implemented FinOps best practices on GCP and AWS
                environments, utilizing metrics analysis, service
                recommendations, and custom Python scripts. Achieved
                savings of over $100,000/year.`,
    tags: new Set(["golang", "gcp", "cloud", "aws", "serverless functions", "system design", "diagrams", "python", "linux", "finops", "cloud storage"]),
  },
  {
    grouping: "ml",
    order: 4,
    displayItem: true,
    textValue: `Designed a comprehensive, automated Grafana/GCP metrics
                dashboard for all GCP projects (Python, Grafana/GCP,
                Cloud Functions, BigQuery, Terraform, GCP Metric
                Explorer). This centralized dashboard provides resource
                utilization insights for FinOps and leadership.`,
    tags: new Set(["terraform", "infrastructure", "cloud", "gcp", "grafana", "serverless functions", "automation", "sql", "python"]),
  },
  {
    grouping: "ml",
    order: 5,
    displayItem: true,
    textValue: `Developed a reusable CI/CD automation module (Terraform,
                Gitlab, Bash, GCP) for machine learning engineers,
                enabling one-click virtual machine and service
                provisioning.`,
    tags: new Set(["terraform", "cloud", "gitlab", "gcp", "bash", "automation", "virtual machines", "machine learning", "linux", "infrastructure"]),
  },
  {
    grouping: "ml",
    order: 6,
    displayItem: true,
    textValue: `Provided responsive ticket support to ML engineers for
                machine and GCP environment issues, utilizing JIRA, GCP,
                Python, and bash scripting. Proactively adapted schedule
                to assist engineers across diverse time zones through
                video calls.`,
    tags: new Set(["pagerduty", "machine learning", "jira", "python", "bash", "linux", "gcp"]),
  },
  {
    grouping: "ml",
    order: 7,
    displayItem: true,
    textValue: `Created comprehensive documentation for troubleshooting
                procedures and architectural diagrams (Lucid.app, Word,
                JIRA), guaranteeing smooth knowledge transfer for new
                developers and ensuring consistent operating procedures.`,
    tags: new Set(["documentation", "diagrams", "troubleshooting", "jira", "mentorship"]),
  },
  //-----------------------------------------------------------------------------------------------------------------------
  {
    grouping: "rm",
    order: 1,
    displayItem: true,
    textValue: `Designed and implemented a high-performance, event-driven telephony orchestration application used by hundreds of bankers for
                thousands of daily calls.`,
    tags: new Set(["c#", ".net", "aws", "terraform", "telephony", "kafka", "sqs", "postgres", "a/b testing"]),
  },
  {
    grouping: "rm",
    order: 2,
    displayItem: true,
    textValue: `Provided mentorship and created a real-time web application using React to visualize statistics and live configuration for the telephony orchestration app.`,
    tags: new Set(["troubleshooting", "logging", "a/b testing", "collaboration", "mentorship", "react", "cicd", "c#", ".net", "aws", "kubernetes", "postgres", "architecture"]),
  },
  {
    grouping: "rm",
    order: 3,
    displayItem: true,
    textValue: `Led a company-wide migration of CI/CD pipelines from TFS to CircleCI, providing code/script feedback and support to the site reliability teams.`,
    tags: new Set(["documentation", "diagrams", "troubleshooting", "cicd", "bash", "c#", ".net", "mentorship", "circleci", "aws", "tfs", "leadership", "architecture", "collaboration"]),
  },
  {
    grouping: "rm",
    order: 4,
    displayItem: true,
    textValue: `Mentored software engineers across various levels, fostering their understanding of programming languages, functional
                programming principles, cloud technologies, software concepts, and design patterns.`,
    tags: new Set(["diagrams", "mentorship", "leadership", "functional programming", "c#", ".net", "design patterns", "collaboration"]),
  },
  {
    grouping: "rm",
    order: 5,
    displayItem: true,
    textValue: `Authored a comprehensive integration testing suite using MockServer, implemented across multiple applications, and
                delivered presentations to various teams on its setup and usage.`,
    tags: new Set(["documentation", "a/b testing", "kubernetes", "mock-server", "integration testing"]),
  },
  {
    grouping: "rm",
    order: 6,
    displayItem: true,
    textValue: `Championed agile methodologies to analyze and prioritize tasks defined by stakeholders.`,
    tags: new Set(["documentation", "jira", "agile", "collaboration"]),
  },
  {
    grouping: "rm",
    order: 7,
    displayItem: true,
    textValue: `Cultivated a culture of best practices by mentoring engineers and guiding them on effective software development principles.`,
    tags: new Set(["documentation", "diagrams", "mentorship", "leadership"]),
  },
  {
    grouping: "rm",
    order: 8,
    displayItem: true,
    textValue: `Developed hundreds of C# unit and integration tests utilizing industry-standard frameworks like XUnit.`,
    tags: new Set(["c#", "unit testing", ".net", "integration testing", "xUnit"]),
  },
  {
    grouping: "rm",
    order: 9,
    displayItem: true,
    textValue: `Automated infrastructure provisioning and deployment through Terraform for AWS services like EventBridge rules, Lambda
                functions, S3 buckets, and more.`,
    tags: new Set(["automation", "terraform", "aws", "cloud", "serverless functions", "cloud storage"]),
  },
  //-------------------------------------------------------------------------------------------------------------------------
  {
    grouping: "nxt",
    order: 1,
    displayItem: true,
    textValue: `Led the design, architecture, and development of a brand new on-demand moving application from the ground up, leveraging
a microservices architecture pattern for scalability and maintainability.`,
    tags: new Set(["architecture", "c#", ".net", "microservices", "system design", "leadership", "diagrams"]),
  },
  {
    grouping: "nxt",
    order: 2,
    displayItem: true,
    textValue: `Managed all user stories, collaborating with business stakeholders to translate business needs into actionable engineering
tasks.`,
    tags: new Set(["agile", "collaboration", "leadership"]),
  },
  {
    grouping: "nxt",
    order: 3,
    displayItem: true,
    textValue: `Fostered code quality through peer reviews and code management using GitHub.`,
    tags: new Set(["documentation", "code review", "c#", ".net", "mentorship", "collaboration"]),
  },
  {
    grouping: "nxt",
    order: 4,
    displayItem: true,
    textValue: `Mentored and guided other software engineers in technical design principles and architectural patterns.`,
    tags: new Set(["mentorship", "architecture", "collaboration", "leadership", "diagrams"]),
  },
  {
    grouping: "nxt",
    order: 5,
    displayItem: true,
    textValue: `Developed all application layers - front-end (React.js), back-end (.NET Core 5, EF Core), database (MySQL), security
(Auth0), and container management (Docker).`,
    tags: new Set(["documentation", "system design", "react", "c#", ".net", "mysql", "auth0", "docker", "containers"]),
  },
  {
    grouping: "nxt",
    order: 6,
    displayItem: true,
    textValue: `Architected and implemented a price manager schema and tool for real-time customer quotes.`,
    tags: new Set(["documentation", "architecture", "c#", ".net"]),
  },

  {
    grouping: "nxt",
    order: 7,
    displayItem: true,
    textValue: `Created a reusable notification library (email and SMS) for secure use across all applications.`,
    tags: new Set(["c#", ".net", "integrations", "security", "automation", "api"]),
  },
  {
    grouping: "nxt",
    order: 8,
    displayItem: true,
    textValue: `Integrated all applications with Auth0 for secure API requests, supporting both internal and external users.`,
    tags: new Set(["integration", "security", "react", "c#", ".net", "api"]),
  },
  //------------------------------------------------------------------------------------------------------------------------------------
  {
    grouping: "ri",
    order: 1,
    displayItem: true,
    textValue: `Designed, built, and deployed a full-stack web application for an internal construction management system. Utilized Agile methodology (JIRA, Azure DevOps
                Boards) for efficient project management.`,
    tags: new Set(["c#", ".net", "razor", "telerik", "sql", "jira", "azure", "cloud"]),
  },
  {
    grouping: "ri",
    order: 2,
    displayItem: true,
    textValue: `Championed consistent coding practices (peer review, commenting, merging strategies) through standardized workflows and
                environments.`,
    tags: new Set(["code review", "collaboration", "github"]),
  },
  {
    grouping: "ri",
    order: 3,
    displayItem: true,
    textValue: `Increased development efficiency by creating a reusable Razor Class Library (C#) for common UI components and code logic,
                accessible through the internal Azure Artifact feed.`,
    tags: new Set(["razor", "automation", "c#", ".net", "azure", "cloud"]),
  },
  {
    grouping: "ri",
    order: 4,
    displayItem: true,
    textValue: `Developed an SSRS report for complex construction budgets, leveraging stored procedures and multi-tabled SQL queries for
                data retrieval. Integrated the report seamlessly with the internal system.`,
    tags: new Set(["sql", "integration", "c#", ".net"]),
  },
  {
    grouping: "ri",
    order: 5,
    displayItem: true,
    textValue: `Actively mentored interns and employees on full-stack development and DevOps concepts, providing guidance and assigning
                relevant tasks to facilitate their learning journey.`,
    tags: new Set(["mentorship", "devops", "leadership"]),
  },
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  {
    grouping: "exp",
    order: 1,
    displayItem: true,
    textValue: `Collaborated in a development team to build, maintain, and enhance a web-based student travel application (ASP.NET Web
                Forms, Sitecore CMS, MSSQL, Azure DevOps).`,
    tags: new Set(["c#", ".net", "sitecore", "sql", "azure", "cloud", "full stack"]),
  },
  {
    grouping: "exp",
    order: 2,
    displayItem: true,
    textValue: `Designed and implemented a company-wide revenue grid displaying revenue streams and tour group stages, promoting
                healthy competition by rewarding top performers with company-sponsored trips.`,
    tags: new Set(["front end", "sql", "c#", ".net"]),
  },
  {
    grouping: "exp",
    order: 3,
    displayItem: true,
    textValue: `Dedicated weekly Service Desk hours to address critical bugs. This involved efficient bug capture, testing, and timely
                implementation of fixes.`,
    tags: new Set(["pagerduty", "troubleshooting", "collaboration", "code review"]),
  },
];
