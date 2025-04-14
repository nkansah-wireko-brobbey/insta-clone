import type React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import "@/app/globals.css"
import AppSidebar from "@/components/app-sidebar"
import { TopBar } from "@/components/topbar"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="flex h-screen flex-col">
              <TopBar />
              <main className="flex-1 overflow-auto p-4">{children}</main>
            </div>
          </SidebarInset>
        </SidebarProvider>
  )
}
