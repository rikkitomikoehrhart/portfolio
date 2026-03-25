function ResumeSection({ title, children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.heading}>
        <span style={styles.label}>{title}</span>
        <div style={styles.rule} />
      </div>
      <div>{children}</div>
    </div>
  )
}
 
const styles = {
  wrapper: {
    marginBottom: '28px',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '14px',
  },
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '9px',
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  rule: {
    flex: 1,
    height: '0.5px',
    background: 'var(--color-border)',
  },
}

export default ResumeSection;