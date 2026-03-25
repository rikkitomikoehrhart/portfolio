function ResumeEntry({
  title,
  org,
  location,
  date,
  bullets = [],
  awards = [],
}) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div style={styles.left}>
          <p style={styles.title}>{title}</p>
          <p style={styles.org}>{org}</p>
        </div>
        <div style={styles.right}>
          <p style={styles.date}>{date}</p>
          <p style={styles.location}>{location}</p>
        </div>
      </div>
 
      {bullets.length > 0 && (
        <ul style={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} style={styles.bullet}>{b}</li>
          ))}
        </ul>
      )}
 
      {awards.map((award, i) => (
        <p key={i} style={styles.award}>🏆 {award}</p>
      ))}
    </div>
  )
}
 
const styles = {
  wrapper: {
    paddingBottom: '18px',
    marginBottom: '18px',
    borderBottom: '0.5px solid var(--color-border)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px',
    gap: '12px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '2px',
    flexShrink: 0,
  },
  title: {
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--color-text)',
  },
  org: {
    fontFamily: 'var(--font-serif)',
    fontSize: '13px',
    fontStyle: 'italic',
    color: 'var(--color-accent)',
  },
  date: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    color: 'var(--color-accent-muted)',
    letterSpacing: '0.06em',
    fontStyle: 'italic',
  },
  location: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.04em',
  },
  bullets: {
    paddingLeft: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '8px',
  },
  bullet: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    color: 'var(--color-text-soft)',
    lineHeight: 1.75,
    listStyleType: 'disc',
  },
  award: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    color: 'var(--color-text-soft)',
    fontStyle: 'italic',
    marginTop: '6px',
    lineHeight: 1.6,
  },
}

export default ResumeEntry;