/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import {
    Sidebar,
    SidebarContent,
    // SidebarFooter
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Bookmark, ChartNoAxesCombined, ChevronDown, CircleHelp, HelpCircle, Home, LogOut, QrCode, Search, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useRouter } from "next/router"
import { useSession, signOut } from "next-auth/react"
import { Spinner } from "../ui/spinner"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { useState } from "react"

const items = [
    {
        title: "Start page",
        url: "/",
        icon: Home,
    },
    {
        title: "My QR Codes",
        url: "my-qrcodes",
        icon: Bookmark,
    },
    {
        title: "Analytics",
        url: "analytics",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Settings",
        url: "settings",
        icon: Settings,
    },
    {
        title: "Logout",
        url: "#",
        icon: LogOut,
    },
]

export function DashboardSidebar() {
    const { data: session, status } = useSession()
    const [userName, setUserName] = useState(session?.user?.name)

    if (status === "loading") {
        return <Spinner size="small" />
    }

    const handleSignOut = async () => {
        await signOut({ redirect: false })
        window.location.href = "/"
    }

    const avatarFallback = session?.user?.name?.charAt(0).toUpperCase()

    return (
        <>
            {session?.user ? (
                <Sidebar>
                    <SidebarHeader>
                        <SidebarMenuButton>
                            {(session.user.name?.length ?? 0) > 16 ? session.user.name?.substring(0, 16).trimEnd() + "..." : session.user.name}
                        </SidebarMenuButton>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>QRaftHive</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                {item.title === "Logout" ? (
                                                    <a
                                                        onClick={handleSignOut}
                                                        className="hover:text-destructive hover:cursor-pointer transition-all ease-in-out duration-200"
                                                    >
                                                        <item.icon />
                                                        <span>{item.title}</span>
                                                    </a>
                                                ) : (
                                                    <a href={item.url}>
                                                        <item.icon />
                                                        <span>{item.title}</span>
                                                    </a>
                                                )}
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
            ) : (
                <>
                    <p>asd</p>
                </>
            )}
        </>
    )
}
