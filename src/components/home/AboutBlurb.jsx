import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import Button from '../ui/Button'
 
const funFacts = [
  '🏆 Chancellor Student Achievement Award Recipient',
  '🥤 Fueled by Diet Coke',
  '🛒 10+ years in retail & food',
  '💳 Apprentice Software Engineer @ Visa',
  '🦇 Based in Austin, TX',
  '🐉 Dungeons and Dragons Player',
  '🏀 WNBA Fan',
  '🍎 Fruit Enthusiast',
  '🎭 Bachelors in Theater',
  '⚖️ Libra'
]
 
const techTags = [
  'React', 'JavaScript', 'HTML', 'CSS', 'MySQL', 
  'Microsoft Dynamics', 'Power Apps', 'Playwright',
  'Python', 'Java', 'AI Tools', 'Swift',
]
 
function AboutBlurb() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
 
        {/* Left: text */}
        <div style={styles.left}>
          <SectionLabel>About Me</SectionLabel>
 
          <h2 style={styles.heading}>
            From a grocery store bakery<br />
            <em style={styles.headingEm}>to a code editor.</em>
          </h2>
 
          <p style={styles.body}>
            I spent 8 years in a grocery store Bakery: baking breads, decorating 
            cakes and moving up in leadership: managing people, planning schedules, 
            and monitoring finances. Next, I was an Administrative Assistant in a 
            Commercial Real Estate office, which taught me how self-sufficient and 
            resourceful I am. Now, I'm putting my skills to use as a Software Engineer.
          </p>
 
          <p style={styles.body}>
            In 2023, a friend suggested I learn Python. I was skeptical, but decided to 
            at least try it. Turns out: I LOVED IT! I quit my job and enrolled at Austin 
            Community College to learn programming full time. I graduated in May 2025 with 
            my Associates and as the Chancellor's Student Achievement Award Recipient!! I 
            even gave the commencement speech!!!! 🎓
          </p>
 
          <p style={styles.body}>
            Now I'm a Software Engineer Apprentice at Visa on the CRM team,
            working in Microsoft Dynamics and Power Apps and in the Software 
            Developers Bachelors Program at Austin Community College. I'm 
            just getting started!
          </p>
 
          <div style={styles.tags}>
            {techTags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
 
          <div style={{ marginTop: '32px' }}>
            <Button to="/resume">View Full Résumé</Button>
          </div>
        </div>
 
        {/* Right: fun facts card */}
        <div style={styles.right}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Quick facts ✨</p>
            <ul style={styles.factList}>
              {funFacts.map(fact => (
                <li key={fact} style={styles.factItem}>{fact}</li>
              ))}
            </ul>
          </div>
 
          {/* Decorative quote */}
          <div style={styles.quote}>
            <p style={styles.quoteText}>
              "That brain of mine is something more <br />
              than merely moral; as time will show." <br />
              - Ada Lovelace
            </p>
          </div>
        </div>
 
      </div>
    </section>
  )
}
 
const styles = {
  section: {
    background: 'var(--color-bg)',
    padding: '96px 48px',
    borderTop: '0.5px solid var(--color-border)',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gap: '64px',
    maxWidth: '1100px',
    margin: '0 auto',
    alignItems: 'start',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '44px',
    fontWeight: 300,
    lineHeight: 1.15,
    color: 'var(--color-text)',
    marginBottom: '28px',
  },
  headingEm: {
    fontStyle: 'italic',
    color: 'var(--color-accent)',
  },
  body: {
    fontFamily: 'var(--font-sans)',
    fontSize: '14px',
    lineHeight: 1.9,
    color: 'var(--color-text-soft)',
    marginBottom: '18px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    paddingTop: '8px',
  },
  card: {
    background: 'var(--color-bg-soft)',
    border: '0.5px solid var(--color-border)',
    padding: '28px',
  },
  cardLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    marginBottom: '16px',
    fontWeight: 500,
  },
  factList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  factItem: {
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    color: 'var(--color-text-soft)',
    lineHeight: 1.5,
  },
  quote: {
    borderLeft: '2px solid var(--color-accent)',
    paddingLeft: '20px',
  },
  quoteText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    fontStyle: 'italic',
    fontWeight: 300,
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
  },
}

export default AboutBlurb;