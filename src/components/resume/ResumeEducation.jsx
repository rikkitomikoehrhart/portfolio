import ResumeSection from '../resume/ResumeSection'
 
function ResumeEducation() {
  return (
    <ResumeSection title="Education">
      <div style={styles.entry}>
        <div style={styles.header}>
          <div>
            <p style={styles.degree}>
              A.A.S. Web Programming
            </p>
            <p style={styles.certs}>
              Certificates in Web Programming &amp; Coding and Design
            </p>
            <p style={styles.school}>Austin Community College · Austin, TX</p>
          </div>
          <p style={styles.date}>May 2025</p>
        </div>
 
        <div style={styles.honorsBox}>
          <p style={styles.honorsLabel}>Honors &amp; Involvement</p>
          <ul style={styles.honorsList}>
            <li style={styles.honorsItem}>🏆 Chancellor's Student Achievement Award Recipient, May 2025</li>
            <li style={styles.honorsItem}>Phi Theta Kappa Honor Society — Secretary Fall 2024, Co-Chair Outreach Committee Spring 2025</li>
            <li style={styles.honorsItem}>Phi Theta Kappa Alpha Gamma Pi Chapter Scholarship Recipient</li>
            <li style={styles.honorsItem}>WIT (Women in Information Technology) Student Liaison 2024–2026</li>
            <li style={styles.honorsItem}>WIT "Grab A Byte" Lead Instructor</li>
            <li style={styles.honorsItem}>Member, ACC Web Advisory Committee</li>
          </ul>
        </div>
      </div>
    </ResumeSection>
  )
}
 
const styles = {
  entry: {},
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '14px',
    gap: '12px',
  },
  degree: {
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--color-text)',
    marginBottom: '2px',
  },
  certs: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    color: 'var(--color-text-soft)',
    marginBottom: '4px',
  },
  school: {
    fontFamily: 'var(--font-serif)',
    fontSize: '13px',
    fontStyle: 'italic',
    color: 'var(--color-accent)',
  },
  date: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    color: 'var(--color-accent-muted)',
    letterSpacing: '0.06em',
    fontStyle: 'italic',
    flexShrink: 0,
  },
  honorsBox: {
    background: 'var(--color-bg-soft)',
    border: '0.5px solid var(--color-border)',
    padding: '16px 20px',
  },
  honorsLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--color-accent)',
    fontWeight: 500,
    marginBottom: '10px',
  },
  honorsList: {
    listStyleType: 'disc',
    paddingLeft: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  honorsItem: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    color: 'var(--color-text-soft)',
    lineHeight: 1.75,
  },
}

export default ResumeEducation;