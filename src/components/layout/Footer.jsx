import FooterDivider from '../layout/footer/FooterDivider'
import FooterBrand from '../layout/footer/FooterBrand'
import FooterLinks from '../layout/footer/FooterLinks';

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <FooterDivider />

      <div style={styles.inner}>
        <FooterLinks />
        <FooterBrand />
        <p style={styles.copyright}>
          &copy; {year} Rikki Tomiko Ehrhart. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'var(--color-bg)',
    padding: '40px 48px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '28px',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  },
  copyright: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.1em',
    color: 'var(--color-accent-muted)',
    textAlign: 'center',
  },
}