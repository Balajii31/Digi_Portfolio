import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Award } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Internship",
    company: "CodeAlpha",
    period: "August 2025",
    type: "Internship",
    description: "Worked on full-stack development projects, building web applications with modern technologies.",
  },
  {
    title: "Full Stack Internship",
    company: "OneYes Infotech Solutions",
    period: "July 2025",
    type: "Internship",
    description: "Developed and maintained full-stack applications, collaborating with cross-functional teams.",
  },
  {
    title: "Java with Spring Boot Program",
    company: "Naan Mudhalvan",
    period: "2025",
    type: "Training Program",
    description: "Completed comprehensive training in Java and Spring Boot framework development.",
  },
  {
    title: "Hackathon Participation",
    company: "Various Events",
    period: "2024-2025",
    type: "Competition",
    description: "Participated in multiple hackathons, building innovative solutions under time constraints.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {exp.type === "Competition" ? (
                      <Award className="h-6 w-6 text-primary" />
                    ) : (
                      <Briefcase className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {exp.type}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
