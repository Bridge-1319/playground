

import { Metadata } from "next";
import NavbarComponent from "../../components/Navbar";
import { SidebarMenu } from "../../components/Sidebar";
import UserNav from '@/app/components/TopNav'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
}
function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <UserNav/>
            <div className="flex">
                <div className="hidden sm:block">
                    <SidebarMenu />
                </div>
                <main className="w-full p-4">{children}</main>
            </div>
        </div>
    );
}


export default RootLayout;
