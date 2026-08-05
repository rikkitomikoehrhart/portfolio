import styles from '../../styles/ui.module.css';

function SectionLabel({ children }) {
  return (
    <p className={styles.sectionLabel}>{children}</p>
  )
}

export default SectionLabel;
