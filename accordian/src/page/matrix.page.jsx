import React, { useState } from 'react';
import { useTable } from 'react-table';

const skillData = [
    {
      skill: "JavaScript",
      levels: {
        beginner: "Basic syntax, variables, data types, operators",
        intermediate: "Functions, control flow (if/else, loops), objects, arrays",
        advanced: "Async/await, modules, DOM manipulation, event listeners, web development",
      },
    },
    {
      skill: "Python",
      levels: {
        beginner: "Basics, variables, data types, operators",
        intermediate: "Functions, loops (for, while), conditionals (if/elif/else), modules",
        advanced: "Object-oriented programming (classes, inheritance), data analysis libraries (NumPy, Pandas), machine learning (scikit-learn)",
      },
    },
    {
      skill: "HTML",
      levels: {
        beginner: "Basic structure, tags (heading, paragraph, list), attributes",
        intermediate: "Forms (input, button, select), tables, multimedia (image, video), semantic elements",
        advanced: "Advanced layout (flexbox, grid), frameworks like Bootstrap, accessibility considerations",
      },
    },
    {
      skill: "CSS",
      levels: {
        beginner: "Basic styling, selectors (id, class, tag), properties (color, font, background)",
        intermediate: "Box model (padding, margin, border), layout (positioning), pseudo-classes (:hover, :active)",
        advanced: "Animations, media queries (responsive design), preprocessors (SASS, LESS)",
      },
    },
    {
      skill: "Git",
      levels: {
        beginner: "Version control basics, committing changes, pushing to remote repository",
        intermediate: "Branching, merging, conflict resolution",
        advanced: "Advanced workflows (feature branches, pull requests), hooks, collaboration with teams",
      },
    },
    // Add more skills as needed
  ];
  

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion}>{title}</button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

const SkillMatrix = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'Skill', accessor: 'skill' },
      {
        Header: 'Level',
        Cell: ({ row }) => {
          const { levels } = row.original;
          return (
            <div>
              <Accordion title="Beginner" content={levels.beginner} />
              <Accordion title="Intermediate" content={levels.intermediate} />
              <Accordion title="Advanced" content={levels.advanced} />
            </div>
          );
        },
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: skillData });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SkillMatrix;
