"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Plus, XIcon } from "lucide-react";
import type { HTMLAttributes } from "react";

interface ProjectSidebarProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
  ...props
}: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={cn(
        "pointer-events-none fixed inset-y-0 left-0 z-40 flex w-full max-w-full transition duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex h-full w-[320px] max-w-full flex-col overflow-hidden rounded-r-3xl border border-sidebar-border bg-sidebar/95 shadow-2xl ring-1 ring-sidebar-ring/60 backdrop-blur-xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              Projects
            </p>
          </div>
          <Button variant="ghost" size="icon-sm" onClick={onClose}>
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close Projects</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <Tabs defaultValue="my-projects" className="space-y-4">
            <TabsList>
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects">
              <div className="rounded-3xl border border-border bg-card/60 px-5 py-10 text-center text-sm text-muted-foreground">
                No projects yet.
              </div>
            </TabsContent>

            <TabsContent value="shared">
              <div className="rounded-3xl border border-border bg-card/60 px-5 py-10 text-center text-sm text-muted-foreground">
                No shared workspaces available.
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-border px-5 py-4">
          <Button className="w-full" size="default">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </aside>
  );
}
