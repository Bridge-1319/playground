'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { CalendarCheck, ChevronDownIcon, PersonStanding, SkullIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Overview } from './components/overview'

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TitlePage title="Home" description="Discover a new songs from various muscian" />
            <Card className='w-[300px]'>
                <div className='flex justify-start gap-4 items-center p-4'>

                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <h1> Vikash Kumar</h1>
                </div>

                <CardContent>
                    <div className='flex gap-2 items-center'>
                        <PersonStanding className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                        <div>Architect</div>
                    </div>
                    <div className='mt-2 flex gap-2 items-center'>
                        <CalendarCheck className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                        <div>1 Not Completed</div>
                    </div>
                    <div className='mt-2 flex gap-2 items-center'>
                        <SkullIcon className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                        <div>187 Skills</div>
                    </div>
                </CardContent>

            </Card>


            <Card className='w-[300px] mt-4 p-4'>
                <h1 className='pr-2 mb-3 font-bold'>Top Skills</h1>
                <div className='mb-2 flex justify-between items-center'>
                    <p>1. Principal Architect</p>
                    <Badge className='' variant={"default"} >5.0</Badge>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <p>2. Frontend development</p>
                    <Badge className='' variant={"default"} >5.0</Badge>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <p>3. Backend Devlopment</p>
                    <Badge className='' variant={"default"} >5.0</Badge>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <p>4. Devops</p>
                    <Badge className='' variant={"default"} >5.0</Badge>
                </div>
            </Card>
            {/* i have to make sure that it's adjusted for longer string  */}
            <Card className='w-[300px] mt-4 p-4'>
                <h1 className='pr-2 mb-3 font-bold'>Top Skills</h1>
                <div className='mb-2 flex justify-between items-center'>
                    <Badge className='' variant={"default"} >5.0</Badge>
                    <p>Principal Architect</p>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <Badge className='' variant={"default"} >5.0</Badge>
                    <p>Web Developement</p>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <Badge className='' variant={"default"} >5.0</Badge>
                    <p>Backend Devlopment</p>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <Badge className='' variant={"default"} >5.0</Badge>
                    <p>Devops</p>
                </div>
            </Card>

            <Card className="p-3 mt-3 w-[900px]">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <Overview />
                </CardContent>
            </Card>

            <Card className='mt-4 mb-4 p-3 w-[300px] flex justify-evenly items-center'>

                <center className="h-52 w-20 flex flex-col justify-center">
                    <div className="h-4/5 bg-gray-400"></div>
                    <div className="h-1/5 bg-red-500"></div>
                    <p className="text-4xl">2.4</p>
                    <h1 className='font-semibold'>Skill Level</h1>
                </center>
                <center className="h-52 w-20 flex flex-col justify-center">
                    <div className="h-4/5 bg-gray-400"></div>
                    <div className="h-3/5 bg-green-500"></div>
                    <p className="text-4xl">2.4</p>
                    <h1 className='font-semibold'>Skill Level</h1>
                </center>
            </Card>




            <Card className='w-[350px] mt-4 p-4'>
                <h1 className='pr-2 mb-3 font-bold'>Top Skills</h1>
                <div className='mb-2 flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-3'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Principal Architect</p>
                    </div>

                    <Badge className='' variant={"default"} >7 Skills</Badge>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-3'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Principal Architect</p>
                    </div>

                    <Badge className='' variant={"default"} >7 Skills</Badge>
                </div>
                <div className='mb-2 flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-3'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Principal Architect</p>
                    </div>

                    <Badge className='' variant={"default"} >7 Skills</Badge>
                </div>
              
            </Card>






        </>
    )
}

export default DashboardPage
