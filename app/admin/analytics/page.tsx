import { PortalShell } from '@/components/PortalShell';
import { Section, MetricCard } from '@/components/UI';

export default function SystemAnalytics() {
  return (
    <PortalShell role="admin" screenTitle="System Analytics">
      <Section title="Platform metrics">
        <div className="grid three">
          <MetricCard label="Active users chart" value="2.7k daily" />
          <MetricCard label="Course completion rates" value="88%" />
          <MetricCard label="Engagement metrics" value="6.2 avg sessions" />
        </div>
      </Section>
      <Section title="Reports">
        <div className="actions-row wrap-actions">
          <button className="secondary-button">Export grades</button>
          <button className="secondary-button">Export attendance</button>
          <button className="secondary-button">Export user activity</button>
        </div>
      </Section>
    </PortalShell>
  );
}
