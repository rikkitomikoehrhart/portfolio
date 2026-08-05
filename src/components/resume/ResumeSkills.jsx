import ResumeSection from '../resume/ResumeSection';
import Tag from '../ui/Tag';
import { skillGroups } from '../../data/resume';
import styles from '../../styles/resume.module.css';

function ResumeSkills() {
  return (
    <ResumeSection title="Skills">
      <div className={styles.skillsWrapper}>
        {skillGroups.map(({ label, items }) => (
          <div key={label}>
            <p className={styles.skillGroupLabel}>{label}</p>
            <div className={styles.skillTags}>
              {items.map(item => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ResumeSection>
  )
}

export default ResumeSkills;
