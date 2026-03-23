import { PortalShell } from '@/components/PortalShell';
import { Section, Pill } from '@/components/UI';
import { assignments, uploadItems } from '@/lib/data';

export default function StudentAssignments() {
  return (
    <PortalShell role="student" screenTitle="Assignments">
      <Section title="Assignments list">
        <div className="stack-list">
          {assignments.map((assignment) => (
            <div key={assignment.title} className="card list-row">
              <div>
                <h3>{assignment.title}</h3>
                <p>{assignment.course} · {assignment.due}</p>
              </div>
              <div className="inline-stack">
                <Pill text={assignment.status} />
                <button className="primary-button">Open assignment</button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Assignment details">
        <div className="card">
          <h3>Cell Structure Worksheet</h3>
          <p>Upload your worksheet, microscope photos, or a ZIP with supporting files.</p>
          <div className="grid two compact-gap">
            <div className="info-box"><strong>Instructions</strong><p>Complete all questions and attach at least one labeled image.</p></div>
            <div className="info-box"><strong>Due date</strong><p>Today, 4:00 PM</p></div>
          </div>
          <div className="actions-row wrap-actions">
            <button className="primary-button">Upload file</button>
            <button className="secondary-button">Upload from device</button>
            <button className="secondary-button">Take photo</button>
            <button className="secondary-button">Photo gallery</button>
          </div>
          <div className="permissions-box">
            <strong>Permissions prompt</strong>
            <p>Request camera permission for live capture and storage permission when the OS requires it.</p>
          </div>
          <div className="stack-list">
            {uploadItems.map((item) => (
              <div key={item.name} className="card list-row">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.size}</p>
                  <div className="progress-track"><span style={{ width: `${item.progress}%` }} /></div>
                </div>
                <button className="ghost-button">Remove</button>
              </div>
            ))}
          </div>
          <p className="muted">Max 200MB per file; multiple files allowed. Pending uploads can retry and resume when online.</p>
          <textarea className="text-area" placeholder="Optional text submission" rows={5} />
          <div className="actions-row">
            <button className="primary-button">Submit assignment</button>
            <button className="secondary-button">Save offline draft</button>
          </div>
        </div>
      </Section>
    </PortalShell>
  );
}
