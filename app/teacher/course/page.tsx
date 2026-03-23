import Link from 'next/link';
import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

const tabs = ['Modules', 'Assignments', 'Discussions', 'Files', 'Grades', 'People', 'Analytics', 'Settings'];

export default function TeacherCourseManagement() {
  return (
    <PortalShell role="teacher" screenTitle="Course Management">
      <Section title="Course tabs">
        <div className="tab-row">{tabs.map((tab) => <span className="pill" key={tab}>{tab}</span>)}</div>
      </Section>
      <Section title="Teaching actions">
        <div className="actions-row wrap-actions">
          <Link href="/teacher/create-assignment" className="primary-button inline-flex">Create assignment</Link>
          <Link href="/teacher/grade-assignment" className="secondary-button inline-flex">Grade submissions</Link>
        </div>
      </Section>
    </PortalShell>
  );
}
