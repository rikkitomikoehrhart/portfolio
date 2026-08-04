import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import styles from '../../styles/home.module.css';

function HeroText() {
  return (
    <div className={styles.heroTextWrapper}>
      <SectionLabel>Software Engineering · Student</SectionLabel>

      <h1 className={styles.heroName}>
        Rikki <em className={styles.heroNameEm}>Tomiko</em> Ehrhart
      </h1>

      <p className={styles.heroTitle}>
        Former theatre kid, Current computer geek
      </p>

      <p className={styles.heroBio}>
        I was feeling lost and a friend suggested I learn a programming language. I didn't
        think I would understand it, let alone love it! I went back to school, earned my A.A.S.
        in Web Programming from Austin Community College, and graduated as the Chancellor's
        Student Achievement Award Recipient (I even gave the valedictorian speech!!!).
      </p>

      <div className={styles.heroActions}>
        <Button to="/portfolio">See My Work</Button>
        <Button to="/contact" variant="ghost">Say Hello</Button>
      </div>
    </div>
  )
}

export default HeroText;
