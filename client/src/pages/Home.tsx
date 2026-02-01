import { motion } from "framer-motion";
import { Code2, Smartphone, Monitor, BookOpen, Mail, Phone, MessageCircle, Download } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
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
    <div className="min-h-screen bg-background font-body selection:bg-accent/20 selection:text-accent">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                Software Developer & Tech Consultant
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 text-foreground">
                Hi, I'm <br/>
                <span className="text-primary">Mukumbi Henry</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Specializing in web and mobile applications. Transforming complex problems into elegant digital solutions from Ndola, Zambia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full border-2 h-14 px-8 text-lg hover:bg-secondary"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 rotate-3 border-4 border-white">
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
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto md:mr-auto border-2 border-border">
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
              <h2 className="text-4xl font-bold font-display mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a passionate software developer and former student at <strong className="text-foreground">Zambia University College of Technology</strong>, based within Ndola, Zambia.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My journey in technology is driven by a desire to solve real-world problems. Whether it's helping students with complex academic projects or building robust applications for businesses, I bring dedication and technical expertise to every task.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary/50 p-4 rounded-xl">
                  <h3 className="font-bold text-2xl text-accent mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-xl">
                  <h3 className="font-bold text-2xl text-accent mb-1">100%</h3>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">What I Do</h2>
            <p className="text-muted-foreground">
              Comprehensive technical solutions tailored to your needs. Prices vary depending on the complexity of the project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-display mb-12 text-center">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {images.gallery.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold font-display mb-6">Let's Work Together</h2>
              <p className="text-primary-foreground/80 mb-10 text-lg leading-relaxed">
                Ready to start your next project? Whether it's an academic requirement or a business solution, I'm here to help you achieve your goals.
              </p>

              <div className="space-y-6">
                <a href="mailto:henrymukumbi2@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Email</p>
                    <p className="font-semibold text-lg">henrymukumbi2@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/260953736093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">WhatsApp</p>
                    <p className="font-semibold text-lg">0953736093</p>
                  </div>
                </a>

                <a href="tel:+260979632548" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Contact Number</p>
                    <p className="font-semibold text-lg">0979632548</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-background text-foreground p-8 rounded-3xl shadow-2xl border border-border">
              <h3 className="text-2xl font-bold font-display mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mukumbi Henry. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <span className="text-sm text-muted-foreground/60">Ndola, Zambia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
