"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Tooltip, TooltipProps } from 'recharts';

type SkillData = {
  skill: string;
  rating: number;
};

const maxBarSize = 170;
const minBarSize = 10;

// This function assumes a full-width chart and will need to be adjusted if your chart width is dynamic
const calculateBarSize = (dataLength: number, chartWidth: number): number => {
  const totalPadding = 100; // Adjust based on your actual padding/margins
  const barPadding = 20; // Space you want to maintain between the bars
  const totalBarPadding = barPadding * (dataLength - 1);
  const calculatedBarSize = (chartWidth - totalPadding - totalBarPadding) / dataLength;

  return Math.max(minBarSize, Math.min(maxBarSize, calculatedBarSize));
};

const skillsData: SkillData[] = [
  { skill: "React", rating: 4.5 },
  { skill: "Angular", rating: 3.8 },
  { skill: "Vue", rating: 4.0 },
  { skill: "Node.js", rating: 4.2 },
  { skill: "Python", rating: 4.7 },
  { skill: "Django", rating: 4.1 },
  { skill: "Ruby on Rails", rating: 3.9 },
  { skill: "Flutter", rating: 4.3 },
];

// Define the type for your tooltip component's props
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: { value: number; payload: SkillData; }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-sm text-gray-800 p-2 border border-gray-300 rounded shadow-lg">
        <p className="font-bold">{`${label}: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export function SkillCharts() {
  const chartWidth = 700; // This should be the rendered width of your chart
  const barSize = calculateBarSize(skillsData.length, chartWidth);

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={skillsData}
        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
      >
        <XAxis
          dataKey="skill"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          domain={[0, 5]}
          allowDecimals={false}
          tickCount={6} // To include 0, 1, 2, 3, 4, and 5
        />
        {/* <Tooltip
  content={<CustomTooltip />}
  wrapperStyle={{
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '3px',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.3)'
  }}
/> */}

        <Bar
          dataKey="rating"
          fill="#000000"
          radius={[5, 5, 0, 0]}
          barSize={barSize}
        >
          <LabelList dataKey="rating" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
