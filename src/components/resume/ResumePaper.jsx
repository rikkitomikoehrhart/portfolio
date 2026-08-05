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
        <b>Software engineering apprentice</b> with hands-on experience developing 
        software within a Microsoft Dynamics 365 environtment at Visa. 
        <br />
        <br />
        Recipient of <em>Austin Community College's</em> prestigious <em>Chancello's
        Student Achievement Award</em>, currently pursuing a <b>Bachelor of Applied 
        Science in Software Development</b>. Strong foundation in frontend development 
        and Python. Seeking early career software engineering roles to <em>grow</em> as 
        a hands-on developer.
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
