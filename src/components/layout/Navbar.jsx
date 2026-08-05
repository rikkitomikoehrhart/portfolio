import { useState, useEffect } from 'react';
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import HamburgerButton from './navbar/HamburgerButton';
import styles from '../../styles/layout.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={styles.header}
        style={{
          borderBottom: scrolled
            ? '0.5px solid var(--color-border)'
            : '0.5px solid transparent',
          boxShadow: scrolled
            ? '0 2px 24px rgba(196,96,122,0.06)'
            : 'none',
        }}
      >
        <Logo />

        {/* Desktop — hidden on mobile via CSS */}
        <nav className={styles.navbarDesktop} aria-label="Main navigation">
          <NavLinks />
        </nav>

        {/* Mobile — hidden on desktop via CSS */}
        <div className={styles.navbarHamburger}>
          <HamburgerButton
            isOpen={menuOpen}
            onToggle={() => setMenuOpen(prev => !prev)}
          />
        </div>
      </header>

      {/* Mobile dropdown */}
      <div
        className={styles.navbarMobileMenu}
        style={{
          maxHeight: menuOpen ? '320px' : '0',
          opacity: menuOpen ? 1 : 0,
          borderBottom: menuOpen ? '0.5px solid var(--color-border)' : 'none',
        }}
      >
        <NavLinks mobile onNavigate={() => setMenuOpen(false)} />
      </div>
    </>
  )
}

export default Navbar;
