import { Bell, Plus, Search, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function TopBar() {
  return (
<header className="flex h-16 items-center justify-between border-b px-4 sm:px-6 lg:px-8">
  {/* Left Section */}
  <div className="flex flex-1 items-center gap-2 min-w-0">
    <SidebarTrigger className="-ml-1" />

    {/* Optional Vertical Divider */}
    <Separator orientation="vertical" className="hidden sm:block h-6" />

    {/* Search Bar */}
    <div className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search..."
        className="w-full pl-9 rounded-full"
      />
    </div>

    {/* Create Button - Hidden on small screens */}
    <div className="hidden lg:block">
      <Button className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <Plus className="mr-2 h-4 w-4" />
        Create new Post
      </Button>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-3 sm:gap-4">
    <Button variant="ghost" size="icon" className="rounded-full">
      <Bell className="h-5 w-5" />
      <span className="sr-only">Notifications</span>
    </Button>

    <Avatar>
      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
      <AvatarFallback>
        <User className="h-4 w-4" />
      </AvatarFallback>
    </Avatar>
  </div>
</header>


  )
}
