function FooterDivider() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.line} />
      <div style={styles.diamond} />
      <div style={styles.line} />
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
  },
  line: {
    flex: 1,
    height: '0.5px',
    background: 'var(--color-border)',
  },
  diamond: {
    width: '5px',
    height: '5px',
    background: 'var(--color-accent)',
    transform: 'rotate(45deg)',
    flexShrink: 0,
  },
}

export default FooterDivider;