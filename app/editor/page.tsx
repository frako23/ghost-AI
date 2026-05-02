"use client";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((current) => !current)}
      />
      <ProjectSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex min-h-screen flex-col pt-16">
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Workspace
            </p>
            <h1 className="mt-2 text-3xl font-semibold">ghost AI</h1>
          </div>
          <Button variant="secondary" onClick={() => setIsSidebarOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Open projects
          </Button>
        </header>

        <section className="flex-1 p-10">
          <div className="grid h-full place-items-center rounded-[2rem] border border-border bg-card/60 p-16 text-center">
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Use the project sidebar to preview the editor shell pattern. The
              sidebar floats above the canvas and slides in without shifting
              page content.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}