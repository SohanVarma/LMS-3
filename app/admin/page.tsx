import Link from 'next/link';
import { PortalShell } from '@/components/PortalShell';
import { Section, MetricCard } from '@/components/UI';
import { adminMetrics } from '@/lib/data';

export default function AdminDashboard() {
  return (
    <PortalShell role="admin" screenTitle="Admin Dashboard">
      <div className="grid four">
        {adminMetrics.map((metric) => <MetricCard key={metric.label} label={metric.label} value={metric.value} />)}
      </div>
      <Section title="Quick management">
        <div className="actions-row wrap-actions">
          <Link href="/admin/courses" className="primary-button inline-flex">Create course</Link>
          <Link href="/admin/users" className="secondary-button inline-flex">Manage users</Link>
          <Link href="/admin/analytics" className="secondary-button inline-flex">System reports</Link>
        </div>
      </Section>
    </PortalShell>
  );
}
