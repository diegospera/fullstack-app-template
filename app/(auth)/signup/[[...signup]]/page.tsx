/*
<ai_context>
This client page provides the signup form from Clerk.
</ai_context>
*/

"use client"

import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp
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
