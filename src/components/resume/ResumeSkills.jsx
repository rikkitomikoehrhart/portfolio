import ResumeSection from '../resume/ResumeSection'
import Tag from '../ui/Tag';
 
const skillGroups = [
  {
    label: 'Technologies',
    items: [
      'JavaScript', 'HTML5', 'CSS', 'React', 'PHP',
      'MySQL', 'Python', 'Java', 'C++', 'Apple Swift',
      'JSON', 'Bootstrap', 'Git',
    ],
  },
  {
    label: 'Tools',
    items: [
      'GitHub', 'Figma', 'VS Code', 'Microsoft Dynamics',
      'Power Apps', 'Salesforce', 'WordPress', 'Notion',
      'DreamHost', 'Google Suite', 'Microsoft Office',
      'Xcode', 'Android Studio', 'Miro', 'ClickUp',
    ],
  },
  {
    label: 'Leadership',
    items: [
      'Resourcefulness', 'Problem Solving', 'Time Management',
      'Adaptability', 'Critical Thinking', 'Communication', 'Organization',
    ],
  },
]
 
function ResumeSkills() {
  return (
    <ResumeSection title="Skills">
      <div style={styles.wrapper}>
        {skillGroups.map(({ label, items }) => (
          <div key={label} style={styles.group}>
            <p style={styles.groupLabel}>{label}</p>
            <div style={styles.tags}>
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
 
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  group: {},
  groupLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--color-text-soft)',
    marginBottom: '7px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
  },
}

export default ResumeSkills;