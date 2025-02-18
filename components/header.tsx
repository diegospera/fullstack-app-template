/*
<ai_context>
This client component provides the header for the app.
</ai_context>
*/

"use client"

import { Button } from "@/components/ui/button"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs"
import { Menu, Rocket, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ThemeSwitcher from "./utilities/theme-switcher"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
]

const signedInLinks = [{ href: "/todo", label: "Todo" }]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        isScrolled
          ? "bg-background/80 shadow-sm backdrop-blur-sm"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="font-display flex items-center gap-2 text-xl font-bold hover:opacity-80"
          >
            <Rocket className="size-6" />
            <span>Fullstack App Template</span>
          </Link>
        </div>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <SignedIn>
            {signedInLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </SignedIn>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />

          <SignedOut>
            <SignInButton>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button size="sm">Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t p-4 md:hidden">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="hover:text-foreground/80 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground/80 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <SignedIn>
              {signedInLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground/80 transition-colors"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </SignedIn>
          </div>
        </nav>
      )}
    </header>
  )
}
