import AccordionItem from './components/accordian';
import SkillTable from './components/skill';

const skillsData = [
    {
      category: 'Business Analysis (BA)',
      skills: [
        { name: 'Business process analysis', selfAssessment: 5, supervisorAssessment: 4 },
        { name: 'Business process engineering', selfAssessment: 4, supervisorAssessment: 5 },
        { name: 'Workflow analysis and design', selfAssessment: 5, supervisorAssessment: 3 },
      ],
    },
    {
      category: 'BA Requirements',
      skills: [
        { name: 'Functional and non-functional requirement analysis', selfAssessment: 4, supervisorAssessment: 5 },
        { name: 'Requirements gathering and analysis', selfAssessment: 3, supervisorAssessment: 4 },
        { name: 'Requirements traceability', selfAssessment: 3, supervisorAssessment: 3 },
        { name: 'Stakeholder requirements judgment', selfAssessment: 4, supervisorAssessment: 4 },
      ],
    },
    {
      category: 'BA Strategy Analysis',
      skills: [
        { name: 'Business case development', selfAssessment: 4, supervisorAssessment: 4 },
        { name: 'Cost-benefit analysis', selfAssessment: 3, supervisorAssessment: 5 },
        { name: 'Gap analysis and impact assessment', selfAssessment: 5, supervisorAssessment: 3 },
      ],
    },
    {
      category: 'BA Solution Evaluation',
      skills: [
        { name: 'Solution performance analysis', selfAssessment: 3, supervisorAssessment: 4 },
        { name: 'Solution improvement and modification', selfAssessment: 4, supervisorAssessment: 3 },
        { name: 'Solution validation and acceptance', selfAssessment: 5, supervisorAssessment: 5 },
      ],
    },
    {
      category: 'Finance and Accounting',
      skills: [
        { name: 'Financial reporting', selfAssessment: 4, supervisorAssessment: 4 },
        { name: 'Budgeting and forecasting', selfAssessment: 3, supervisorAssessment: 5 },
        { name: 'Account reconciliation', selfAssessment: 5, supervisorAssessment: 3 },
      ],
    },
    // ... additional categories and skills as needed
  ];
  

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {skillsData.map((category, index) => (
        <AccordionItem key={index} title={category.category}>
          <SkillTable skills={category.skills} />
        </AccordionItem>
      ))}
    </div>
  );
};

export default HomePage;
