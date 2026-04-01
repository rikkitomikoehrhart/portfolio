import SectionLabel from '../components/ui/SectionLabel';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';
import styles from '../styles/portfolio.module.css';

function Portfolio() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <SectionLabel>Work</SectionLabel>
        <h1 className={styles.pageTitle}>
          Selected <em className={styles.pageTitleEm}>Projects</em>
        </h1>
        <p className={styles.pageLead}>
          A collection of small projects that I've built for myself, friends, or clients.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
