'use client'

import { Button } from '@/components/ui/button'

import { useContext } from 'react'
import { ThemeContext } from '@/app/components/Provider'



import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PlusCircledIcon } from '@radix-ui/react-icons'

import OrganisationSummary from './summary/summary'

function OrganisationPage() {
    const theme = useContext(ThemeContext);


    return (
        <>
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs className='m-4' defaultValue='summary'>

                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="summary" className="relative">
                                Summary
                            </TabsTrigger>
                            

                        </TabsList>
                        <div className="ml-auto mr-4">
                            <Button>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add music
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="summary"><OrganisationSummary /></TabsContent>

                </Tabs>
            </div>
        </>
    )
}

export default OrganisationPage
