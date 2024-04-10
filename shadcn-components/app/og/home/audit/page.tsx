'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { DataTable } from '@/components/datatable/datatable'
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useMemo } from 'react';
import { getSkillColumns } from './columns';


// skills
// skill status current skill rating
// have to think how skill will be re verified?
// is there any date? or system?

// last_supervised_by, current_rating, last_supervise details, last_supervise_date, last_supervise_comment
// skill verification status

// actions: multistep form modal, edit, view previous submission and it's comment
// may be skill will have a page itself

// admin can set at what interval the skill verification will be done

const SkillType = z.object({
    skill: z.string(),
    status: z.enum(['Not Started', 'In Progress', 'Completed', 'On Hold']),
    currentRating: z.number(),
    lastSupervisorDate: z.string().optional().refine(value => {
        if (!value) return true; // Optional, so it's valid if it's not provided
        return !isNaN(Date.parse(value)); // Check if the date is valid
    }, {
        message: 'Invalid date format, expected YYYY-MM-DD',
    })
});

export type Skill = z.infer<typeof SkillType>;

const skillsDataArray: Skill[] = [
    {
        skill: 'Communication',
        status: 'Completed',
        currentRating: 5,
        lastSupervisorDate: '2024-04-01'
    },
    {
        skill: 'JavaScript',
        status: 'In Progress',
        currentRating: 4,
        lastSupervisorDate: null
    },
    {
        skill: 'Project Management',
        status: 'Not Started',
        currentRating: 3,
        lastSupervisorDate: null
    },
    {
        skill: 'React',
        status: 'On Hold',
        currentRating: 2,
        lastSupervisorDate: null
    },
    {
        skill: 'Python',
        status: 'Completed',
        currentRating: 5,
        lastSupervisorDate: '2024-04-10'
    },
    {
        skill: 'Machine Learning',
        status: 'Not Started',
        currentRating: 1,
        lastSupervisorDate: null
    }
];

const skillColumns = getSkillColumns();

// Validation can be done similarly as before for each object in the array if needed

// ...


export default function SkillsPage() {
    return (
        <Card>

            <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
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
                    <DataTable data={skillsDataArray} columns={skillColumns} />
                </CardContent>
            </div>
        </Card>
    )
}