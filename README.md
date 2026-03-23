# Slate LMS Vercel Demo

This is a Vercel-ready Next.js portal implementation derived from your LMS portal specification.

## What is included

- Student portal
- Teacher portal
- Parent portal
- Admin portal
- Shared top navigation, side drawer, floating action button, and bottom navigation
- Student assignment upload UX for device files, camera, gallery, previews, and offline-sync hints
- Parent due-reminder dashboard and reminder settings screen
- Teacher assignment creation and grading flows
- Admin user, course, and analytics screens

## Important note

This package is a **frontend portal implementation** designed to deploy on Vercel.
It does **not** convert the original Canvas LMS Rails backend into a Vercel-native full-stack Canvas deployment.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Import this folder as a new Vercel project.
2. Framework preset: Next.js.
3. Build command: `next build`.
4. Output setting: leave default.
5. Deploy.

## Routes

- `/` landing page
- `/student`
- `/student/course`
- `/student/modules`
- `/student/assignments`
- `/student/quiz`
- `/student/grades`
- `/student/discussions`
- `/teacher`
- `/teacher/course`
- `/teacher/create-assignment`
- `/teacher/grade-assignment`
- `/parent`
- `/parent/reminders`
- `/parent/grades`
- `/parent/assignments`
- `/admin`
- `/admin/users`
- `/admin/courses`
- `/admin/analytics`
