import Link from 'next/link';
import { roleMeta } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="landing-page">
      <div className="landing-hero card">
        <p className="eyebrow">SLATE LMS</p>
        <h1>Multi-role LMS portals ready for Vercel deployment</h1>
        <p className="muted large-copy">
          This package replaces the original Rails deployment target with a Vercel-friendly Next.js portal experience for students, teachers, parents, and admins.
        </p>
        <div className="portal-grid">
          {Object.entries(roleMeta).map(([role, meta]) => (
            <Link key={role} href={`/${role}`} className="card portal-card">
              <h2>{meta.title}</h2>
              <p>{meta.subtitle}</p>
              <span className="ghost-button">Open {role} portal</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
