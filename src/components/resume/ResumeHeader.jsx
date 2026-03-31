import styles from '../../styles/resume.module.css';

function ResumeHeader() {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <h1 className={styles.headerName}>
          Rikki <em className={styles.headerNameEm}>Tomiko</em> Ehrhart
        </h1>
        <p className={styles.headerTagline}>
          Software Engineering Apprentice · Creative Developer · Austin, TX
        </p>
      </div>
      <div className={styles.headerRight}>
        <a href="mailto:rikkitomikoehrhart@g.austincc.edu" className={styles.contactLink}>
          rikkitomikoehrhart@g.austincc.edu
        </a>
        <a href="https://rikkitomikoehrhart.com" className={styles.contactLink}>
          rikkitomikoehrhart.com
        </a>
        <a href="https://linkedin.com/in/rikkitomikoehrhart" className={styles.contactLink}>
          linkedin.com/in/rikkitomikoehrhart
        </a>
        <a href="https://github.com/rikkitomikoehrhart" className={styles.contactLink}>
          github.com/rikkitomikoehrhart
        </a>
      </div>
    </div>
  )
}

export default ResumeHeader;
