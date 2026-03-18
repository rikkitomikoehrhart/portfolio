// src/components/atoms/Logo.jsx
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" style={styles.logo}>
      Rikki <em style={styles.em}>Tomiko</em> Ehrhart
    </Link>
  )
}

const styles = {
  logo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '20px',
    fontWeight: 300,
    letterSpacing: '0.08em',
    color: 'var(--color-text)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  em: {
    fontStyle: 'italic',
    color: 'var(--color-accent)',
  },
}

export default Logo;