import ResumePaper from '../components/resume/ResumePaper';
 
function Resume() {
  return (
    <div style={styles.scene}>
      {/* Dotted texture overlay */}
      <div style={styles.texture} />
 
      {/* Top label row */}
      <div style={styles.labelRow}>
        <span style={styles.pageLabel}>Résumé</span>
        <a
          href="/resume.pdf"
          download
          style={styles.downloadBtn}
        >
          Download PDF
        </a>
      </div>
 
      {/* The Paper */}
      <ResumePaper />
 
      {/* Shadow underneath paper */}
      <div style={styles.paperShadow} />
    </div>
  )
}
 
const styles = {
  scene: {
    minHeight: '100vh',
    background: 'var(--color-bg-soft)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 24px 80px',
    position: 'relative',
  },
  texture: {
    position: 'fixed',
    inset: 0,
    backgroundImage: 'radial-gradient(#f0d9dc 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    opacity: 0.4,
    pointerEvents: 'none',
    zIndex: 0,
  },
  labelRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '88%',
    maxWidth: '960px',
    marginBottom: '16px',
    position: 'relative',
    zIndex: 1,
  },
  pageLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    fontWeight: 500,
  },
  downloadBtn: {
    background: 'var(--color-accent)',
    color: '#fff',
    padding: '9px 20px',
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 500,
    textDecoration: 'none',
    display: 'inline-block',
  },
  paperShadow: {
    width: '84%',
    maxWidth: '920px',
    height: '16px',
    background: 'rgba(196,96,122,0.07)',
    filter: 'blur(8px)',
    marginTop: '2px',
    position: 'relative',
    zIndex: 0,
  },
}

export default Resume;