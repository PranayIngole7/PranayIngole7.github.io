import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card${project.featured ? " project-featured" : ""}`}
      initial={{ opacity: 1, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="project-topline">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>

        {project.href && (
          <a
            className="project-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository on GitHub`}
          >
            <Code2 size={18} />
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {project.href && (
          <a
            className="text-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source <ArrowUpRight size={16} />
          </a>
        )}

        {project.liveHref && (
          <a
            className="text-link"
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo <ExternalLink size={15} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
