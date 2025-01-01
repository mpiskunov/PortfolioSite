export interface TagProps {
  id: string;
  textValue: string;
  isSelected: boolean;
}

export interface TagDictionary {
  [key: string]: TagProps;
}

export const tagDictionary: TagDictionary = {
  architecture: {
    id: "architecture",
    textValue: "architecture",
    isSelected: false,
  },
  dotnet: {
    id: "dotnet",
    textValue: ".net",
    isSelected: false,
  },
  "ab-testing": {
    id: "ab-testing",
    textValue: "a/b testing",
    isSelected: false,
  },
  agile: {
    id: "agile",
    textValue: "agile",
    isSelected: false,
  },
  angular: {
    id: "angular",
    textValue: "angular",
    isSelected: false,
  },
  ansible: {
    id: "ansible",
    textValue: "ansible",
    isSelected: false,
  },
  api: {
    id: "api",
    textValue: "api",
    isSelected: false,
  },
  auth0: {
    id: "auth0",
    textValue: "auth0",
    isSelected: false,
  },
  authentication: {
    id: "authentication",
    textValue: "authentication",
    isSelected: false,
  },
  automation: {
    id: "automation",
    textValue: "automation",
    isSelected: false,
  },
  aws: {
    id: "aws",
    textValue: "aws",
    isSelected: false,
  },
  azure: {
    id: "azure",
    textValue: "azure",
    isSelected: false,
  },
  bash: {
    id: "bash",
    textValue: "bash",
    isSelected: false,
  },
  csharp: {
    id: "csharp",
    textValue: "c#",
    isSelected: false,
  },
  cicd: {
    id: "cicd",
    textValue: "cicd",
    isSelected: false,
  },
  circleci: {
    id: "circleci",
    textValue: "circleci",
    isSelected: false,
  },
  cloud: {
    id: "cloud",
    textValue: "cloud",
    isSelected: false,
  },
  "cloud-storage": {
    id: "cloud-storage",
    textValue: "cloud storage",
    isSelected: false,
  },
  "code-review": {
    id: "code-review",
    textValue: "code review",
    isSelected: false,
  },
  containers: {
    id: "containers",
    textValue: "containers",
    isSelected: false,
  },
  diagrams: {
    id: "diagrams",
    textValue: "diagrams",
    isSelected: false,
  },
  "design-patterns": {
    id: "design-patterns",
    textValue: "design patterns",
    isSelected: false,
  },
  devops: {
    id: "devops",
    textValue: "devops",
    isSelected: false,
  },
  docker: {
    id: "docker",
    textValue: "docker",
    isSelected: false,
  },
  documentation: {
    id: "documentation",
    textValue: "documentation",
    isSelected: false,
  },
  "front-end": {
    id: "front-end",
    textValue: "front end",
    isSelected: false,
  },
  finops: {
    id: "finops",
    textValue: "finops",
    isSelected: false,
  },
  "functional-programming": {
    id: "functional-programming",
    textValue: "functional programming",
    isSelected: false,
  },
  "full-stack": {
    id: "full-stack",
    textValue: "full stack",
    isSelected: false,
  },
  gcp: {
    id: "gcp",
    textValue: "gcp",
    isSelected: false,
  },
  github: {
    id: "github",
    textValue: "github",
    isSelected: false,
  },
  gitlab: {
    id: "gitlab",
    textValue: "gitlab",
    isSelected: false,
  },
  golang: {
    id: "golang",
    textValue: "golang",
    isSelected: false,
  },
  grafana: {
    id: "grafana",
    textValue: "grafana",
    isSelected: false,
  },
  infrastructure: {
    id: "infrastructure",
    textValue: "infrastructure",
    isSelected: false,
  },
  integration: {
    id: "integration",
    textValue: "integration",
    isSelected: false,
  },
  "integration-testing": {
    id: "integration-testing",
    textValue: "integration testing",
    isSelected: false,
  },
  jira: {
    id: "jira",
    textValue: "jira",
    isSelected: false,
  },
  //   keycloak: {
  //     id: "keycloak",
  //     textValue: "keycloak",
  //     isSelected: false,
  //   },
  kafka: {
    id: "kafka",
    textValue: "kafka",
    isSelected: false,
  },
  kubernetes: {
    id: "kubernetes",
    textValue: "kubernetes",
    isSelected: false,
  },
  leadership: {
    id: "leadership",
    textValue: "leadership",
    isSelected: false,
  },
  linux: {
    id: "linux",
    textValue: "linux",
    isSelected: false,
  },
  logging: {
    id: "logging",
    textValue: "logging",
    isSelected: false,
  },
  "machine-learning": {
    id: "machine-learning",
    textValue: "machine learning",
    isSelected: false,
  },
  mentorship: {
    id: "mentorship",
    textValue: "mentorship",
    isSelected: false,
  },
  "mock-server": {
    id: "mock-server",
    textValue: "mock-server",
    isSelected: false,
  },
  pagerduty: {
    id: "pagerduty",
    textValue: "pagerduty",
    isSelected: false,
  },
  pipelines: {
    id: "pipelines",
    textValue: "pipelines",
    isSelected: false,
  },
  postgres: {
    id: "postgres",
    textValue: "postgres",
    isSelected: false,
  },
  python: {
    id: "python",
    textValue: "python",
    isSelected: false,
  },
  razor: {
    id: "razor",
    textValue: "razor",
    isSelected: false,
  },
  react: {
    id: "react",
    textValue: "react",
    isSelected: false,
  },
  security: {
    id: "security",
    textValue: "security",
    isSelected: false,
  },
  "serverless-functions": {
    id: "serverless-functions",
    textValue: "serverless functions",
    isSelected: false,
  },
  sitecore: {
    id: "sitecore",
    textValue: "sitecore",
    isSelected: false,
  },
  sql: {
    id: "sql",
    textValue: "sql",
    isSelected: false,
  },
  sqs: {
    id: "sqs",
    textValue: "sqs",
    isSelected: false,
  },
  storage: {
    id: "storage",
    textValue: "storage",
    isSelected: false,
  },
  "system-design": {
    id: "system-design",
    textValue: "system design",
    isSelected: false,
  },
  telephony: {
    id: "telephony",
    textValue: "telephony",
    isSelected: false,
  },
  telerik: {
    id: "telerik",
    textValue: "telerik",
    isSelected: false,
  },
  terraform: {
    id: "terraform",
    textValue: "terraform",
    isSelected: false,
  },
  tfs: {
    id: "tfs",
    textValue: "tfs",
    isSelected: false,
  },
  troubleshooting: {
    id: "troubleshooting",
    textValue: "troubleshooting",
    isSelected: false,
  },
  typescript: {
    id: "typescript",
    textValue: "typescript",
    isSelected: false,
  },
  "unit-testing": {
    id: "unit-testing",
    textValue: "unit testing",
    isSelected: false,
  },
  vault: {
    id: "vault",
    textValue: "vault",
    isSelected: false,
  },
  "virtual-machines": {
    id: "virtual-machines",
    textValue: "virtual machines",
    isSelected: false,
  },
  xUnit: {
    id: "xUnit",
    textValue: "xUnit",
    isSelected: false,
  },
};
