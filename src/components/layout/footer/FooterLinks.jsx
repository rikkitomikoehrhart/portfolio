import FooterLink from './FooterLink';
import { navLinks, socialLinks } from '../../../data/navigation';
import styles from '../../../styles/layout.module.css';

function FooterLinks() {
  return (
    <div className={styles.footerLinksWrapper}>
      <ul className={styles.footerList}>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <FooterLink to={to} label={label} />
          </li>
        ))}
      </ul>

      <ul className={styles.footerList}>
        {socialLinks.map(({ to, label, external }) => (
          <li key={to}>
            <FooterLink to={to} label={label} external={external} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks;
