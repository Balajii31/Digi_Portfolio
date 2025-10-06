export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">About Me</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I'm a passionate Full Stack Developer currently pursuing my B.E. in Computer Science at University College
            of Engineering with a CGPA of 8.4. I specialize in building robust web applications using modern
            technologies.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <p className="mb-2">
                <span className="font-medium text-foreground">B.E. Computer Science</span>
                <br />
                University College of Engineering
                <br />
                CGPA: 8.4
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                <li>• Problem-solving & Critical Thinking</li>
                <li>• Team Collaboration</li>
                <li>• Adaptability</li>
                <li>• Verbal Communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>• Tamil (Native)</li>
                <li>• English (Fluent)</li>
                <li>• Hindi (Conversational)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Academic Achievements</h3>
              <ul className="space-y-2">
                <li>• HSC: 83%</li>
                <li>• SSLC: 93%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
