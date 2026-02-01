import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => scrollToSection(e, "#root")} className="text-2xl font-bold font-display tracking-tighter hover:opacity-80 transition-opacity">
            Mukumbi<span className="text-accent">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={(e: any) => scrollToSection(e, "#contact")} className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Hire Me
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={(e: any) => scrollToSection(e, "#contact")} className="w-full mt-4">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
