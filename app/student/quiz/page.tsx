import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

export default function StudentQuiz() {
  return (
    <PortalShell role="student" screenTitle="Quiz">
      <Section title="Quiz header">
        <div className="card list-row"><div><h3>Cell Organelles Quiz</h3><p>20 questions</p></div><strong>Timer: 12:44</strong></div>
      </Section>
      <Section title="Question container">
        <div className="card">
          <h3>Which organelle is primarily responsible for ATP production?</h3>
          <div className="stack-list compact-stack">
            {['Option A: Nucleus', 'Option B: Mitochondria', 'Option C: Golgi apparatus', 'Option D: Ribosome'].map((option) => (
              <label key={option} className="choice-row"><input type="radio" name="quiz" /> {option}</label>
            ))}
          </div>
          <div className="actions-row">
            <button className="secondary-button">Previous</button>
            <button className="secondary-button">Next</button>
            <button className="primary-button">Submit quiz</button>
          </div>
        </div>
      </Section>
    </PortalShell>
  );
}
