/*
<ai_context>
This client component provides the sidebar for the app.
</ai_context>
*/

"use client"

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Home,
  Settings,
  Terminal,
  User
} from "lucide-react"
import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

interface AppSidebarProps {
  className?: string
}

export function AppSidebar({ className }: AppSidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/",
      active: pathname === "/"
    },
    {
      label: "Todo",
      icon: Terminal,
      href: "/todo",
      active: pathname === "/todo"
    },
    {
      label: "Analytics",
      icon: PieChart,
      href: "/analytics",
      active: pathname === "/analytics"
    },
    {
      label: "Settings",
      icon: Settings2,
      href: "/settings",
      active: pathname === "/settings"
    }
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <nav className="grid items-start gap-2">
              {routes.map(route => (
                <Tooltip key={route.href}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={route.active ? "default" : "ghost"}
                      className="w-full justify-start"
                      size="sm"
                      onClick={() => {
                        // Handle navigation
                      }}
                    >
                      <route.icon className="mr-2 size-4" />
                      {route.label}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">{route.label}</TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  )
}
