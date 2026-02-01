import { motion } from "framer-motion";
import { Code2, Smartphone, Monitor, BookOpen, Mail, Phone, MessageCircle, Download, Database, Globe, Server, GitBranch, Figma, Palette, Github, Linkedin, Twitter } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { BackgroundSlideshow } from "@/components/BackgroundSlideshow";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollingText } from "@/components/ScrollingText";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Images from public/images/
const images = {
  hero: "/images/henry-red-jacket-office.jpg",
  about: "/images/henry-full-suit.jpg",
  gallery: [
    "/images/henry-suit-selfie.jpg",
    "/images/henry-workwear-full.jpg",
    "/images/henry-workwear-portrait.jpg",
    "/images/henry-red-jacket-portrait.jpg",
  ]
};

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-body selection:bg-accent/20 selection:text-accent relative">
      <LoadingScreen key={Date.now()} />
      <BackgroundSlideshow />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/85" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 rounded-full bg-accent/10 text-accent font-semibold text-xs sm:text-sm">
                Software Developer & Tech Consultant
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] mb-4 sm:mb-6 text-foreground">
                Hi, I'm <br className="hidden sm:block"/>
                <span className="text-primary">Mukumbi Henry</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-lg">
                Specializing in web and mobile applications. Transforming complex problems into elegant digital solutions from Ndola, Zambia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg hover:bg-secondary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-primary/20 rotate-2 sm:rotate-3 border-2 sm:border-4 border-white">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                <img
                  src={images.hero}
                  alt="Mukumbi Henry Office"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute -z-10 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -top-10 -right-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background/90 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl max-w-xs sm:max-w-sm mx-auto md:mr-auto border-2 border-border">
                <img
                  src={images.about}
                  alt="Mukumbi Henry Formal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4 sm:mb-6">About Me</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                I am a passionate software developer and former student at <strong className="text-foreground">Zambia University College of Technology</strong>, based within Ndola, Zambia.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                My journey in technology is driven by a desire to solve real-world problems. Whether it's helping students with complex academic projects or building robust applications for businesses, I bring dedication and technical expertise to every task.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-secondary/50 p-3 sm:p-4 rounded-xl">
                  <h3 className="font-bold text-xl sm:text-2xl text-accent mb-1">50+</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-secondary/50 p-3 sm:p-4 rounded-xl">
                  <h3 className="font-bold text-xl sm:text-2xl text-accent mb-1">100%</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-background/85 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Technical Skills</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Proficient in modern web technologies and development tools
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Code2, name: "JavaScript", level: "Expert" },
              { icon: Globe, name: "React", level: "Expert" },
              { icon: Server, name: "Node.js", level: "Advanced" },
              { icon: Database, name: "PostgreSQL", level: "Advanced" },
              { icon: GitBranch, name: "Git", level: "Expert" },
              { icon: Figma, name: "UI/UX Design", level: "Intermediate" },
              { icon: Smartphone, name: "React Native", level: "Advanced" },
              { icon: Monitor, name: "TypeScript", level: "Advanced" },
              { icon: Palette, name: "Tailwind CSS", level: "Expert" },
              { icon: BookOpen, name: "Python", level: "Intermediate" },
              { icon: Database, name: "MongoDB", level: "Intermediate" },
              { icon: Globe, name: "Express.js", level: "Advanced" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm mb-1">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background/85 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 to-background/45" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
                technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
                image: "/images/project1.jpg",
                link: "#"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
                technologies: ["React", "Express", "MongoDB", "Socket.io"],
                image: "/images/project2.jpg",
                link: "#"
              },
              {
                title: "Portfolio Website",
                description: "Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
                technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
                image: "/images/project3.jpg",
                link: "#"
              },
              {
                title: "Mobile Banking App",
                description: "Cross-platform mobile banking application with secure authentication, transaction history, and money transfer features.",
                technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
                image: "/images/project4.jpg",
                link: "#"
              },
              {
                title: "Learning Management System",
                description: "Educational platform for online learning with course management, video streaming, and assessment tools.",
                technologies: ["React", "Express", "MongoDB", "AWS S3"],
                image: "/images/project5.jpg",
                link: "#"
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
                technologies: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
                image: "/images/project6.jpg",
                link: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-secondary/50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary/60" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-background/85 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Experience</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              My professional journey and key achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Freelance Software Developer",
                  company: "Self-Employed",
                  period: "2022 - Present",
                  description: "Developing custom web and mobile applications for clients. Specializing in React, Node.js, and cross-platform mobile development. Completed 50+ projects with 100% client satisfaction rate.",
                  achievements: [
                    "Built 15+ e-commerce platforms",
                    "Developed 10+ mobile applications",
                    "Mentored 20+ students on software development projects"
                  ]
                },
                {
                  title: "IT Support Specialist",
                  company: "Local Business Solutions",
                  period: "2021 - 2022",
                  description: "Provided technical support and system maintenance for small businesses. Implemented IT solutions and trained staff on new technologies.",
                  achievements: [
                    "Improved system uptime by 95%",
                    "Implemented automated backup solutions",
                    "Trained 50+ employees on digital tools"
                  ]
                },
                {
                  title: "Computer Science Student",
                  company: "Zambia University College of Technology",
                  period: "2019 - 2022",
                  description: "Pursued Diploma in Computer Science with focus on software development and system analysis. Graduated with distinction and completed multiple capstone projects.",
                  achievements: [
                    "Graduated with Distinction",
                    "Led team projects in software development",
                    "Completed internship in web development"
                  ]
                }
              ].map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-border"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 text-xs">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background/85 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">What I Do</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Comprehensive technical solutions tailored to your needs. Prices vary depending on the complexity of the project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ServiceCard
              icon={BookOpen}
              title="Academic Projects"
              description="Expert assistance with Diploma and Degree projects. Guidance on implementation, documentation, and research."
              delay={0}
            />
            <ServiceCard
              icon={Code2}
              title="Website Dev"
              description="Responsive, modern websites built with the latest technologies. From personal portfolios to corporate sites."
              delay={0.1}
            />
            <ServiceCard
              icon={Smartphone}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android."
              delay={0.2}
            />
            <ServiceCard
              icon={Monitor}
              title="Web Applications"
              description="Complex, data-driven web applications and dashboards designed to optimize business processes."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-background/90 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8 sm:mb-12 text-center">Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[250px] sm:auto-rows-[300px]">
            {images.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-lg sm:rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all ${index === 0 || index === 3 ? 'sm:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-background/85 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 to-background/45" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">What Clients Say</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Feedback from clients and collaborators
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                content: "Henry delivered an exceptional e-commerce platform for my business. His attention to detail and technical expertise exceeded my expectations. The project was completed on time and within budget.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Student",
                content: "As a computer science student, I needed help with my final year project. Henry not only helped me understand the concepts but also implemented a robust solution. Highly recommended!",
                rating: 5
              },
              {
                name: "David Wilson",
                role: "Startup Founder",
                content: "Working with Henry was a game-changer for our startup. He built our mobile app from scratch and provided ongoing support. Professional, reliable, and skilled.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-accent/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4 sm:mb-6">Let's Work Together</h2>
              <p className="text-primary-foreground/80 mb-6 sm:mb-10 text-base sm:text-lg leading-relaxed">
                Ready to start your next project? Whether it's an academic requirement or a business solution, I'm here to help you achieve your goals.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <a href="mailto:henrymukumbi2@gmail.com" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-primary-foreground/60">Email</p>
                    <p className="font-semibold text-sm sm:text-lg">henrymukumbi2@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/260953736093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-primary-foreground/60">WhatsApp</p>
                    <p className="font-semibold text-sm sm:text-lg">0953736093</p>
                  </div>
                </a>

                <a href="tel:+260979632548" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-primary-foreground/60">Contact Number</p>
                    <p className="font-semibold text-sm sm:text-lg">0979632548</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-background text-foreground p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-border mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold font-display mb-4 sm:mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="mailto:henrymukumbi2@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Mukumbi Henry. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm text-muted-foreground/60">Ndola, Zambia</span>
          </div>
        </div>
      </footer>
      <ScrollingText />
    </div>
  );
}
