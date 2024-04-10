import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Building, ChevronDownIcon, ShieldCheck, Home, ListVideo, Menu, Mic2, Music, Play, RadioIcon, SquareStack, User, ShieldCheckIcon, Folder, Video, LocateIcon, MapPin, Users, BadgeCheckIcon, Network, Briefcase, UserSquare2Icon, BookText, FileText, UserCheck2, UserCog, Cog, Star, FileStack, SquareEqual } from "lucide-react";
import Link from "next/link";
import * as React from "react";

type Menu = {
    label: string
    name: string
    icon: React.ReactNode
    submenu?: Submenu[]
    href: string
}

type Submenu = {
    name: string
    icon: React.ReactNode
    href: string
}

// this is the most important thing
// Will be changed heavily till the end

export function SidebarMenu() {
    const menus: Menu[] = [
        {
            label: "Discover",
            name: "My Summary",
            icon: <Home size={15} className="mr-2" />,
            href: "/og/home",
        },
        // {
        //     label: "Discover",
        //     name: "My team",
        //     icon: <Home size={15} className="mr-2" />,
        //     href: "/home",
        // },
        {
            label: "Discover",
            name: "Organisation",
            icon: <Building size={15} className="mr-2" />,
            href: "/og/organisation",
        },
        {
            label: "Supervisor",
            name: "Access Now",
            icon: <BadgeCheckIcon size={15} className="mr-2" />,
            href: "/og/supervision",
        },
        {
            label: "Listing",
            name: "Directories",
            icon: <Folder size={15} className="mr-2" />,
            href: "/og/directories",
            submenu: [
                {
                    name: "Courses",
                    icon: <Video size={15} className="mr-2" />,
                    href: "/og/directories/courses/",
                },
                {
                    name: "Locations",
                    icon: <MapPin size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "People",
                    icon: <Users size={15} className="mr-2" />,
                    href: "/og/directories/people/",
                },
                // {
                //     name: "Qualification",
                //     icon: <ListVideo size={15} className="mr-2" />,
                //     href: "/home/",
                // },
                {
                    name: "Roles",
                    icon: <Network size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Skills",
                    icon: <Briefcase size={15} className="mr-2" />,
                    href: "/home/",
                },
                // {
                //     name: "Teams",
                //     icon: <ListVideo size={15} className="mr-2" />,
                //     href: "/home/",
                // },
            ],
        },
        {
            label: "Listing",
            name: "People Finder",
            icon: <UserSquare2Icon size={15} className="mr-2" />,
            href: "/home/playlist",
        },
        {
            label: "Listing",
            name: "Reports",
            icon: <BookText size={15} className="mr-2" />,
            href: "/home/playlist",
        },
        {
            label: "Listing",
            name: "Activity Logs",
            icon: <FileText size={15} className="mr-2" />,
            href: "/home/playlist",
        },
        {
            label: "Admin",
            name: "Administration",
            icon: <ShieldCheck size={15} className="mr-2" />,
            href: "/home/playlist",
            submenu: [
                // {
                //     name: "Authenticaton",
                //     icon: <ListVideo size={15} className="mr-2" />,
                //     href: "/home/",
                // },
                {
                    name: "Security Groups",
                    icon: <UserCog size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Setting",
                    icon: <Cog size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "File Transfer",
                    icon: <FileStack size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Rating Scheme",
                    icon: <Star size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Course Mapping",
                    icon: <SquareEqual size={15} className="mr-2" />,
                    href: "/home/",
                }
            ],
        },
    ];

    const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

    return (
        <div className="border-r border-gray-300">
            <ScrollArea className="h-screen lg:w-48 sm:w-full rounded-md ">
                <div className="md:px-4 sm:p-0 mt-5 ">
                    {uniqueLabels.map((label, index) => (
                        <React.Fragment key={label}>
                            {label && (
                                <p className={`mx-4 mb-3 text-xs text-left tracking-wider  font-bold text-slate-600 ${index > 0 ? 'mt-10' : ''}`}>
                                    {label}
                                </p>
                            )}
                            {menus
                                .filter((menu) => menu.label === label)
                                .map((menu) => (
                                    <React.Fragment key={menu.name}>
                                        {menu.submenu && menu.submenu.length > 0 ? (
                                            <Accordion
                                                key={menu.name}
                                                type="single"
                                                className="mt-[-10px] mb-[-10px] p-0 font-normal"
                                                collapsible
                                            >
                                                <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                                                    <AccordionTrigger>
                                                        <a key={menu.name} className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md">
                                                            <div className={cn("flex justify-between w-full [&[data-state=open]>svg]:rotate-180")}>
                                                                <div className="flex">
                                                                    <div className="w-6">{menu.icon}</div>
                                                                    {menu.name}
                                                                </div>
                                                                <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                                                            </div>
                                                        </a>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        {menu.submenu.map((submenu) => (
                                                            <Link key={submenu.name} href={submenu.href} className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md">
                                                                <div className="w-6">{submenu.icon}</div>
                                                                {submenu.name}
                                                            </Link>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        ) : (
                                            <div key={menu.name}>
                                                <Link href={menu.href} className="flex text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md">
                                                    <div className="w-6">{menu.icon}</div>
                                                    {menu.name}
                                                </Link>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                        </React.Fragment>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
