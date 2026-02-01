import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  "🌐 Web Development",
  "📱 Mobile Applications",
  "🎨 UI/UX Design",
  "🗄️ Database Design",
  "🔌 API Development",
  "☁️ Cloud Solutions",
  "🛒 E-commerce Platforms",
  "⚙️ Custom Software",
  "⚛️ React & Next.js",
  "🚀 Node.js & Express",
  "🐍 Python & Django",
  "🔧 DevOps & Deployment"
];

export function ScrollingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 overflow-hidden pointer-events-none">
      {/* Scrolling text from left to right */}
      <motion.div
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 15, // 15 seconds to cross the screen
          repeat: Infinity,
          ease: "linear"
        }}
        className="whitespace-nowrap py-2"
      >
        <div className="inline-flex items-center space-x-8 text-sm font-medium text-muted-foreground/40">
          {services.map((service, index) => (
            <motion.span
              key={`${service}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="inline-block"
            >
              {service}
            </motion.span>
          ))}
          {/* Repeat the services for seamless loop */}
          {services.map((service, index) => (
            <motion.span
              key={`${service}-repeat-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index + services.length) * 0.1 }}
              className="inline-block"
            >
              {service}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Scrolling text from right to left (different row) */}
      <motion.div
        animate={{
          x: ['100%', '-100%']
        }}
        transition={{
          duration: 20, // Slightly different speed for visual interest
          repeat: Infinity,
          ease: "linear"
        }}
        className="whitespace-nowrap py-2"
        style={{ marginTop: '-8px' }} // Slight overlap for seamless look
      >
        <div className="inline-flex items-center space-x-8 text-xs font-medium text-accent/30">
          {[...services].reverse().map((service, index) => (
            <motion.span
              key={`reverse-${service}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="inline-block"
            >
              {service}
            </motion.span>
          ))}
          {/* Repeat the services for seamless loop */}
          {[...services].reverse().map((service, index) => (
            <motion.span
              key={`reverse-${service}-repeat-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index + services.length) * 0.05 }}
              className="inline-block"
            >
              {service}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}