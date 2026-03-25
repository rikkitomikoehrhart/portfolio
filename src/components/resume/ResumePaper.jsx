import ResumeHeader from '../resume/ResumeHeader'
import ResumeEducation from '../resume/ResumeEducation'
import ResumeExperience from '../resume/ResumeExperience'
import ResumeSkills from '../resume/ResumeSkills'
 
function ResumePaper() {
  return (
    <div style={styles.paper}>
      {/* Top fold accent */}
      <div style={styles.topFold} />
 
      <ResumeHeader />
 
      {/* Summary */}
      <p style={styles.summary}>
        Software engineering apprentice with a non-traditional background and a
        proven track record of excellence. After 10+ years in retail and food
        service, I returned to school and graduated as Austin Community College's
        Chancellor's Student Achievement Award Recipient (May 2025). Now building
        CRM solutions and AI-powered tooling at Visa, I bring adaptability,
        people skills, and a genuine love of building things to every project.
      </p>
 
      {/* Two column body */}
      <div style={styles.body}>
        {/* Left: Skills */}
        <div style={styles.leftCol}>
          <ResumeSkills />
        </div>
 
        {/* Right: Education + Experience */}
        <div style={styles.rightCol}>
          <ResumeEducation />
          <ResumeExperience />
        </div>
      </div>
    </div>
  )
}
 
const styles = {
  paper: {
    width: '88%',
    maxWidth: '960px',
    background: '#ffffff',
    boxShadow: `
      0 2px 4px rgba(180,120,130,0.06),
      0 8px 24px rgba(180,120,130,0.1),
      0 32px 80px rgba(180,120,130,0.08)
    `,
    padding: '56px 72px',
    position: 'relative',
    zIndex: 1,
  },
  topFold: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(to bottom, #f5e0e4, transparent)',
    pointerEvents: 'none',
  },
  summary: {
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    lineHeight: 1.85,
    color: 'var(--color-text-soft)',
    borderLeft: '2px solid var(--color-accent)',
    paddingLeft: '16px',
    marginBottom: '28px',
    fontStyle: 'italic',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '40px',
    alignItems: 'start',
  },
  leftCol: {},
  rightCol: {},
}

export default ResumePaper;