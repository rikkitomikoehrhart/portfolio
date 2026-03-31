import styles from '../../styles/resume.module.css';

function ResumeSection({ title, children }) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeading}>
        <span className={styles.sectionLabel}>{title}</span>
        <div className={styles.sectionRule} />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default ResumeSection;
