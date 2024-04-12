'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { DataTable } from '@/components/datatable/datatable'
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useMemo } from 'react';
import { getPersonColumns } from './columns';



// name email role location 
const PersonType = z.object({
    name: z.string(),
    email: z.string().email(),
    role: z.string(),
    location: z.string(),
    joiningDate: z.string().optional().refine(value => {
        if (!value) return true; // Optional, so it's valid if it's not provided
        return !isNaN(Date.parse(value)); // Check if the date is valid
    }, {
        message: 'Invalid date format, expected YYYY-MM-DD',
    })
});

export type Person = z.infer<typeof PersonType>;

const peopleDataArray: Person[] = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Developer',
        location: 'New York',
        joiningDate: '2022-01-01'
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Designer',
        location: 'San Francisco',
        joiningDate: '2022-01-01'

    },
    {
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        role: 'Manager',
        location: 'London',
        joiningDate: '2022-01-01'

    }
];







// Validation can be done similarly as before for each object in the array if needed

const columns = getPersonColumns();


export default function PeopleListingPage() {
    return (
        <Card>

            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
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

                    <DataTable data={peopleDataArray} columns={columns} />
                </CardContent>
            </div>
        </Card>
    )
}