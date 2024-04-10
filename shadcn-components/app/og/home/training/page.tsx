'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { DataTable } from '@/components/datatable/datatable'
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useMemo } from 'react';
import { getTrainingColumns } from './columns';
// 1. Training will be validated by approvers
// 2. Automatically employeer will be notified and it's skill target will be updated
// 3. Approver will get two type of job: Checking Skill by Certification, project experience and skill assignement
// 4. Approver will also get a job to approve the training

// How approver will be chosen?
// 1. Based on the position & skill master
// 2. Assigned manually by admin
// 3. Predefined approver for each skill
// 4. Approver will be give security group to approve the training and skill


// if organisation opt for security group 


const TrainingType = z.object({
    priority: z.string()
        .refine(value => ['High', 'Medium', 'Low'].includes(value), {
            message: 'Invalid priority',
        }),
    courseName: z.string(),
    status: z.enum(['Not Started', 'In Progress', 'Completed', 'On Hold']),
    skill: z.string(),
    skillLevel: z.number(),
    updatedBy: z.string(),
    completionDate: z.string().optional().refine(value => {
        if (!value) return true; // Optional, so it's valid if it's not provided
        return !isNaN(Date.parse(value)); // Check if the date is valid
    }, {
        message: 'Invalid date format, expected YYYY-MM-DD',
    })
});

export type Training = z.infer<typeof TrainingType>;



const trainingDataArray: Training[] = [
    {
        priority: 'High',
        courseName: 'Effective Communication',
        status: 'Completed',
        skill: 'Communication',
        skillLevel: 5,
        updatedBy: 'Trainer A',
        completionDate: '2024-04-01'
    },
    {
        priority: 'Medium',
        courseName: 'Advanced JavaScript',
        status: 'In Progress',
        skill: 'JavaScript',
        skillLevel: 4,
        updatedBy: 'Trainer B',
        completionDate: null
    },
    {
        priority: 'Low',
        courseName: 'Project Management Fundamentals',
        status: 'Not Started',
        skill: 'Project Management',
        skillLevel: 3,
        updatedBy: 'Trainer C',
        completionDate: null
    },
    {
        priority: 'High',
        courseName: 'React for Beginners',
        status: 'On Hold',
        skill: 'React',
        skillLevel: 2,
        updatedBy: 'Trainer D',
        completionDate: null
    },
    {
        priority: 'Low',
        courseName: 'Data Analysis with Python',
        status: 'Completed',
        skill: 'Python',
        skillLevel: 5,
        updatedBy: 'Trainer E',
        completionDate: '2024-04-10'
    },
    {
        priority: 'Medium',
        courseName: 'Machine Learning Basics',
        status: 'Not Started',
        skill: 'Machine Learning',
        skillLevel: 1,
        updatedBy: 'Trainer F',
        completionDate: null
    }
];

// Validation can be done similarly as before for each object in the array if needed

const columns = getTrainingColumns();


export default function TrainingPage() {
    return (
        <Card>
            <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <CardHeader>

                    <div className="flex items-center justify-between space-y-2">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                            <p className="text-muted-foreground">
                                Here&apos;s a list of your tasks for this month!
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* <UserNav /> */}
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                            </Button>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>

                    <DataTable data={trainingDataArray} columns={columns} />
                </CardContent>
            </div>
        </Card>
    )
}