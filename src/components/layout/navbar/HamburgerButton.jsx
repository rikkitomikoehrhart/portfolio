import HamburgerBar from "./HamburgerBar";

function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      style={styles.button}
    >
      <HamburgerBar
        style={{
          transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        }}
      />
      <HamburgerBar
        style={{
          opacity: isOpen ? 0 : 1,
        }}
      />
      <HamburgerBar
        style={{
          transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
        }}
      />
    </button>
  )
}

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
}

export default HamburgerButton;