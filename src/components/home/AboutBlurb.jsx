import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import { techTags, funFacts } from '../../data/about';
import styles from '../../styles/home.module.css';

function AboutBlurb() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutInner}>

        {/* Left: text */}
        <div className={styles.aboutLeft}>
          <SectionLabel>About Me</SectionLabel>

          <h2 className={styles.aboutHeading}>
            From a grocery store bakery<br />
            <em className={styles.aboutHeadingEm}>to a code editor.</em>
          </h2>

          <p className={styles.aboutBody}>
            I spent 8 years in a grocery store Bakery: baking breads, decorating
            cakes and moving up in leadership: managing people, planning schedules,
            and monitoring finances. Next, I was an Administrative Assistant in a
            Commercial Real Estate office, which taught me how self-sufficient and
            resourceful I am. Now, I'm putting my skills to use as a Software Engineer.
          </p>

          <p className={styles.aboutBody}>
            In 2023, a friend suggested I learn Python. I was skeptical, but decided to
            at least try it. Turns out: I LOVED IT! I quit my job and enrolled at Austin
            Community College to learn programming full time. I graduated in May 2025 with
            my Associates and as the Chancellor's Student Achievement Award Recipient!! I
            even gave the commencement speech!!!! 🎓
          </p>

          <p className={styles.aboutBody}>
            Now I'm a Software Engineer Apprentice at Visa on the CRM team,
            working in Microsoft Dynamics and Power Apps and in the Software
            Developers Bachelors Program at Austin Community College. I'm
            just getting started!
          </p>

          <div className={styles.aboutTags}>
            {techTags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className={styles.aboutTagsBtn}>
            <Button to="/resume">View Full Résumé</Button>
          </div>
        </div>

        {/* Right: fun facts card */}
        <div className={styles.aboutRight}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Quick facts ✨</p>
            <ul className={styles.factList}>
              {funFacts.map(fact => (
                <li key={fact} className={styles.factItem}>{fact}</li>
              ))}
            </ul>
          </div>

          {/* Decorative quote */}
          <div className={styles.quote}>
            <p className={styles.quoteText}>
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

export default AboutBlurb;
