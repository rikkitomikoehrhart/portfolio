import { NavLink } from 'react-router-dom'

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <li style={{ listStyle: 'none' }}>
      <NavLink
        to={to}
        end={to === '/'}
        onClick={onClick}
        style={({ isActive }) =>
          mobile
            ? {
                ...styles.mobileLink,
                color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderLeft: isActive
                  ? '2px solid var(--color-accent)'
                  : '2px solid transparent',
              }
            : {
                ...styles.desktopLink,
                color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderBottom: isActive
                  ? '0.5px solid var(--color-accent)'
                  : '0.5px solid transparent',
              }
        }
      >
        {label}
      </NavLink>
    </li>
  )
}

const styles = {
  desktopLink: {
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 400,
    paddingBottom: '2px',
    transition: 'color 0.2s ease',
  },
  mobileLink: {
    display: 'block',
    padding: '12px 48px',
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 400,
    transition: 'color 0.2s ease, border-left 0.2s ease',
  },
}

export default NavItem;