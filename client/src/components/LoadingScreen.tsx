import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for increasing, -1 for decreasing

  useEffect(() => {
    // Always show loading screen on component mount
    setIsVisible(true);
    setProgress(0);
    setDirection(1);

    // Small delay before starting the animation
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          let newProgress = prev + (direction * (Math.random() * 8 + 2)); // Random increment/decrement between 2-10

          // If increasing and reached 100%, start decreasing
          if (direction === 1 && newProgress >= 100) {
            setDirection(-1);
            return 100;
          }
          // If decreasing and reached 0%, start increasing
          else if (direction === -1 && newProgress <= 0) {
            setDirection(1);
            return 0;
          }

          // Clamp between 0 and 100
          return Math.max(0, Math.min(100, newProgress));
        });
      }, 150); // Update every 150ms

      return () => clearInterval(interval);
    }, 200); // Start after 200ms delay

    return () => clearTimeout(startDelay);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Progress bar */}
          <div className="flex-1 mr-4">
            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-sm"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Percentage display */}
          <div className="flex items-center space-x-2">
            <motion.span
              key={progress}
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-bold text-primary min-w-[3rem] text-right"
            >
              {Math.round(progress)}%
            </motion.span>
            <div className="text-xs text-muted-foreground">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}