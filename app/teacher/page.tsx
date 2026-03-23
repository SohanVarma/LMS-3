import Link from 'next/link';
import { PortalShell } from '@/components/PortalShell';
import { Section, MetricCard } from '@/components/UI';

const teacherCourses = [
  { title: 'Biology 101', students: 32, assignments: 8, completion: 82 },
  { title: 'Biology 201', students: 28, assignments: 6, completion: 74 },
  { title: 'Environmental Science', students: 24, assignments: 5, completion: 68 }
];

export default function TeacherDashboard() {
  return (
    <PortalShell role="teacher" screenTitle="Teacher Dashboard">
      <div className="grid four">
        <MetricCard label="Courses teaching" value="3" />
        <MetricCard label="Assignments to grade" value="18" />
        <MetricCard label="Attendance pending" value="1 class" subtext="Biology 101 · 9 AM" />
        <MetricCard label="Messages from students" value="7" />
      </div>
      <Section title="Today&apos;s workflow" action="Open attendance">
        <div className="grid three">
          <div className="card">
            <h3>Take attendance</h3>
            <p>Mark present, late, or absent for today&apos;s class with one tap.</p>
            <Link href="/teacher/attendance" className="primary-button inline-flex">Mark attendance</Link>
          </div>
          <div className="card">
            <h3>Grade submissions</h3>
            <p>18 submissions are waiting for review and feedback comments.</p>
            <Link href="/teacher/grade-assignment" className="secondary-button inline-flex">Open grading</Link>
          </div>
          <div className="card">
            <h3>Create content</h3>
            <p>Post a new assignment or announcement for students.</p>
            <Link href="/teacher/create-assignment" className="secondary-button inline-flex">Create assignment</Link>
          </div>
        </div>
      </Section>
      <Section title="Courses section" action="Manage courses">
        <div className="grid three">
          {teacherCourses.map((course) => (
            <div key={course.title} className="card">
              <h3>{course.title}</h3>
              <p>{course.students} students</p>
              <p>{course.assignments} assignments</p>
              <div className="status-bar"><span style={{ width: `${course.completion}%` }} /></div>
              <p className="muted">Completion rate {course.completion}%</p>
              <Link href="/teacher/course" className="primary-button inline-flex">Open course</Link>
            </div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
