"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel - large screens only */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:px-8 lg:py-12 bg-sidebar">
        <div className="mx-auto w-full max-w-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-sidebar-foreground mb-4">
              ghost AI
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build and deploy AI-powered applications
            </p>
            <ul className="text-left space-y-3 text-sm text-muted-foreground">
              <li>• Create intelligent workflows</li>
              <li>• Deploy with confidence</li>
              <li>• Collaborate seamlessly</li>
              <li>• Scale effortlessly</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right panel - Clerk form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <SignUp
            appearance={{
              theme: dark,
              elements: {
                card: "bg-background border border-border shadow-none",
                headerTitle: "text-foreground",
                headerSubtitle: "text-muted-foreground",
                formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
                formFieldInput: "border-border focus:border-ring bg-input text-foreground",
                footerActionLink: "text-primary hover:text-primary/90",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}