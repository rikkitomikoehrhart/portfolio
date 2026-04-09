import { useEffect, useState } from 'react';
import SectionLabel from '../components/ui/SectionLabel';
import ProjectCard from '../components/portfolio/ProjectCard';
import styles from '../styles/portfolio.module.css';


function Portfolio() {
  const [ projects, setProjects ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetch('https://www.rikkitomikoehrhart.com/api/projects.php')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load projects: ', err);
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

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
