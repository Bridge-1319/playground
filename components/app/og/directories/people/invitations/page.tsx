'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { DataTable } from '@/components/datatable/datatable'
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useMemo } from 'react';
import { getInvitiationColumn } from './columns';











// Validation can be done similarly as before for each object in the array if needed

const columns = getInvitiationColumn();

// email dateSent addedBy 
const InvitationType = z.object({
    email: z.string().email(),
    dateSent: z.string().refine(value => {
        return !isNaN(Date.parse(value)); // Check if the date is valid
    }, {
        message: 'Invalid date format, expected YYYY-MM-DD',
    }),
    addedBy: z.string().refine(value => {
        return ['invitation', 'reset', 'csvLoading'].includes(value); // Check if the value is one of the allowed options
    }, {
        message: 'Invalid addedBy value',
    })
});

export type Invitation = z.infer<typeof InvitationType>;

const invitationsDataArray: Invitation[] = [
    {
        email: 'john.doe@example.com',
        dateSent: '2022-01-01',
        addedBy: 'invitation'
    },
    {
        email: 'jane.smith@example.com',
        dateSent: '2022-01-01',
        addedBy: 'reset'
    },
    {
        email: 'mike.johnson@example.com',
        dateSent: '2022-01-01',
        addedBy: 'csvLoading'
    }
];



export default function InvitationListingPage() {
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

                    <DataTable data={invitationsDataArray} columns={columns} />
                </CardContent>
            </div>
        </Card>
    )
}