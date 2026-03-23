export type Role = 'student' | 'teacher' | 'parent' | 'admin';

export const sideMenuByRole: Record<Role, { label: string; href: string }[]> = {
  student: [
    { label: 'Dashboard', href: '/student' },
    { label: 'Courses', href: '/student/course' },
    { label: 'Calendar', href: '/student/course' },
    { label: 'To Do', href: '/student/assignments' },
    { label: 'Inbox', href: '/student/discussions' },
    { label: 'Notifications', href: '/student' },
    { label: 'Files', href: '/student/modules' },
    { label: 'Discussions', href: '/student/discussions' },
    { label: 'Grades', href: '/student/grades' },
    { label: 'Help Center', href: '/student' },
    { label: 'Settings', href: '/student' }
  ],
  teacher: [
    { label: 'Dashboard', href: '/teacher' },
    { label: 'Courses', href: '/teacher/course' },
    { label: 'Attendance', href: '/teacher/attendance' },
    { label: 'Assignments', href: '/teacher/create-assignment' },
    { label: 'Gradebook', href: '/teacher/grade-assignment' },
    { label: 'Inbox', href: '/teacher' },
    { label: 'Notifications', href: '/teacher' },
    { label: 'Analytics', href: '/teacher/course' },
    { label: 'Settings', href: '/teacher' }
  ],
  parent: [
    { label: 'Dashboard', href: '/parent' },
    { label: 'Child Overview', href: '/parent' },
    { label: 'Assignments', href: '/parent/assignments' },
    { label: 'Grades', href: '/parent/grades' },
    { label: 'Reminders', href: '/parent/reminders' },
    { label: 'Inbox', href: '/parent' },
    { label: 'Notifications', href: '/parent' },
    { label: 'Settings', href: '/parent/reminders' }
  ],
  admin: [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Manage Users', href: '/admin/users' },
    { label: 'Courses', href: '/admin/courses' },
    { label: 'Analytics', href: '/admin/analytics' },
    { label: 'Notifications', href: '/admin' },
    { label: 'Settings', href: '/admin' }
  ]
};

export const roleMeta: Record<Role, {title: string; subtitle: string; org: string; user: string; fab: string;}> = {
  student: {
    title: 'Student Portal',
    subtitle: 'Classes, assignments, grades, and discussions in one place.',
    org: 'Slate Academy',
    user: 'Ava Johnson',
    fab: 'Join class'
  },
  teacher: {
    title: 'Teacher Portal',
    subtitle: 'Course delivery, grading, attendance, and communication workflows.',
    org: 'Slate Academy',
    user: 'Mr. Daniel Lee',
    fab: 'Create assignment'
  },
  parent: {
    title: 'Parent Portal',
    subtitle: 'Track each child’s grades, reminders, and communication.',
    org: 'Slate Academy',
    user: 'Priya Sharma',
    fab: 'Message teacher'
  },
  admin: {
    title: 'Admin Portal',
    subtitle: 'Oversee users, courses, analytics, and platform operations.',
    org: 'Slate Academy',
    user: 'Jordan Clark',
    fab: 'Create course'
  }
};

export const studentCourses = [
  { title: 'Biology 101', instructor: 'Dr. Maya Carter', progress: 72, nextAssignment: 'Cell Structure Worksheet', thumbnail: 'BIO', time: '09:00 AM' },
  { title: 'World History', instructor: 'Mr. Arun Patel', progress: 45, nextAssignment: 'Ancient Civilizations Essay', thumbnail: 'HIS', time: '11:30 AM' },
  { title: 'Algebra II', instructor: 'Ms. Sofia Gomez', progress: 83, nextAssignment: 'Quadratic Quiz', thumbnail: 'ALG', time: '02:00 PM' }
];

export const assignments = [
  { title: 'Cell Structure Worksheet', course: 'Biology 101', due: 'Today, 4:00 PM', status: 'Due Today' },
  { title: 'Ancient Civilizations Essay', course: 'World History', due: 'Tomorrow, 11:59 PM', status: 'Due Soon' },
  { title: 'Quadratic Quiz Review', course: 'Algebra II', due: 'Mar 10, 9:00 AM', status: 'Open' }
];

export const uploadItems = [
  { name: 'lab-photo-1.jpg', size: '1.8 MB', progress: 86, type: 'image' },
  { name: 'worksheet-draft.pdf', size: '420 KB', progress: 100, type: 'file' },
  { name: 'experiment-video.mov', size: '24 MB', progress: 45, type: 'video' }
];

export const teacherSubmissions = [
  { student: 'Ava Johnson', file: 'cell-worksheet.pdf', time: '10:32 AM' },
  { student: 'Liam Chen', file: 'cell-model.png', time: '10:55 AM' },
  { student: 'Sara Kim', file: 'biology-notes.zip', time: '11:10 AM' }
];

export const teacherAttendance = [
  { name: 'Ava Johnson', rollNo: 'ST-201', status: 'Present' },
  { name: 'Liam Chen', rollNo: 'ST-202', status: 'Late' },
  { name: 'Sara Kim', rollNo: 'ST-203', status: 'Absent' },
  { name: 'Noah Patel', rollNo: 'ST-204', status: 'Present' }
] as const;

export const parentChildren = [
  {
    id: 'aarav',
    name: 'Aarav Sharma',
    grade: 'Grade 7',
    currentGrades: 'A / A-',
    attendance: '98%',
    upcomingAssignments: 3,
    announcements: 2,
    reminders: [
      { title: 'Science Fair Submission', course: 'Biology 101', due: 'Today, 5:00 PM', badge: 'Due Today' },
      { title: 'History Essay', course: 'World History', due: 'Tomorrow, 8:00 PM', badge: 'Due Soon' }
    ]
  },
  {
    id: 'mira',
    name: 'Mira Sharma',
    grade: 'Grade 10',
    currentGrades: 'B+ / A',
    attendance: '96%',
    upcomingAssignments: 2,
    announcements: 2,
    reminders: [
      { title: 'Math Practice Set', course: 'Algebra II', due: 'Yesterday, 9:00 PM', badge: 'Overdue' },
      { title: 'English Presentation', course: 'English Lit', due: 'Mar 10, 1:00 PM', badge: 'Due Soon' }
    ]
  }
];

export const reminders = parentChildren.flatMap((child) =>
  child.reminders.map((reminder) => ({ ...reminder, child: child.name }))
);

export const adminMetrics = [
  { label: 'Total Students', value: '2,840' },
  { label: 'Total Teachers', value: '186' },
  { label: 'Active Courses', value: '312' },
  { label: 'Platform Usage', value: '94%' }
];
