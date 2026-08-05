import styles from '../../styles/home.module.css';

const PHOTO_PATH = '/images/rikki.jpg'

function HeroinePhoto() {
  return (
    <div className={styles.photoPanel}>

      {/* Decorative background circles */}
      <div className={styles.circleTop} />
      <div className={styles.circleBottom} />

      {/* Photo frame */}
      <div className={styles.frameWrapper}>
        <div className={styles.frame}>
          <img
            src={PHOTO_PATH}
            alt="Rikki Tomiko Ehrhart"
            className={styles.photo}
          />
        </div>

        {/* Floating badge — top right */}
        <div className={`${styles.badge} ${styles.badgeTop}`}>
          ✨ Apprentice Software Engineer
        </div>

        {/* Floating badge — bottom left */}
        <div className={`${styles.badge} ${styles.badgeBottom}`}>
          @ Visa · CRM Team
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </div>
  )
}

export default HeroinePhoto;
