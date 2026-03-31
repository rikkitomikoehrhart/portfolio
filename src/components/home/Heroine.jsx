import HeroineText from './HeroineText';
import HeroinePhoto from './HeroinePhoto';
import styles from '../../styles/home.module.css';

function Heroine() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <HeroineText />
      </div>
      <div className={styles.heroRight}>
        <HeroinePhoto />
      </div>
    </section>
  )
}

export default Heroine;
