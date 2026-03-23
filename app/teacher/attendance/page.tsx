'use client';

import { useState } from 'react';
import { PortalShell } from '@/components/PortalShell';
import { Section, StatusPill } from '@/components/UI';
import { teacherAttendance } from '@/lib/data';

const tones: Record<string, 'success' | 'warn' | 'danger'> = {
  Present: 'success',
  Late: 'warn',
  Absent: 'danger'
};

export default function TeacherAttendancePage() {
  const [rows, setRows] = useState(teacherAttendance.map((row) => ({ ...row })));

  const updateStatus = (index: number, status: 'Present' | 'Late' | 'Absent') => {
    setRows((current) => current.map((row, idx) => idx === index ? { ...row, status } : row));
  };

  return (
    <PortalShell role="teacher" screenTitle="Attendance Manager">
      <Section title="Class details">
        <div className="grid two">
          <div className="card">
            <p className="eyebrow">Course</p>
            <h3>Biology 101</h3>
            <p>Monday · 9:00 AM to 9:50 AM</p>
          </div>
          <div className="card">
            <p className="eyebrow">Summary</p>
            <h3>{rows.filter((row) => row.status === 'Present').length} Present</h3>
            <p>{rows.filter((row) => row.status === 'Absent').length} absent · {rows.filter((row) => row.status === 'Late').length} late</p>
          </div>
        </div>
      </Section>

      <Section title="Mark student attendance" action="Save attendance">
        <div className="card">
          {rows.map((row, index) => (
            <div key={row.rollNo} className="attendance-row">
              <div>
                <strong>{row.name}</strong>
                <p>{row.rollNo}</p>
              </div>
              <StatusPill text={row.status} tone={tones[row.status]} />
              <div className="segmented">
                {(['Present', 'Late', 'Absent'] as const).map((status) => (
                  <button
                    key={status}
                    type="button"
                    className={row.status === status ? 'active' : ''}
                    onClick={() => updateStatus(index, status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
