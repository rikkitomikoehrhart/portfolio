import ResumeHeader from '../resume/ResumeHeader';
import ResumeEducation from '../resume/ResumeEducation';
import ResumeExperience from '../resume/ResumeExperience';
import ResumeSkills from '../resume/ResumeSkills';
import styles from '../../styles/resume.module.css';

function ResumePaper() {
  return (
    <div className={styles.paper}>
      {/* Top fold accent */}
      <div className={styles.topFold} />

      <ResumeHeader />

      {/* Summary */}
      <p className={styles.summary}>
        Software engineering apprentice with a non-traditional background and a
        proven track record of excellence. After 10+ years in retail and food
        service, I returned to school and graduated as Austin Community College's
        Chancellor's Student Achievement Award Recipient (May 2025). Now building
        CRM solutions and AI-powered tooling at Visa, I bring adaptability,
        people skills, and a genuine love of building things to every project.
      </p>

      {/* Two column body */}
      <div className={styles.body}>
        <div>
          <ResumeSkills />
        </div>
        <div>
          <ResumeEducation />
          <ResumeExperience />
        </div>
      </div>
    </div>
  )
}

export default ResumePaper;
