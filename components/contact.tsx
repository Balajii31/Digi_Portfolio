import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "balag31072002@gmail.com",
    href: "mailto:balag31072002@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8825448079",
    href: "tel:+918825448079",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel
          free to reach out through any of the channels below.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardContent className="p-6">
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
