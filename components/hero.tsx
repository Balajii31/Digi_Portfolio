"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Hi, I'm <span className="text-primary">Balaji G</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">Full Stack Developer</p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Build Smarter with Balaji
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web with expertise in Java, Spring Boot,
          React.js, Node.js, and MongoDB.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <Link href="#contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
