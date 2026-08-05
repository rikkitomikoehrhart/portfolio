import ResumeSection from '../resume/ResumeSection';
import ResumeEntry from '../resume/ResumeEntry';
import { experience } from '../../data/resume';

function ResumeExperience() {
  return (
    <ResumeSection title="Experience">
      {experience.map((entry) => (
        <ResumeEntry key={entry.org + entry.title} {...entry} />
      ))}
    </ResumeSection>
  )
}

export default ResumeExperience;
