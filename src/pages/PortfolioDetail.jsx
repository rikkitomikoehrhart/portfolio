import { useParams, Link } from 'react-router-dom';
import SectionLabel from '../components/ui/SectionLabel';
import Tag from '../components/ui/Tag';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import styles from '../styles/portfolio.module.css';

function PortfolioDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/portfolio" className={styles.backLink}>← Back to Work</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <Link to="/portfolio" className={styles.backLink}>← Back to Work</Link>

      <SectionLabel>{project.category}</SectionLabel>
      <h1 className={styles.detailTitle}>{project.title}</h1>

      <div className={styles.detailTags}>
        {project.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <p className={styles.detailDesc}>{project.description}</p>

      <div className={styles.detailLinks}>
        {project.github && (
          <Button href={project.github} variant="primary">View on GitHub</Button>
        )}
        {project.live && (
          <Button href={project.live} variant="ghost">Live Site</Button>
        )}
      </div>
    </div>
  );
}

export default PortfolioDetail;
