import { Link } from 'react-router-dom';
import styles from '../../../styles/layout.module.css';

function FooterBrand() {
  return (
    <div className={styles.brandWrapper}>
      <Link to="/" className={styles.brandLogo}>
        rte.
      </Link>
      <p className={styles.brandTagline}>
        Built with React &amp; MySQL · Hosted on Dreamhost
      </p>
    </div>
  )
}

export default FooterBrand;
