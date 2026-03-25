function Tag({ children }) {
  return (
    <span style={styles.tag}>{children}</span>
  )
}
 
const styles = {
  tag: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    border: '0.5px solid var(--color-border)',
    padding: '4px 12px',
    color: 'var(--color-text-muted)',
    background: 'var(--color-bg)',
    whiteSpace: 'nowrap',
  },
}

export default Tag;