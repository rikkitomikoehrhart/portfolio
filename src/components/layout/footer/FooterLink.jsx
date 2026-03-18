import { Link } from 'react-router-dom'

function FooterLink({ to, label, external = false }) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        {label}
      </a>
    )
  }

  return (
    <Link to={to} style={styles.link}>
      {label}
    </Link>
  )
}

const styles = {
  link: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
}

export default FooterLink;