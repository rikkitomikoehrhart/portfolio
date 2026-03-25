function ResumeHeader() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.left}>
        <h1 style={styles.name}>
          Rikki <em style={styles.nameEm}>Tomiko</em> Ehrhart
        </h1>
        <p style={styles.tagline}>
          Software Engineering Apprentice · Creative Developer · Austin, TX
        </p>
      </div>
      <div style={styles.right}>
        <a href="mailto:rikkitomikoehrhart@g.austincc.edu" style={styles.contactLink}>
          rikkitomikoehrhart@g.austincc.edu
        </a>
        <a href="https://rikkitomikoehrhart.com" style={styles.contactLink}>
          rikkitomikoehrhart.com
        </a>
        <a href="https://linkedin.com/in/rikkitomikoehrhart" style={styles.contactLink}>
          linkedin.com/in/rikkitomikoehrhart
        </a>
        <a href="https://github.com/rikkitomikoehrhart" style={styles.contactLink}>
          github.com/rikkitomikoehrhart
        </a>
      </div>
    </div>
  )
}
 
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '24px',
    marginBottom: '24px',
    borderBottom: '1px solid var(--color-border)',
    gap: '24px',
    flexWrap: 'wrap',
  },
  left: {},
  name: {
    fontFamily: 'var(--font-serif)',
    fontSize: '42px',
    fontWeight: 300,
    color: 'var(--color-text)',
    lineHeight: 1.1,
    marginBottom: '6px',
  },
  nameEm: {
    fontStyle: 'italic',
    color: 'var(--color-accent)',
  },
  tagline: {
    fontFamily: 'var(--font-serif)',
    fontSize: '14px',
    fontStyle: 'italic',
    color: 'var(--color-text-muted)',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px',
  },
  contactLink: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    color: 'var(--color-text-muted)',
    textDecoration: 'none',
    letterSpacing: '0.02em',
    transition: 'color 0.2s ease',
  },
}

export default ResumeHeader;