"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string
  title: string
  children: ReactNode
  className?: string
}) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      data-inview={inView ? "true" : "false"}
      className={cn(
        "scroll-mt-24",
        "mx-auto max-w-6xl px-4 py-12 md:py-20",
        "border-t border-border/60",
        // initial state + in-view transition (subtle fade/slide)
        "opacity-0 translate-y-2 transition-all duration-700",
        "data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0",
        className,
      )}
    >
      <h2
        id={`${id}-title`}
        className={cn("text-pretty text-2xl md:text-3xl font-semibold tracking-tight", "text-foreground")}
      >
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}
