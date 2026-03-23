import { PortalShell } from '@/components/PortalShell';
import { Section } from '@/components/UI';

const modules = [
  { title: 'Module 1: Cell Basics', progress: '100%', items: ['Lecture video', 'Reading material', 'Quiz item', 'Assignment item'] },
  { title: 'Module 2: Cell Organelles', progress: '72%', items: ['Lecture video', 'Reading material', 'Quiz item', 'Assignment item'] },
  { title: 'Module 3: Photosynthesis', progress: '10%', items: ['Lecture video', 'Reading material'] }
];

export default function StudentModules() {
  return (
    <PortalShell role="student" screenTitle="Modules">
      <Section title="Modules list">
        <div className="stack-list">
          {modules.map((module) => (
            <div key={module.title} className="card">
              <div className="list-row"><div><h3>{module.title}</h3><p>Completion: {module.progress}</p></div><button className="secondary-button">Expand</button></div>
              <ul className="simple-list">{module.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>
    </PortalShell>
  );
}
