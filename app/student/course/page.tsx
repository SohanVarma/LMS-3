import Link from 'next/link';
import { PortalShell } from '@/components/PortalShell';
import { Section, Pill } from '@/components/UI';

const tabs = ['Home', 'Modules', 'Assignments', 'Discussions', 'Files', 'Grades', 'People'];

export default function StudentCourseHome() {
  return (
    <PortalShell role="student" screenTitle="Biology 101">
      <div className="card course-hero">
        <div>
          <h2>Biology 101</h2>
          <p>Instructor: Dr. Maya Carter</p>
        </div>
        <div className="tab-row">
          {tabs.map((tab) => <span key={tab} className="pill">{tab}</span>)}
        </div>
      </div>
      <Section title="Home content">
        <div className="grid three">
          <div className="card"><h3>Announcements</h3><p>Lab safety checklist posted for this week.</p><button className="ghost-button">Read more</button></div>
          <div className="card"><h3>Upcoming assignments</h3><p>Cell Structure Worksheet due today.</p><Link href="/student/assignments" className="primary-button inline-flex">Open assignments</Link></div>
          <div className="card"><h3>Course overview</h3><p>Focus this week on eukaryotic cell components and microscopy basics.</p><Pill text="Week 4" /></div>
        </div>
      </Section>
      <Section title="Navigation">
        <div className="actions-row">
          <Link href="/student/modules" className="secondary-button inline-flex">Modules</Link>
          <Link href="/student/assignments" className="secondary-button inline-flex">Assignments</Link>
          <Link href="/student/grades" className="secondary-button inline-flex">Grades</Link>
          <Link href="/student/discussions" className="secondary-button inline-flex">Discussions</Link>
        </div>
      </Section>
    </PortalShell>
  );
}
