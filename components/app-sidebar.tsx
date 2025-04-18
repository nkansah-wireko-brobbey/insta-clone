import { BookMarkedIcon, ChartBar, FolderArchiveIcon, HomeIcon, Instagram, Projector, Send, SettingsIcon } from "lucide-react"
import { FaInstagram } from "react-icons/fa";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Profile from "./profile"

// Sample navigation data
const navigationItems = [
  {
    title: "Feed",
    icon: HomeIcon,
    href: "/dashboard",
    isActive: true,
  },
  {
    title: "Explore",
    icon: FolderArchiveIcon,
    href: "/",
  },
  {
    title: "My Favorites",
    icon: BookMarkedIcon,
    href: "/users",
  },
  {
    title: "Direct",
    icon: Send,
    href: "/settings",
  },
  {
    title: "IG TV",
    icon: Projector,
    href: "/settings",
  },
  {
    title: "Stats",
    icon: ChartBar,
    href: "/settings",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b h-[200px]">
        <div className="dark:text-white flex justify-center gap-2">

          <FaInstagram size={24}/>

          <h3 className="text-center text-l font-semibold tracking-tight mb-5"> Instagram</h3>
        </div>
        <div className=" px-4">
          <Profile imgUrl={""} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.href} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
