import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

export default function CreateAssignmentScreen() {
  return (
    <PortalShell role="teacher" screenTitle="Create Assignment">
      <Section title="Assignment form">
        <div className="card form-grid">
          <input className="text-input" placeholder="Title field" />
          <textarea className="text-area" rows={6} placeholder="Description editor" />
          <input className="text-input" placeholder="Attachments upload" />
          <input className="text-input" placeholder="Due date picker" />
          <input className="text-input" placeholder="Points field" />
          <select className="text-input"><option>Submission type selector</option><option>File upload</option><option>Text entry</option><option>Media upload</option></select>
          <button className="primary-button">Publish assignment</button>
        </div>
      </Section>
    </PortalShell>
  );
}
