'use client'
import React from 'react';

interface SkillTableProps {
  skills: Array<{
    name: string;
    selfAssessment: number;
    supervisorAssessment: number;
  }>;
}

const SkillTable: React.FC<SkillTableProps> = ({ skills }) => {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-4 py-2">Skill</th>
          <th className="text-left px-4 py-2">Self-assessment</th>
          <th className="text-left px-4 py-2">Supervisor assessment</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2">{skill.name}</td>
            <td className="px-4 py-2">{skill.selfAssessment}</td>
            <td className="px-4 py-2">{skill.supervisorAssessment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkillTable;
