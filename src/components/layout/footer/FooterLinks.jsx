import FooterLink from './FooterLink';

const siteLinks = [
  { to: '/',          label: 'Home'    },
  { to: '/portfolio', label: 'Work'    },
  { to: '/resume',    label: 'Résumé'  },
  { to: '/contact',   label: 'Contact' },
]

const socialLinks = [
  { to: 'https://github.com/rikkitomikoehrhart',        label: 'GitHub',   external: true },
  { to: 'https://linkedin.com/in/rikkitomikoehrhart',   label: 'LinkedIn', external: true },
]

function FooterLinks() {
  return (
    <div style={styles.wrapper}>
      {/* Site nav links */}
      <ul style={styles.list}>
        {siteLinks.map(({ to, label }) => (
          <li key={to}>
            <FooterLink to={to} label={label} />
          </li>
        ))}
      </ul>

      {/* Social links */}
      <ul style={styles.list}>
        {socialLinks.map(({ to, label, external }) => (
          <li key={to}>
            <FooterLink to={to} label={label} external={external} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  list: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}

export default FooterLinks;