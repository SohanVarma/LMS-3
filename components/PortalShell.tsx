'use client';

import Link from 'next/link';
import { ReactNode, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Role, roleMeta, sideMenuByRole } from '@/lib/data';

function NotificationGlyph() {
  return (
    <span className="notif-glyph" aria-hidden="true">
      <span className="notif-dot" />
      ⌁
    </span>
  );
}

export function PortalShell({
  role,
  screenTitle,
  children,
}: {
  role: Role;
  screenTitle: string;
  children: ReactNode;
}) {
  const meta = roleMeta[role];
  const menuItems = sideMenuByRole[role];
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = useMemo(
    () => meta.user.split(' ').map((v) => v[0]).join('').slice(0, 2),
    [meta.user]
  );

  return (
    <div className={`app-shell ${collapsed ? 'drawer-collapsed' : ''}`}>
      {mobileOpen ? <button className="drawer-overlay" onClick={() => setMobileOpen(false)} aria-label="Close sidebar" /> : null}

      <aside className={`side-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="user-header card">
          <div className="avatar large">{initials}</div>
          {!collapsed ? (
            <>
              <div className="user-meta">
                <h2>{meta.user}</h2>
                <p>{meta.title}</p>
                <p>{meta.org}</p>
              </div>
              <button className="secondary-button full-width">Switch account</button>
            </>
          ) : null}
        </div>

        <nav className="menu-list card">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`menu-item ${active ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <span className="menu-icon">•</span>
                {!collapsed ? <span>{item.label}</span> : null}
              </Link>
            );
          })}
        </nav>

        <div className="drawer-footer card">
          <Link href="/" className="logout-button">
            <span>↩</span>
            {!collapsed ? <span>Log out</span> : null}
          </Link>
        </div>
      </aside>

      <div className="content-area">
        <header className="top-nav card">
          <div className="nav-left">
            <button className="icon-button interactive hide-desktop" onClick={() => setMobileOpen(true)} aria-label="Open sidebar">☰</button>
            <button
              className="icon-button interactive hide-mobile"
              onClick={() => setCollapsed((v) => !v)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? '→' : '←'}
            </button>
          </div>
          <div className="nav-center">
            <h1>{screenTitle}</h1>
            <p>{meta.subtitle}</p>
          </div>
          <div className="nav-right">
            <div className="notification-chip" title="Notifications">
              <NotificationGlyph />
            </div>
            <div className="avatar">{initials}</div>
          </div>
        </header>

        <main className="main-content">{children}</main>

        <button className="fab">{meta.fab}</button>
      </div>
    </div>
  );
}
