const PHOTO_PATH = '/images/rikki.jpg'
 
function HeroinePhoto() {
  return (
    <div style={styles.panel}>
 
      {/* Decorative background circles */}
      <div style={styles.circleTop} />
      <div style={styles.circleBottom} />
 
      {/* Photo frame */}
      <div style={styles.frameWrapper}>
        <div style={styles.frame}>
          <img
            src={PHOTO_PATH}
            alt="Rikki Tomiko Ehrhart"
            style={styles.photo}
          />
        </div>
 
        {/* Floating badge — top right */}
        <div style={{ ...styles.badge, top: '-16px', right: '-16px' }}>
          ✨ Apprentice Software Engineer
        </div>
 
        {/* Floating badge — bottom left */}
        <div style={{
          ...styles.badge,
          bottom: '-16px',
          left: '-16px',
          background: 'var(--color-accent)',
          color: '#fff',
          border: 'none',
        }}>
          @ Visa · CRM Team
        </div>
      </div>
 
      {/* Scroll hint */}
      <div style={styles.scroll}>
        <div style={styles.scrollLine} />
        <span style={styles.scrollText}>Scroll</span>
      </div>
    </div>
  )
}
 
const styles = {
  panel: {
    background: 'var(--color-bg-soft)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '500px',
  },
  circleTop: {
    position: 'absolute',
    width: '340px',
    height: '340px',
    borderRadius: '50%',
    background: '#f5d0d8',
    top: '-60px',
    right: '-60px',
    opacity: 0.5,
    pointerEvents: 'none',
  },
  circleBottom: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: '#f0bbc6',
    bottom: '20px',
    left: '10px',
    opacity: 0.3,
    pointerEvents: 'none',
  },
  frameWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '320px',
    zIndex: 1,
  },
  frame: {
    width: '100%',
    aspectRatio: '4 / 5',
    overflow: 'hidden',
    border: '0.5px solid var(--color-accent-muted)',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    display: 'block',
  },
  badge: {
    position: 'absolute',
    background: 'var(--color-bg)',
    border: '0.5px solid var(--color-border)',
    padding: '10px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    letterSpacing: '0.06em',
    color: 'var(--color-text-soft)',
    whiteSpace: 'nowrap',
    zIndex: 2,
  },
  scroll: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    zIndex: 1,
  },
  scrollLine: {
    width: '0.5px',
    height: '32px',
    background: 'var(--color-accent-muted)',
  },
  scrollText: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--color-accent-muted)',
  },
}

export default HeroinePhoto;