import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
