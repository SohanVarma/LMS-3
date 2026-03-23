import Link from 'next/link';
import { PortalShell } from '@/components/PortalShell';
import { Section, MetricCard, Pill } from '@/components/UI';
import { assignments, studentCourses } from '@/lib/data';

export default function StudentDashboard() {
  return (
    <PortalShell role="student" screenTitle="Dashboard">
      <div className="grid four">
        <MetricCard label="Today classes" value="3" subtext="Next class starts at 9:00 AM" />
        <MetricCard label="Upcoming assignments" value="4" subtext="1 due today" />
        <MetricCard label="Recent grades" value="A-" subtext="Biology average" />
        <MetricCard label="Announcements" value="2" subtext="Unread course updates" />
      </div>

      <Section title="Quick summary" action="Open calendar">
        <div className="grid two">
          <div className="card">
            <h3>Today classes</h3>
            {studentCourses.map((course) => (
              <div key={course.title} className="list-row">
                <div>
                  <strong>{course.title}</strong>
                  <p>{course.time}</p>
                </div>
                <button className="primary-button">Join</button>
              </div>
            ))}
          </div>
          <div className="card">
            <h3>Upcoming assignments</h3>
            {assignments.map((item) => (
              <div key={item.title} className="list-row">
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.due}</p>
                </div>
                <Pill text={item.status} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Courses" action="View all">
        <div className="grid three">
          {studentCourses.map((course) => (
            <div key={course.title} className="card course-card">
              <div className="course-thumb">{course.thumbnail}</div>
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
              <div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div>
              <p className="muted">Next: {course.nextAssignment}</p>
              <Link href="/student/course" className="primary-button inline-flex">Open course</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Quick actions">
        <div className="actions-row">
          <Link href="/student/course" className="primary-button inline-flex">Join live class</Link>
          <Link href="/student/assignments" className="secondary-button inline-flex">Submit assignment</Link>
          <Link href="/student/discussions" className="secondary-button inline-flex">Open inbox</Link>
        </div>
      </Section>
    </PortalShell>
  );
}
