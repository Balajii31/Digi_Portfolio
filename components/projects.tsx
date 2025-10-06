import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Simple E-Commerce Store",
    description: "A full-featured e-commerce platform with order processing and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "Express"],
    features: ["Order Processing", "User Authentication", "Product Management", "Shopping Cart"],
  },
  {
    title: "Real-Time Communication Platform",
    description: "Video calling and screen sharing application built with modern web technologies.",
    technologies: ["React", "Node.js", "WebRTC", "Socket.io"],
    features: ["Video Calls", "Screen Sharing", "Real-time Chat", "Room Management"],
  },
  {
    title: "College Admission Portal",
    description: "Multi-role user interface for streamlined college admission process.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Multi-role Access", "Application Tracking", "Document Upload", "Improved Usability"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
