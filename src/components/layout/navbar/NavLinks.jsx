import NavItem from './NavItem';
import { navLinks } from '../../../data/navigation';
import styles from '../../../styles/layout.module.css';

function NavLinks({ mobile = false, onNavigate }) {
  return (
    <ul className={mobile ? styles.mobileList : styles.desktopList}>
      {navLinks.map(({ to, label }) => (
        <NavItem
          key={to}
          to={to}
          label={label}
          mobile={mobile}
          onClick={onNavigate}
        />
      ))}
    </ul>
  )
}

export default NavLinks;
