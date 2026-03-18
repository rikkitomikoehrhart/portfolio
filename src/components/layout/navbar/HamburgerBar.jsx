// src/components/atoms/HamburgerBar.jsx

function HamburgerBar({ style = {} }) {
  return (
    <span style={{ ...styles.bar, ...style }} />
  )
}

const styles = {
  bar: {
    display: 'block',
    width: '22px',
    height: '1px',
    background: 'var(--color-text)',
    transition: 'transform 0.25s ease, opacity 0.25s ease',
  },
}

export default HamburgerBar;