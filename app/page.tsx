import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react" // icons

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-20 pb-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div
            className="space-y-5 opacity-0 translate-y-2 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            data-inview="true"
          >
            <h1 className="text-balance text-4xl md:text-5xl font-semibold tracking-tight">Balaji Gunasekaran</h1>
            <p className="text-lg text-muted-foreground">
              Full‑Stack Developer focused on reliable, accessible web apps.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div
            className="prose max-w-none text-pretty *:leading-relaxed opacity-0 translate-y-2 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            data-inview="true"
          >
            <p>
              I build clear, maintainable UIs and robust backends with React, Node.js, Java/Spring Boot, and modern
              databases.
            </p>
          </div>
        </div>
      </section>

      {/* Hero / About */}
      <Section id="about" title="About Me" className="pt-4 md:pt-6">
        <div className="grid items-start gap-8 md:grid-cols-[220px,1fr]">
          <div className="flex flex-col items-start gap-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl border bg-card">
              <Image
                alt="Portrait of Balaji Gunasekaran"
                src="/professional-developer-portrait.png"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kancheepuram, India</p>
              <p className="mt-1 font-medium">Full Stack Developer</p>
            </div>
          </div>
          <div className="prose max-w-none text-pretty *:leading-relaxed">
            <p>
              Full Stack Developer skilled in Java, Spring Boot, React.js, Node.js, and MongoDB. Experienced in building
              scalable web apps, problem-solving, and teamwork. Eager to contribute to dynamic projects and grow with
              the organization.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-6 md:grid-cols-2">
          <SkillGroup title="Frontend" items={["HTML", "CSS", "JavaScript", "React.js"]} />
          <SkillGroup title="Backend" items={["Node.js", "Java / Spring Boot"]} />
          <SkillGroup title="Databases" items={["MySQL", "MongoDB"]} />
          <SkillGroup title="Tools & Platforms" items={["Git", "GitHub", "VS Code", "Postman", "V0"]} />
          <SkillGroup
            title="Soft Skills"
            items={["Problem solving", "Critical thinking", "Collaboration", "Adaptability", "Verbal communication"]}
          />
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Timeline
          items={[
            {
              period: "Present",
              title: "B.E. Computer Science and Engineering",
              org: "University College of Engineering, Kancheepuram",
              detail: "CGPA: 8.4 (currently studying)",
            },
            {
              period: "HSC",
              title: "Sri Saraswathi Vidhyalaya Hr. Sec School, Vridhachalam",
              org: "",
              detail: "83%",
            },
            {
              period: "SSLC",
              title: "Sakthi Matric Hr. Sec School, Vridhachalam",
              org: "",
              detail: "93%",
            },
          ]}
        />
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <Timeline
          items={[
            {
              period: "Jul 2025",
              title: "Full Stack Developer Intern",
              org: "OneYes InfoTech Solutions",
              detail: "Built UI and contributed to full-stack features.",
            },
            {
              period: "Aug 2025",
              title: "Full Stack Development Intern",
              org: "CodeAlpha",
              detail: "Worked on end-to-end web features and code reviews.",
            },
            {
              period: "2025",
              title: "Java with Spring Boot Program",
              org: "Naan Mudhalvan",
              detail: "Hands-on labs and real-world patterns.",
            },
            {
              period: "—",
              title: "Hackathon participation",
              org: "",
              detail: "Collaborated on rapid prototypes and demos.",
            },
          ]}
        />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Simple E‑Commerce Store"
            description="Full-stack store with cart, product details, orders, and auth."
            tech={["HTML", "CSS", "JavaScript", "Django", "Express.js"]}
          />
          <ProjectCard
            title="Real-Time Communication Platform"
            description="Video conferencing, screen sharing, file sharing, and whiteboard."
            tech={["React", "Node.js", "Express", "WebRTC", "Socket.io", "JWT"]}
          />
          <ProjectCard
            title="College Admission Portal"
            description="React UI for admissions built for OneYes Infotech."
            tech={["React", "UI/UX"]}
          />
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 md:grid-cols-2">
          <CertCard
            title="Java with Spring Boot"
            issuer="Tamil Nadu Skill Development Corporation (Naan Mudhalvan) + Digisailor"
            year="2025"
          />
          <CertCard title="Full Stack Development Internship" issuer="CodeAlpha" year="2025" />
          <CertCard title="Internship" issuer="OneYes Infotech Solutions" year="2025" />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-medium">Get in touch</h3>
              <p className="text-muted-foreground">I’m open to internships, freelance, and full‑time opportunities.</p>
            </div>
            <ContactForm />
          </div>
          <Card>
            <CardContent className="grid gap-4 p-6">
              <InfoItem
                icon={Mail}
                label="Email"
                value="balag31072002@gmail.com"
                href="mailto:balag31072002@gmail.com"
              />
              <InfoItem icon={Phone} label="Phone" value="+91 8825448079" href="tel:+918825448079" />
              <InfoItem icon={Linkedin} label="LinkedIn" value="LinkedIn Profile" href="https://www.linkedin.com/" />
              <InfoItem icon={Github} label="GitHub" value="Balaji Gunasekaran" href="https://github.com/" />
              <div>
                <p className="text-sm font-medium">Languages</p>
                <p className="text-sm text-muted-foreground">Tamil, English, Hindi</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Balaji Gunasekaran. All rights reserved.</p>
      </footer>
    </main>
  )
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-base font-medium">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function Timeline({
  items,
}: {
  items: { period: string; title: string; org: string; detail: string }[]
}) {
  return (
    <ol className="relative ms-3 border-s">
      {items.map((it, idx) => (
        <li key={idx} className="ms-6 pb-8 last:pb-0">
          <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-primary" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">{it.title}</h3>
            <span className="text-xs text-muted-foreground">{it.period}</span>
          </div>
          {it.org && <p className="text-sm text-muted-foreground">{it.org}</p>}
          <p className="mt-1 text-sm">{it.detail}</p>
        </li>
      ))}
    </ol>
  )
}

function CertCard({ title, issuer, year }: { title: string; issuer: string; year: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{issuer}</p>
          </div>
          <span className="rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground">{year}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function InfoItem({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string
  value: string
  href?: string
  icon?: any
}) {
  const Inner = (
    <div className="flex items-start gap-3">
      {Icon ? <Icon className="mt-0.5 size-4 text-muted-foreground" aria-hidden="true" /> : null}
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a
      href={href}
      className="inline-block rounded-md p-2 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      {Inner}
    </a>
  ) : (
    <div className="rounded-md p-2">{Inner}</div>
  )
}
