/*
<ai_context>
Contains middleware for protecting routes, checking user authentication, and redirecting as needed.
</ai_context>
*/

import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import { NextResponse } from "next/server"

// List of public routes that don't require authentication
const publicRoutes = ["/", "/about", "/pricing", "/contact"]

// List of routes that should bypass the middleware entirely
const ignoredRoutes = ["/api/webhook"]

export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !publicRoutes.includes(req.nextUrl.pathname)) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    return NextResponse.next()
  }
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
  runtime: "experimental-edge"
}
