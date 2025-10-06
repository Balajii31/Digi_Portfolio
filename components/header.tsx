"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-xl font-bold text-primary">
            Balaji G
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link
              href="#home"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
