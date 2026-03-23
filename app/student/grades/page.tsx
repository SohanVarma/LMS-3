import { PortalShell } from '@/components/PortalShell';
import { Section, MetricCard } from '@/components/UI';

const grades = [
  { name: 'Cell Worksheet', score: '92 / 100', feedback: 'Strong detail in labeling.' },
  { name: 'Lab Reflection', score: '18 / 20', feedback: 'Nice observations and summary.' },
  { name: 'Quiz 3', score: '8 / 10', feedback: 'Review chloroplast structure.' }
];

export default function StudentGrades() {
  return (
    <PortalShell role="student" screenTitle="Grades">
      <div className="grid two">
        <MetricCard label="Overall grade" value="A-" subtext="Biology 101" />
        <MetricCard label="Grade breakdown" value="Assignments 45%" subtext="Quizzes 25% · Labs 30%" />
      </div>
      <Section title="Grade list">
        <div className="stack-list">
          {grades.map((grade) => (
            <div key={grade.name} className="card">
              <div className="list-row"><h3>{grade.name}</h3><strong>{grade.score}</strong></div>
              <p>{grade.feedback}</p>
            </div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
