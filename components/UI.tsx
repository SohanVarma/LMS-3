import { ReactNode } from 'react';

export function Section({ title, action, children }: { title: string; action?: string; children: ReactNode }) {
  return (
    <section className="section-block">
      <div className="section-header">
        <h2>{title}</h2>
        {action ? <button className="ghost-button">{action}</button> : null}
      </div>
      {children}
    </section>
  );
}

export function MetricCard({ label, value, subtext }: { label: string; value: string; subtext?: string }) {
  return (
    <div className="card metric-card">
      <p className="eyebrow">{label}</p>
      <h3>{value}</h3>
      {subtext ? <p className="muted">{subtext}</p> : null}
    </div>
  );
}

export function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>;
}

export function StatusPill({ text, tone = 'neutral' }: { text: string; tone?: 'neutral' | 'success' | 'warn' | 'danger' }) {
  return <span className={`pill tone-${tone}`}>{text}</span>;
}
