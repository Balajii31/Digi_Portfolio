import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.E. in Computer Science",
    institution: "University College of Engineering",
    status: "Currently Pursuing",
    grade: "CGPA: 8.4",
    year: "Present",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "High School",
    status: "Completed",
    grade: "83%",
    year: "2020",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Secondary School",
    status: "Completed",
    grade: "93%",
    year: "2018",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{edu.grade}</span>
                  <span className="text-sm text-muted-foreground">{edu.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
