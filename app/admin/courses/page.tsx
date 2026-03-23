import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

const courses = [
  { title: 'Biology 101', instructor: 'Dr. Maya Carter' },
  { title: 'World History', instructor: 'Mr. Arun Patel' },
  { title: 'Algebra II', instructor: 'Ms. Sofia Gomez' }
];

export default function CourseManagement() {
  return (
    <PortalShell role="admin" screenTitle="Course Management">
      <Section title="Courses list">
        <div className="stack-list">
          {courses.map((course) => (
            <div key={course.title} className="card list-row">
              <div><h3>{course.title}</h3><p>{course.instructor}</p></div>
              <button className="secondary-button">Edit course</button>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Create course form">
        <div className="card form-grid">
          <input className="text-input" placeholder="Course title" />
          <textarea className="text-area" rows={4} placeholder="Description" />
          <input className="text-input" placeholder="Instructor selector" />
          <input className="text-input" placeholder="Term selector" />
          <button className="primary-button">Save course</button>
        </div>
      </Section>
    </PortalShell>
  );
}
