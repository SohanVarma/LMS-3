'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { PortalShell } from '@/components/PortalShell';
import { Section, MetricCard, Pill } from '@/components/UI';
import { parentChildren } from '@/lib/data';

export default function ParentDashboard() {
  const [selectedId, setSelectedId] = useState(parentChildren[0].id);
  const activeChild = useMemo(
    () => parentChildren.find((child) => child.id === selectedId) ?? parentChildren[0],
    [selectedId]
  );

  return (
    <PortalShell role="parent" screenTitle="Parent Dashboard">
      <div className="summary-banner">
        <div>
          <p className="eyebrow">Currently viewing</p>
          <h2 style={{ margin: '6px 0 0' }}>{activeChild.name}</h2>
          <p className="muted" style={{ margin: '6px 0 0' }}>{activeChild.grade}</p>
        </div>
        <select className="select-input" value={selectedId} onChange={(e) => setSelectedId(e.target.value)} aria-label="Select child">
          {parentChildren.map((child) => (
            <option key={child.id} value={child.id}>{child.name}</option>
          ))}
        </select>
      </div>

      <div className="grid four">
        <MetricCard label="Current grades" value={activeChild.currentGrades} subtext={activeChild.name} />
        <MetricCard label="Attendance" value={activeChild.attendance} subtext="This term" />
        <MetricCard label="Upcoming assignments" value={String(activeChild.upcomingAssignments)} />
        <MetricCard label="Announcements" value={String(activeChild.announcements)} />
      </div>

      <Section title="Child selector">
        <div className="grid two child-picker">
          {parentChildren.map((child) => (
            <button
              type="button"
              key={child.id}
              className={`child-card ${selectedId === child.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(child.id)}
            >
              <h3 style={{ marginTop: 0 }}>{child.name}</h3>
              <p>{child.grade}</p>
              <p className="muted">Grades {child.currentGrades} · Attendance {child.attendance}</p>
            </button>
          ))}
        </div>
      </Section>

      <Section title="Due reminders" action="Reminder settings">
        <div className="grid two">
          <div className="card">
            <h3>{activeChild.name}&apos;s reminders</h3>
            {activeChild.reminders.map((reminder) => (
              <div key={reminder.title} className="list-row">
                <div>
                  <strong>{reminder.title}</strong>
                  <p>{reminder.course} · {reminder.due}</p>
                </div>
                <Pill text={reminder.badge} />
              </div>
            ))}
          </div>
          <div className="card">
            <h3>Quick actions</h3>
            <div className="actions-column">
              <Link href="/parent/reminders" className="primary-button inline-flex">Open reminder settings</Link>
              <Link href="/parent/grades" className="secondary-button inline-flex">View grades</Link>
              <Link href="/parent/assignments" className="secondary-button inline-flex">View assignments</Link>
            </div>
          </div>
        </div>
      </Section>
    </PortalShell>
  );
}
