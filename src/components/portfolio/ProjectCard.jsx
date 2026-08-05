import { Link } from 'react-router-dom';
import Tag from '../ui/Tag';
import SectionLabel from '../ui/SectionLabel';
import styles from '../../styles/portfolio.module.css';


function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {project.thumbnail_url ? (
          <img
            src={project.thumbnail_url}
            alt={project.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <path d="M3 16l5-5 4 4 3-3 6 6" />
              <circle cx="8.5" cy="8.5" r="1.5" />
            </svg>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <SectionLabel>{project.type}</SectionLabel>
        <h2 className={styles.cardTitle}>{project.title}</h2>
        <p className={styles.cardDesc}>{project.short_description}</p>
        {project.tech_stack.length > 0 && (
          <div className={styles.tags}>
            {project.tech_stack.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        {project.tags.length > 0 && (
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
        ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProjectCard;
