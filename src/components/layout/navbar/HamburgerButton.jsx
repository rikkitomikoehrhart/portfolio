import styles from '../../../styles/layout.module.css';

function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className={styles.hamburgerButton}
    >
      <span
        className={styles.hamburgerBar}
        style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}
      />
      <span
        className={styles.hamburgerBar}
        style={{ opacity: isOpen ? 0 : 1 }}
      />
      <span
        className={styles.hamburgerBar}
        style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}
      />
    </button>
  )
}

export default HamburgerButton;
