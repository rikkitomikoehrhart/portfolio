import HeroineText from './HeroineText';
import HeroinePhoto from './HeroinePhoto';
 
function Heroine() {
  return (
    <section style={styles.hero}>
      <div style={styles.left}>
        <HeroineText />
      </div>
      <div style={styles.right}>
        <HeroinePhoto />
      </div>
    </section>
  )
}
 
const styles = {
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '88vh',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
  },
}

export default Heroine;