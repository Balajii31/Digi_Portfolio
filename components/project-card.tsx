import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string
  description: string
  tech: string[]
}) {
  return (
    <Card className="h-full transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-primary/40">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
