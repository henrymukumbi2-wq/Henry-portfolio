import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  '/images/henry-full-suit.jpg',
  '/images/henry-red-jacket-office.jpg',
  '/images/henry-workwear-full.jpg',
  '/images/henry-suit-selfie.jpg',
  '/images/henry-workwear-portrait.jpg',
  '/images/henry-red-jacket-portrait.jpg'
];

export function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log('BackgroundSlideshow mounted, current index:', currentImageIndex);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % backgroundImages.length;
        console.log('Changing to image index:', newIndex);
        return newIndex;
      });
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <img
            src={backgroundImages[currentImageIndex]}
            alt="Background"
            className="w-full h-full object-cover"
            onLoad={() => console.log('Image loaded:', currentImageIndex)}
            onError={(e) => console.log('Image failed to load:', currentImageIndex, e)}
          />
          {/* Multiple overlay layers for subtle effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/5 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/3 via-transparent to-accent/3" />
          <div className="absolute inset-0 backdrop-blur-[0.3px]" />

          {/* Cute floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-primary/15 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
          <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-accent/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />

          {/* Subtle geometric shapes */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-accent/10 rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-primary/10 rounded-lg rotate-45 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-1/2 w-8 h-8 border border-accent/15 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-accent/60 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}