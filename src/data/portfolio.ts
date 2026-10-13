export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  liveHref?: string;
  featured: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

const github = "https://github.com/PranayIngole7";

export const projects: Project[] = [
  {
    number: "01",
    category: "DOCUMENTATION PLATFORM",
    title: "Git-Prasaaran",
    description:
      "A Git-backed Markdown documentation platform with a React and TypeScript frontend, Spring Boot APIs, GitHub webhook processing, Redis caching, authentication, and automated deployment.",
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "GitHub Actions",
    ],
    href: `${github}/git-prasaaran`,
    liveHref: "https://git-prasaaran.netlify.app/",
    featured: true,
  },
  {
    number: "02",
    category: "BACKEND ENGINEERING",
    title: "PayFlow",
    description:
      "A digital wallet and payment platform focused on idempotent payment operations, transaction integrity, immutable double-entry ledger postings, reconciliation, and automated testing.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "JUnit",
    ],
    href: `${github}/payflow`,
    featured: true,
  },
  {
    number: "03",
    category: "CLOUD-NATIVE ENGINEERING",
    title: "Cloud-Native Thumbnail Pipeline",
    description:
      "A containerized image-processing API built with FastAPI and Pillow, featuring S3-compatible object storage, health checks, explicit failure handling, and automated tests.",
    technologies: [
      "Python",
      "FastAPI",
      "Pillow",
      "Docker Compose",
      "MinIO / S3",
      "Pytest",
    ],
    href: `${github}/cloud-native-thumbnail-pipeline`,
    featured: true,
  },
  {
    number: "04",
    category: "FULL-STACK DEVELOPMENT",
    title: "NaadaGangaa",
    description:
      "A music-streaming application exploring full-stack development with Spring Boot services and a React-based user interface.",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "React",
    ],
    href: `${github}/NaadaGangaa`,
    featured: false,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Application Development",
    description: "Languages, frameworks, APIs, and testing tools.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices Concepts",
      "Python",
      "FastAPI",
      "JUnit 5",
      "Postman",
    ],
  },
  {
    title: "Frontend Development",
    description: "Technologies for building modern web interfaces.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Databases & Messaging",
    description: "Databases, caching, and asynchronous messaging.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Apache Kafka",
    ],
  },
  {
    title: "DevOps & Cloud Engineering",
    description: "Infrastructure, delivery automation, and observability.",
    skills: [
      "Linux",
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "CI/CD",
      "Helm",
      "Argo CD",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "AI & Emerging Technologies",
    description: "Ongoing learning in AI-powered applications and integration.",
    skills: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Large Language Models (LLMs)",
      "Model Context Protocol (MCP)",
      "Spring AI",
      "Retrieval-Augmented Generation (RAG)",
    ],
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
