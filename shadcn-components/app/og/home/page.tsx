'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../components/Provider'
import TitlePage from '../../components/TitlePage'
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { CalendarCheck, ChevronDownIcon, PersonStanding, SkullIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
// import { Overview } from './components/overview'


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { DashboardPage } from './hut'
import TrainingPage from './training/page'
import SkillsPage from './audit/page'

function Home() {
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
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="audits">
                                Audits
                            </TabsTrigger>
                            <TabsTrigger value="carrer">
                                Carrer
                            </TabsTrigger>
                            <TabsTrigger value="competency">
                                Competency
                            </TabsTrigger>
                            <TabsTrigger value="training">
                                Training
                            </TabsTrigger>

                        </TabsList>
                        <div className="ml-auto mr-4">
                            <Button>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add music
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="summary"><DashboardPage /></TabsContent>
                    <TabsContent value="training"><TrainingPage /></TabsContent>
                    <TabsContent value="audits"><SkillsPage/></TabsContent>

                </Tabs>
            </div>
        </>
    )
}

export default Home
