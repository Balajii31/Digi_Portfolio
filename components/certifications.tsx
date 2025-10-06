import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Java with Spring Boot",
    issuer: "Naan Mudhalvan",
    year: "2025",
    description: "Comprehensive certification in Java programming and Spring Boot framework.",
  },
  {
    title: "Full Stack Development",
    issuer: "CodeAlpha",
    year: "2025",
    description: "Certification for completing full-stack development internship program.",
  },
  {
    title: "Full Stack Development",
    issuer: "OneYes Infotech Solutions",
    year: "2025",
    description: "Certification for completing full-stack development internship program.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-primary font-semibold">{cert.year}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
