import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Wrench, Users, Lightbulb, MessageSquare, Zap } from "lucide-react"

const technicalSkills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Code2 },
  { name: "Node.js", icon: Code2 },
  { name: "Spring Boot", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: Wrench },
  { name: "GitHub", icon: Wrench },
  { name: "VS Code", icon: Wrench },
  { name: "Postman", icon: Wrench },
  { name: "V0", icon: Wrench },
]

const softSkills = [
  { name: "Critical Thinking", icon: Lightbulb },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
  { name: "Adaptability", icon: Zap },
  { name: "Verbal Communication", icon: MessageSquare },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Skills</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <Card
                    key={index}
                    className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Icon className="h-8 w-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                      <p className="font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <Card
                    key={index}
                    className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Icon className="h-8 w-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{skill.name}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
