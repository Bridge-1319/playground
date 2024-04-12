'use client'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'
// import { ThemeContext } from '../../components/Provider'
import { ThemeContext } from '@/app/components/Provider'

// name email role location action
// Adding people by invitation[create there password and confirm], by email[reset their password and confirm], by csv
// skills will be predefined based on roles they are given
// in the future, 
// 1. roles will be assigned based on the team
// 2. skills will be custom as well
// 3. skills will be based on the roles mapping with skills which is predefined
// 4. one people can have one role or multiple roles [i have to decide]
// 5. admin will decide the skill for people



import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PlusCircledIcon } from '@radix-ui/react-icons'
import PeopleListingPage from './peoplelist/page'
import InvitationListingPage from './invitations/page'

// import OrganisationSummary from './summary/summary'

function PeoplePage() {
    const theme = useContext(ThemeContext);


    return (
        <>
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs className='m-4' defaultValue='people'>

                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="people" className="relative">
                                People
                            </TabsTrigger>
                            <TabsTrigger value="invitations" className="relative">
                                Invitation
                            </TabsTrigger>
                            

                        </TabsList>
                        
                    </div>
                    <TabsContent value="people"><PeopleListingPage /></TabsContent>
                    <TabsContent value="invitations"><InvitationListingPage /></TabsContent>

                </Tabs>
            </div>
        </>
    )
}

export default PeoplePage
