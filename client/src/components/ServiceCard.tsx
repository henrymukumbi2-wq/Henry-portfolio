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
      className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/10 transition-colors duration-300">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
