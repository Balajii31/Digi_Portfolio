"use client"

import { cn } from "@/lib/utils"
import type { Icon } from "lucide-react"

type SkillCardProps = {
  icon: Icon
  label: string
  className?: string
}

export function SkillCard({ icon: IconEl, label, className }: SkillCardProps) {
  return (
    <div className={cn("card px-3 py-2 flex items-center gap-2", className)}>
      <IconEl className="size-4 text-muted-foreground" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  )
}
