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
      "A Git-backed documentation publishing engine with a React and TypeScript interface, Spring Boot APIs, GitHub webhook processing, Redis caching, authentication, and automated deployment.",
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
      "A digital wallet and payment platform built around idempotent payment operations, transaction integrity, immutable double-entry ledger postings, reconciliation, and automated tests.",
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
      "A containerized image-processing API using FastAPI and Pillow, with S3-compatible object storage, health checks, explicit failure handling, and automated tests.",
    technologies: [
      "Python",
      "FastAPI",
      "Pillow",
      "Docker Compose",
      "MinIO / S3",
      "Pytest",
    ],
    featured: true,
  },
  {
    number: "04",
    category: "FULL-STACK DEVELOPMENT",
    title: "NaadaGangaa",
    description:
      "A music-streaming application exploring full-stack product development with Spring Boot services and a React-based interface.",
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
    title: "Build",
    description: "Applications, APIs, and reliable data systems.",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "React",
      "TypeScript",
      "Python",
    ],
  },
  {
    title: "Automate",
    description: "Development workflows, containers, and delivery.",
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Git",
      "Maven",
      "GitOps",
    ],
  },
  {
    title: "Integrate",
    description: "Data platforms, messaging, and practical AI exploration.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Apache Kafka",
      "Machine Learning",
      "AI-assisted development",
    ],
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
