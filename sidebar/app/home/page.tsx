'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { PlusCircledIcon } from '@radix-ui/react-icons'

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            {/* <TitlePage title="Home" description="Discover a new songs from various muscian" /> */}
            <Tabs className='m-4' defaultValue='summary'>

                <div className="space-between flex items-center">
                    <TabsList>
                        <TabsTrigger value="sum" className="relative">
                            Summary
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Skills</TabsTrigger>
                        <TabsTrigger value="live">
                            Audits
                        </TabsTrigger>
                        <TabsTrigger value="live">
                            Carrer
                        </TabsTrigger>
                        <TabsTrigger value="live">
                            Competency
                        </TabsTrigger>
                        <TabsTrigger value="live">
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
            </Tabs>


            {/* <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs> */}


        </>
    )
}

export default DashboardPage
