import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

export default function ParentReminderSettings() {
  return (
    <PortalShell role="parent" screenTitle="Reminder Settings">
      <Section title="Parent reminder settings">
        <div className="card form-grid">
          <label className="toggle-row"><input type="checkbox" defaultChecked /> Enable all reminders</label>
          <label className="toggle-row"><input type="checkbox" defaultChecked /> Push notifications</label>
          <label className="toggle-row"><input type="checkbox" defaultChecked /> Email</label>
          <label className="toggle-row"><input type="checkbox" /> SMS (optional)</label>
          <select className="text-input"><option>1 day before</option><option>2 days before</option><option>3 days before</option><option>Custom</option></select>
          <input className="text-input" placeholder="Daily digest time" />
          <label className="toggle-row"><input type="checkbox" defaultChecked /> Remind on overdue</label>
          <textarea className="text-area" rows={4} placeholder="Per-child reminder schedule and channel overrides" />
          <button className="primary-button">Save reminder settings</button>
        </div>
      </Section>
    </PortalShell>
  );
}
