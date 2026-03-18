import { Link } from 'react-router-dom'

function FooterBrand() {
  return (
    <div style={styles.wrapper}>
      <Link to="/" style={styles.logo}>
        rte.
      </Link>
      <p style={styles.tagline}>
        Built with React &amp; MySQL · Hosted on Dreamhost
      </p>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    fontStyle: 'italic',
    fontWeight: 300,
    color: 'var(--color-accent-muted)',
    textDecoration: 'none',
    letterSpacing: '0.05em',
  },
  tagline: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.12em',
    color: 'var(--color-accent-muted)',
    textAlign: 'center',
  },
}

export default FooterBrand;