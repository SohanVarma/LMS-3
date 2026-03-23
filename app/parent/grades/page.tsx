import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

const courseGrades = [
  { title: 'Biology 101', grade: 'A-' },
  { title: 'World History', grade: 'B+' },
  { title: 'Algebra II', grade: 'A' }
];

export default function ParentGrades() {
  return (
    <PortalShell role="parent" screenTitle="Parent Grades">
      <Section title="Grades overview">
        <div className="stack-list">
          {courseGrades.map((course) => (
            <div key={course.title} className="card list-row"><h3>{course.title}</h3><strong>{course.grade}</strong></div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
