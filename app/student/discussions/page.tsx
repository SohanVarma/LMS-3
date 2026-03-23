import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

const threads = [
  { title: 'Lab Safety Questions', author: 'Dr. Maya Carter', replies: 12 },
  { title: 'Microscope Setup Tips', author: 'Ava Johnson', replies: 8 },
  { title: 'Assignment 4 Clarifications', author: 'Liam Chen', replies: 5 }
];

export default function StudentDiscussions() {
  return (
    <PortalShell role="student" screenTitle="Discussions">
      <Section title="Discussion threads">
        <div className="stack-list">
          {threads.map((thread) => (
            <div key={thread.title} className="card list-row">
              <div>
                <h3>{thread.title}</h3>
                <p>{thread.author}</p>
              </div>
              <strong>{thread.replies} replies</strong>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Thread details">
        <div className="card">
          <h3>Lab Safety Questions</h3>
          <p>Remember goggles and gloves for the next microscopy session.</p>
          <div className="reply-box">Reply input box</div>
        </div>
      </Section>
    </PortalShell>
  );
}
