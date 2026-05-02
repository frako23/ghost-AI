"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import type { HTMLAttributes } from "react";

interface EditorNavbarProps extends HTMLAttributes<HTMLDivElement> {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  className,
  ...props
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-30 border-b border-border bg-sidebar px-6 shadow-sm",
        "text-sidebar-foreground",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon-sm" onClick={onToggleSidebar}>
            {isSidebarOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle projects sidebar</span>
          </Button>
        </div>

        <div className="flex-1 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Editor
          </p>
        </div>

        <div className="flex h-16 items-center justify-end">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
