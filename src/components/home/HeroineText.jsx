import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
 
function HeroText() {
  return (
    <div style={styles.wrapper}>
      <SectionLabel>Software Engineering Apprentice · Visa</SectionLabel>
 
      <h1 style={styles.name}>
        Rikki <em style={styles.nameEm}>Tomiko</em> Ehrhart
      </h1>
 
      <p style={styles.title}>
        Former theatre kid, Current computer geek
      </p>
 
      <p style={styles.bio}>
        I was feeling lost and a friend suggested I learn a programming language. I didn't
        think I would understand it, let alone love it! I went back to school, earned my A.A.S. 
        in Web Programming from Austin Community College, and graduated as the Chancellor's 
        Student Achievement Award Recipient (I even gave the valedictorian speech!!!). 
      </p>
 
      <div style={styles.actions}>
        <Button to="/portfolio">See My Work</Button>
        <Button to="/contact" variant="ghost">Say Hello</Button>
      </div>
    </div>
  )
}
 
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '64px 48px',
    borderRight: '0.5px solid var(--color-border)',
    height: '100%',
  },
  name: {
    fontFamily: 'var(--font-serif)',
    fontSize: '62px',
    fontWeight: 300,
    lineHeight: 1.05,
    color: 'var(--color-text)',
    marginBottom: '10px',
  },
  nameEm: {
    fontStyle: 'italic',
    color: 'var(--color-accent)',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: '26px',
    fontWeight: 300,
    fontStyle: 'italic',
    color: 'var(--color-text-muted)',
    marginBottom: '28px',
    lineHeight: 1.35,
  },
  bio: {
    fontFamily: 'var(--font-sans)',
    fontSize: '14px',
    lineHeight: 1.9,
    color: 'var(--color-text-soft)',
    maxWidth: '450px',
    marginBottom: '40px',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}

export default HeroText;