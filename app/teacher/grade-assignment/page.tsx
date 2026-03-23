import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';
import { teacherSubmissions } from '@/lib/data';

export default function GradeAssignmentScreen() {
  return (
    <PortalShell role="teacher" screenTitle="Grade Assignment">
      <Section title="Student submissions list">
        <div className="stack-list">
          {teacherSubmissions.map((submission) => (
            <div key={submission.student} className="card list-row">
              <div>
                <h3>{submission.student}</h3>
                <p>{submission.file} · {submission.time}</p>
              </div>
              <button className="secondary-button">Open submission</button>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Grading panel">
        <div className="card form-grid">
          <textarea className="text-area" rows={4} placeholder="Rubric" />
          <input className="text-input" placeholder="Grade input" />
          <textarea className="text-area" rows={4} placeholder="Feedback comment" />
          <button className="primary-button">Save grade</button>
        </div>
      </Section>
    </PortalShell>
  );
}
