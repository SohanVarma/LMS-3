import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slate LMS',
  description: 'Vercel-ready multi-role LMS portal demo for student, teacher, parent, and admin experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
