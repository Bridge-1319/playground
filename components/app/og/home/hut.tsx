'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../components/Provider'
import TitlePage from '../../components/TitlePage'
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { CalendarCheck, ChevronDownIcon, LocateIcon, PersonStanding, SkullIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Overview } from './components/overview'
import { SkillCharts } from './components/skill-chart'
// import { SkillCharts } from './components/skill-chart'

export function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TitlePage title="Home" description="Discover a new songs from various muscian" />
            <main className="flex flex-1 flex-col gap-2 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 items-stretch auto-rows-max" style={{ gridAutoRows: 'minmax(0, min-content)' }}>


                        <Card className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                            <div className='flex items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <Avatar className='ring-4 ring-white'>
                                    <AvatarImage className='rounded-full' src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1 className='ml-4 text-white text-2xl font-semibold'>Vikash Kumar</h1>
                            </div>

                            <CardContent className='flex flex-col bg-white p-4 space-y-4 flex-grow'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 items-center text-gray-700'>
                                        <PersonStanding className="h-6 w-6 shrink-0" />
                                        <span className='font-medium'>Architect</span>
                                    </div>
                                    <span className='bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'>
                                        35% Complete
                                    </span>
                                </div>
                                <hr />
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 items-center text-gray-600'>
                                        <CalendarCheck className="h-6 w-6 shrink-0" />
                                        <span className='font-medium'>1 Not Completed</span>
                                    </div>
                                    <a href="#" className='text-indigo-500 hover:text-indigo-600'>View tasks</a>
                                </div>
                                <hr />
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 items-center text-gray-600'>
                                        <SkullIcon className="h-6 w-6 shrink-0" />
                                        <span className='font-medium'>187 Skills</span>
                                    </div>
                                    <a href="#" className='text-indigo-500 hover:text-indigo-600'>See all</a>
                                </div>
                                <hr />
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 items-center text-gray-600'>
                                        <LocateIcon className="h-6 w-6 shrink-0" />
                                        <span className='font-medium'>Chennai</span>
                                    </div>
                                    <a href="#" className='text-indigo-500 hover:text-indigo-600'>Map</a>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className='mt-4 mb-4 p-3 flex justify-evenly items-end bg-white rounded-lg shadow-lg'>
                        {/* <CardContent className='flex flex-col bg-white p-4 space-y-4 flex-grow justify-between'> */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="h-40 w-12 bg-green-500 rounded">
                                    <div className="h-1/5 w-full bg-gray-500 rounded-t-md"></div>
                                </div>
                                <p className="text-4xl mt-3 font-bold text-gray-800">2.4</p>
                                <h1 className='text-lg font-semibold text-gray-600 mt-1'>Skill Level</h1>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="h-40 w-12 bg-green-500 rounded">
                                    <div className="h-1/5 w-full bg-gray-500 rounded-t-md"></div>
                                </div>
                                <p className="text-4xl mt-3 font-bold text-gray-800">2.4</p>
                                <h1 className='text-lg font-semibold text-gray-600 mt-1'>Interest Level</h1>
                            </div>



                            <div className="flex flex-col items-center justify-center">
                                <svg width="120" height="120" viewBox="0 0 120 120">
                                    <circle cx="60" cy="60" r="50" fill="none" stroke="#d1d5db" strokeWidth="15" />
                                    <circle cx="60" cy="60" r="50" fill="none" stroke="#16a34a" strokeWidth="15"
                                        strokeDasharray="314" strokeDashoffset="31.4" transform="rotate(-90 60 60)" />
                                    {/* <text x="60" y="65" textAnchor="middle" fontWeight="bold" fontSize="20">90%</text> */}
                                </svg>
                                <div className="absolute top-0 transform -translate-y-full text-center">
                                    <p className="text-lg font-semibold text-gray-600">90%</p>
                                </div>
                                <h1 className='text-lg font-semibold text-gray-600 mt-4'>Competency</h1>
                            </div>
                        {/* <CardContent/> */}
                        </Card>
                    </div>
            </main>



            <main className="flex flex-1 flex-col gap-2 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2  lg:grid-cols-2 items-stretch">
                    {/* 2nd important */}


                    {/* First made */}
                    <Card className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                        <div className='flex items-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <Avatar className='ring-2 ring-white'>
                                <AvatarImage className='rounded-full' src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className='ml-4 text-white text-2xl font-semibold'>Vikash Kumar</h1>
                        </div>

                        <CardContent className='bg-white p-4'>
                            <div className='flex gap-2 items-center text-gray-700'>
                                <PersonStanding className="h-6 w-6 shrink-0" />
                                <span className='font-medium'>Architect</span>
                            </div>
                            <div className='mt-3 flex gap-2 items-center text-gray-600'>
                                <CalendarCheck className="h-6 w-6 shrink-0" />
                                <span className='font-medium'>1 Not Completed</span>
                            </div>
                            <div className='mt-3 flex gap-2 items-center text-gray-600'>
                                <SkullIcon className="h-6 w-6 shrink-0" />
                                <span className='font-medium'>187 Skills</span>
                            </div>
                            <div className='mt-3 flex gap-2 items-center text-gray-600'>
                                <LocateIcon className="h-6 w-6 shrink-0" />
                                <span className='font-medium'>Chennai</span>
                            </div>
                        </CardContent>
                    </Card>


                    <Card className='flex flex-col justify-center'>
                        <div className='flex gap-4 items-center p-4'>

                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <h1> Vikash Kumar</h1>
                        </div>

                        <CardContent className=''>
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
                            <div className='mt-2 flex gap-2 items-center'>
                                <LocateIcon className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                                <div>Chennai</div>
                            </div>
                        </CardContent>
                    </Card>


                    <Card className='mt-4 mb-4 p-3  flex justify-evenly items-center'>

                        <center className="h-52 w-20 flex flex-col justify-center">
                            <div className="h-1/5 bg-green-500"></div>
                            <div className="h-4/5 bg-gray-400"></div>
                            <p className="text-4xl">2.4</p>
                            <h1 className='font-semibold'>Skill Level</h1>
                        </center>
                        <center className="h-52 w-20 flex flex-col justify-center">
                            <div className="h-3/5 bg-green-500"></div>
                            <div className="h-4/5 bg-gray-400"></div>
                            <p className="text-4xl">2.4</p>
                            <h1 className='font-semibold'>Interest Level</h1>
                        </center>
                        <center className="flex flex-col justify-center items-center">
                            <svg width="120" height="120" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#d1d5db" strokeWidth="15" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#facc15" strokeWidth="15"
                                    strokeDasharray="314" strokeDashoffset="31.4" transform="rotate(-90 60 60)" />
                                <text x="60" y="65" textAnchor="middle" fontWeight="bold" fontSize="20">90%</text>
                            </svg>
                            <h1 className='font-semibold text-lg mt-6'>Competency</h1>
                        </center>

                    </Card>

                    <Card className='mt-4 mb-4 p-3 flex justify-evenly items-end bg-white rounded-lg shadow-xl'>
                        <div className="flex flex-col items-center justify-center">
                            <div className="h-40 w-12 bg-green-500 rounded">
                                <div className="h-1/5 w-full bg-gray-500 rounded-t-md"></div>
                            </div>
                            <p className="text-4xl mt-3 font-bold text-gray-800">2.4</p>
                            <h1 className='text-lg font-semibold text-gray-600 mt-1'>Skill Level</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className="h-40 w-12 bg-green-500 rounded">
                                <div className="h-1/5 w-full bg-gray-500 rounded-t-md"></div>
                            </div>
                            <p className="text-4xl mt-3 font-bold text-gray-800">2.4</p>
                            <h1 className='text-lg font-semibold text-gray-600 mt-1'>Interest Level</h1>
                        </div>



                        <div className="flex flex-col items-center justify-center">
                            <svg width="120" height="120" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#d1d5db" strokeWidth="15" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#16a34a" strokeWidth="15"
                                    strokeDasharray="314" strokeDashoffset="31.4" transform="rotate(-90 60 60)" />
                                <text x="60" y="65" textAnchor="middle" fontWeight="bold" fontSize="20">90%</text>
                            </svg>
                            <h1 className='text-lg font-semibold text-gray-600 mt-12'>Competency</h1>
                        </div>
                    </Card>


                    <Card className='mt-4 mb-4 p-4 flex justify-around items-end bg-white rounded-lg shadow-xl'>
                        <div className="flex flex-col items-start justify-end">
                            <div className="h-32 w-12 bg-gray-400 rounded mt-4">
                                <div className="h-1/5 w-full bg-green-500 rounded-b-md"></div>
                            </div>
                            <p className="text-2xl font-bold text-gray-800 mt-2">2.4</p>
                            <h1 className='text-base font-semibold text-gray-600'>Skill Level</h1>
                        </div>

                        <div className="flex flex-col items-start justify-end">
                            <div className="h-32 w-12 bg-gray-400 rounded mt-4">
                                <div className="h-3/5 w-full bg-green-500 rounded-b-md"></div>
                            </div>
                            <p className="text-2xl font-bold text-gray-800 mt-2">2.4</p>
                            <h1 className='text-base font-semibold text-gray-600'>Skill Level</h1>
                        </div>

                        <div className="flex flex-col items-start justify-end">
                            <svg width="100" height="100" viewBox="0 0 120 120" className="mt-4">
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#d1d5db" strokeWidth="15" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#16a34a" strokeWidth="15"
                                    strokeDasharray="314" strokeDashoffset="31.4" transform="rotate(-90 60 60)" />
                                <text x="60" y="65" textAnchor="middle" fontWeight="bold" fontSize="20">90%</text>
                            </svg>
                            <h1 className='text-base font-semibold text-gray-600 mt-2'>Competency</h1>
                        </div>
                    </Card>




                </div>
            </main>
            <Card className=' mt-4 p-4'>
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
            <Card className='mt-4 p-4'>
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



            <Card className='mt-4 mb-4 p-3 flex justify-evenly items-center'>

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

            <Card className="p-3 mt-3">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <Overview />
                </CardContent>
            </Card>
            <Card className="p-2 mt-3">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <SkillCharts />
                </CardContent>
            </Card>
            <SkillCharts />

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


            <Card>

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





            <main className="flex flex-1 flex-col gap-2 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">

                    <Card className='flex flex-1 flex-col justify-between p-4'>
                        <div className='flex gap-4 items-center'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1> Vikash Kumar</h1>
                        </div>

                        <CardContent className='flex-grow'>
                            <div className='flex gap-2 items-center my-2'>
                                <PersonStanding className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                                <div>Architect</div>
                            </div>
                            <div className='flex gap-2 items-center my-2'>
                                <CalendarCheck className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                                <div>1 Not Completed</div>
                            </div>
                            <div className='flex gap-2 items-center my-2'>
                                <SkullIcon className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                                <div>187 Skills</div>
                            </div>
                            <div className='flex gap-2 items-center my-2'>
                                <LocateIcon className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                                <div>Chennai</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='flex flex-1 flex-col justify-between p-4'>
                        <div className="flex flex-1 flex-col justify-center items-center">
                            <div className="h-full w-full flex justify-evenly items-center">
                                {/* Skill Level Bars */}
                                <div className="flex flex-col justify-end items-center">
                                    <div className="w-12 bg-gray-400" style={{ height: "80%" }}></div>
                                    <div className="w-12 bg-green-500" style={{ height: "20%" }}></div>
                                    <p className="text-4xl">2.4</p>
                                    <h1 className='font-semibold'>Skill Level</h1>
                                </div>
                                <div className="flex flex-col justify-end items-center">
                                    <div className="w-12 bg-gray-400" style={{ height: "60%" }}></div>
                                    <div className="w-12 bg-green-500" style={{ height: "40%" }}></div>
                                    <p className="text-4xl">2.4</p>
                                    <h1 className='font-semibold'>Skill Level</h1>
                                </div>
                                {/* Competency Circle */}
                                <div className="flex flex-col justify-center items-center">
                                    <svg width="120" height="120" viewBox="0 0 120 120">
                                        <circle cx="60" cy="60" r="50" fill="none" stroke="#d1d5db" strokeWidth="15" />
                                        <circle cx="60" cy="60" r="50" fill="none" stroke="#facc15" strokeWidth="15"
                                            strokeDasharray="314" strokeDashoffset="31.4" transform="rotate(-90 60 60)" />
                                        <text x="60" y="65" textAnchor="middle" fontWeight="bold" fontSize="20">90%</text>
                                    </svg>
                                    <h1 className='font-semibold text-lg mt-2'>Competency</h1>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </main>

        </>
    )
}

