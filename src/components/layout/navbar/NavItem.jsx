import { NavLink } from 'react-router-dom';
import styles from '../../../styles/layout.module.css';

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <li className={styles.navItem}>
      <NavLink
        to={to}
        end={to === '/'}
        onClick={onClick}
        className={({ isActive }) =>
          mobile
            ? `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
            : `${styles.desktopLink} ${isActive ? styles.desktopLinkActive : ''}`
        }
      >
        {label}
      </NavLink>
    </li>
  )
}

export default NavItem;
