function SectionLabel({ children }) {
  return (
    <p style={styles.label}>{children}</p>
  )
}
 
const styles = {
  label: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    fontWeight: 500,
    marginBottom: '12px',
  },
}
 
export default SectionLabel;