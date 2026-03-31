import ResumeSection from '../resume/ResumeSection';
import styles from '../../styles/resume.module.css';

function ResumeEducation() {
  return (
    <ResumeSection title="Education">
      <div className={styles.eduHeader}>
        <div>
          <p className={styles.degree}>
            A.A.S. Web Programming
          </p>
          <p className={styles.certs}>
            Certificates in Web Programming &amp; Coding and Design
          </p>
          <p className={styles.school}>Austin Community College · Austin, TX</p>
        </div>
        <p className={styles.eduDate}>May 2025</p>
      </div>

      <div className={styles.honorsBox}>
        <p className={styles.honorsLabel}>Honors &amp; Involvement</p>
        <ul className={styles.honorsList}>
          <li className={styles.honorsItem}>🏆 Chancellor's Student Achievement Award Recipient, May 2025</li>
          <li className={styles.honorsItem}>Phi Theta Kappa Honor Society — Secretary Fall 2024, Co-Chair Outreach Committee Spring 2025</li>
          <li className={styles.honorsItem}>Phi Theta Kappa Alpha Gamma Pi Chapter Scholarship Recipient</li>
          <li className={styles.honorsItem}>WIT (Women in Information Technology) Student Liaison 2024–2026</li>
          <li className={styles.honorsItem}>WIT "Grab A Byte" Lead Instructor</li>
          <li className={styles.honorsItem}>Member, ACC Web Advisory Committee</li>
        </ul>
      </div>
    </ResumeSection>
  )
}

export default ResumeEducation;
