import NavItem from "./NavItem";

const links = [
  { to: '/',          label: 'Home'    },
  { to: '/portfolio', label: 'Work'    },
  { to: '/resume',    label: 'Résumé'  },
  { to: '/contact',   label: 'Contact' },
]

function NavLinks({ mobile = false, onNavigate }) {

  return (
    <ul style={mobile ? styles.mobileList : styles.desktopList}>
      {links.map(({ to, label }) => (
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

const styles = {
  desktopList: {
    display: 'flex',
    gap: '36px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  mobileList: {
    listStyle: 'none',
    margin: 0,
    padding: '12px 0 20px',
  },
}

export default NavLinks;