import { Link } from 'react-router-dom';
import styles from '../../../styles/layout.module.css';

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      Rikki <em className={styles.logoEm}>Tomiko</em> Ehrhart
    </Link>
  )
}

export default Logo;
