import { useState, useEffect } from 'react';
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import HamburgerButton from './navbar/HamburgerButton'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
 
  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header style={{
        ...styles.header,
        borderBottom: scrolled
          ? '0.5px solid var(--color-border)'
          : '0.5px solid transparent',
        boxShadow: scrolled
          ? '0 2px 24px rgba(196,96,122,0.06)'
          : 'none',
      }}>
        <Logo />

        {/* Desktop — hidden on mobile via CSS */}
        <nav className="navbar-desktop" aria-label="Main navigation">
          <NavLinks />
        </nav>

        {/* Mobile — hidden on desktop via CSS */}
        <div className="navbar-hamburger" style={{ display: 'none' }}>
          <HamburgerButton
            isOpen={menuOpen}
            onToggle={() => setMenuOpen(prev => !prev)}
          />
        </div>
      </header>

      {/* Mobile dropdown */}
      <div
        className="navbar-mobile-menu"
        style={{
          ...styles.mobileMenu,
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

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 48px',
    background: 'var(--color-bg)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  mobileMenu: {
    position: 'sticky',
    top: '61px',
    zIndex: 99,
    background: 'var(--color-bg)',
    overflow: 'hidden',
    transition: 'max-height 0.35s ease, opacity 0.35s ease',
  },
}

// Breakpoint styles injected once
const styleTag = document.createElement('style')
styleTag.textContent = `
  @media (max-width: 640px) {
    .navbar-desktop { display: none !important; }
    .navbar-hamburger { display: flex !important; }
  }
  @media (min-width: 641px) {
    .navbar-mobile-menu { display: none !important; }
  }
`
if (!document.head.querySelector('[data-navbar-styles]')) {
  styleTag.setAttribute('data-navbar-styles', '')
  document.head.appendChild(styleTag)
}

export default Navbar;