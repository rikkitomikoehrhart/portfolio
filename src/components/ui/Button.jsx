import { Link } from 'react-router-dom';
import styles from '../../styles/ui.module.css';

function Button({ children, to, href, variant = 'primary', onClick }) {
  const className = variant === 'primary' ? styles.btnPrimary : styles.btnGhost

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button;
