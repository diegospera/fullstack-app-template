/*
<ai_context>
This client page provides the login form from Clerk.
</ai_context>
*/

"use client"

import { SignIn } from "@clerk/nextjs"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        redirectUrl="/todo"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-card"
          }
        }}
      />
    </div>
  )
}
