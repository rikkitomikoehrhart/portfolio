import FooterBrand from '../layout/footer/FooterBrand';
import FooterLinks from '../layout/footer/FooterLinks';
import styles from '../../styles/layout.module.css';

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      {/* Decorative divider */}
      <div className={styles.dividerWrapper}>
        <div className={styles.dividerLine} />
        <div className={styles.dividerDiamond} />
        <div className={styles.dividerLine} />
      </div>

      <div className={styles.footerInner}>
        <FooterLinks />
        <FooterBrand />
        <p className={styles.copyright}>
          &copy; {year} Rikki Tomiko Ehrhart. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
