import { Link } from 'react-router-dom';
import styles from '../../../styles/layout.module.css';

function FooterLink({ to, label, external = false }) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        {label}
      </a>
    )
  }

  return (
    <Link to={to} className={styles.footerLink}>
      {label}
    </Link>
  )
}

export default FooterLink;
