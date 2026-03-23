import { PortalShell } from '@/components/PortalShell';
import { Section, Pill } from '@/components/UI';
import { reminders } from '@/lib/data';

export default function ParentAssignmentsTracking() {
  return (
    <PortalShell role="parent" screenTitle="Assignments Tracking">
      <Section title="Assignment list">
        <div className="stack-list">
          {reminders.map((item) => (
            <div key={item.title} className="card list-row">
              <div><h3>{item.title}</h3><p>{item.due}</p></div>
              <Pill text={item.badge} />
            </div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
