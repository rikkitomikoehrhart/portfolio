import ResumePaper from '../components/resume/ResumePaper';
import styles from '../styles/pages.module.css';

function Resume() {
  return (
    <div className={styles.scene}>
      <div className={styles.texture} />

      <div className={styles.labelRow}>
        <span className={styles.pageLabel}>Résumé</span>
        <a href="/resume.pdf" download className={styles.downloadBtn}>
          Download PDF
        </a>
      </div>

      <ResumePaper />

      <div className={styles.paperShadow} />
    </div>
  )
}

export default Resume;
