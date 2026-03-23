import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

const users = [
  { name: 'Ava Johnson', role: 'Student', email: 'ava@slate.test' },
  { name: 'Daniel Lee', role: 'Teacher', email: 'daniel@slate.test' },
  { name: 'Priya Sharma', role: 'Parent', email: 'priya@slate.test' },
  { name: 'Jordan Clark', role: 'Admin', email: 'jordan@slate.test' }
];

export default function UserManagement() {
  return (
    <PortalShell role="admin" screenTitle="User Management">
      <Section title="User filters">
        <div className="card form-grid">
          <input className="text-input" placeholder="User search" />
          <div className="actions-row wrap-actions">
            <button className="secondary-button">Students</button>
            <button className="secondary-button">Teachers</button>
            <button className="secondary-button">Parents</button>
            <button className="secondary-button">Admins</button>
          </div>
        </div>
      </Section>
      <Section title="User list">
        <div className="stack-list">
          {users.map((user) => (
            <div key={user.email} className="card list-row">
              <div><h3>{user.name}</h3><p>{user.role} · {user.email}</p></div>
              <button className="primary-button">Manage user</button>
            </div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
