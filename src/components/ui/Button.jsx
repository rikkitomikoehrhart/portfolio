import { Link } from 'react-router-dom'
 
function Button({ children, to, href, variant = 'primary', onClick }) {
  const style = variant === 'primary' ? styles.primary : styles.ghost
 
  // External link
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
      </a>
    )
  }
 
  // Internal route
  if (to) {
    return (
      <Link to={to} style={style}>
        {children}
      </Link>
    )
  }
 
  // Plain button
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  )
}
 
const base = {
  fontFamily: 'var(--font-sans)',
  fontSize: '12px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontWeight: 500,
  padding: '13px 28px',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  border: 'none',
  transition: 'opacity 0.2s ease',
}
 
const styles = {
  primary: {
    ...base,
    background: 'var(--color-accent)',
    color: '#fff',
  },
  ghost: {
    ...base,
    background: 'none',
    color: 'var(--color-text)',
    border: '0.5px solid var(--color-accent-muted)',
  },
}

export default Button;