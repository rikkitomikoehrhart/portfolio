import styles from '../../styles/resume.module.css';

function ResumeEntry({
  title,
  org,
  location,
  date,
  bullets = [],
  awards = [],
}) {
  return (
    <div className={styles.entryWrapper}>
      <div className={styles.entryHeader}>
        <div className={styles.entryLeft}>
          <p className={styles.entryTitle}>{title}</p>
          <p className={styles.entryOrg}>{org}</p>
        </div>
        <div className={styles.entryRight}>
          <p className={styles.dateMeta}>{date}</p>
          <p className={styles.entryLocation}>{location}</p>
        </div>
      </div>

      {bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>{b}</li>
          ))}
        </ul>
      )}

      {awards.map((award, i) => (
        <p key={i} className={styles.award}>🏆 {award}</p>
      ))}
    </div>
  )
}

export default ResumeEntry;
