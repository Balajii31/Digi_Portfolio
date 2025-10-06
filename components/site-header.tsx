"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => l.href.slice(1))
      let current = "about"
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // initial
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60",
        "bg-background/80 supports-[backdrop-filter]:bg-background/60 supports-[backdrop-filter]:backdrop-blur-md",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="#about" className="font-semibold tracking-tight">
          Balaji Gunasekaran
        </Link>
        <nav>
          <ul className="hidden gap-2 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                    activeSection === l.href.slice(1) && "text-primary bg-primary/10"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild size="sm" variant="secondary" className="ml-4">
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </div>
    </header>
  )
}
