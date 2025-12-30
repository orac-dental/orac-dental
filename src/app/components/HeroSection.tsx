"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface HeroSectionProps {
  onBook: () => void;
}
interface FloatingParticles {
  isMobile: boolean;
  shouldReduceMotion: boolean | null;
}

// Optimized image array with smaller, mobile-optimized versions
const dentalImages = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=70",
    mobileSrc: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=60",
    alt: "Modern dental clinic interior",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=70",
    mobileSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=60",
    alt: "Dental equipment and technology",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=70",
    mobileSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=60",
    alt: "Perfect smile close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=70",
    mobileSrc: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=60",
    alt: "Advanced dental procedure",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981960afb4?auto=format&fit=crop&w=800&q=70",
    mobileSrc: "https://images.unsplash.com/photo-1609840114035-3c981960afb4?auto=format&fit=crop&w=600&q=60",
    alt: "Dental consultation",
  }
];

// Memoized particles component with reduced complexity
const FloatingParticles = ({ isMobile, shouldReduceMotion }: FloatingParticles) => {
  const particleCount = useMemo(() => {
    if (shouldReduceMotion) return 0;
    return isMobile ? 30 : 50; // Reduced from 50 to 30/15
  }, [isMobile, shouldReduceMotion]);

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 8+12, // Reduced animation duration
    }));
  }, [particleCount]);

  if (shouldReduceMotion || particleCount === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-teal-300 rounded-full opacity-40"
          style={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 ],
            y: [0, Math.random() * 100 ],
            scale: [0.3, 1, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Optimized 3D elements with conditional rendering
const HolographicElements = ({ isMobile, shouldReduceMotion }:FloatingParticles) => {
  if (shouldReduceMotion || isMobile) return null;

  return (
    <>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-20 sm:opacity-30">
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 15, 0]
          }}
          transition={{ 
            duration: 12, // Slower animation for better performance
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full bg-gradient-to-br from-teal-300/30 to-teal-600/30 rounded-lg backdrop-blur-sm border border-teal-300/20"
          style={{
            boxShadow: '0 0 15px rgba(20, 184, 166, 0.2)'
          }}
        />
      </div>

      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 opacity-20 sm:opacity-30">
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-to-tr from-white/30 to-teal-400/30 rounded-full backdrop-blur-sm border border-white/20"
          style={{
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>
    </>
  );
};

// Preload images function
const preloadImages = (imageArray:any) => {
  return Promise.all(
    imageArray.map((img:any) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = window.innerWidth < 768 ? img.mobileSrc : img.src;
      });
    })
  );
};

export default function HeroSection({ onBook }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const shouldReduceMotion = useReducedMotion();

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Preload images on mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(dentalImages);
        setImagesPreloaded(true);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setImagesPreloaded(true);
        setIsLoaded(true);
      }
    };

    loadImages();
  }, []);

  // Image rotation effect
  useEffect(() => {
    if (!imagesPreloaded) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dentalImages.length);
    }, isMobile ? 5000 : 4000); // Slower rotation on mobile
    
    return () => clearInterval(interval);
  }, [imagesPreloaded, isMobile]);

  // Optimized animation variants
  const fadeInVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0 }
  }), [shouldReduceMotion]);

  const buttonVariants = useMemo(() => ({
    hover: shouldReduceMotion ? {} : { 
      scale: 1.02,
      boxShadow: '0 0 25px rgba(20, 184, 166, 0.4)'
    },
    tap: { scale: 0.98 }
  }), [shouldReduceMotion]);

  // Memoized current image source
  const currentImageSrc = useMemo(() => {
    const img = dentalImages[currentImage];
    return isMobile ? img.mobileSrc : img.src;
  }, [currentImage, isMobile]);

  // Loading skeleton
  if (!isLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-700 to-slate-900">
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-7xl mx-auto">
          <div className="w-full max-w-4xl h-32 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl animate-pulse mb-8" />
          <div className="w-64 h-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl animate-pulse mb-8" />
          <div className="flex gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-24 h-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-700 to-slate-900 px-4 sm:px-6 lg:px-8">
      {/* Optimized Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 1 }}
            className="absolute inset-0"
          >
            <img
              src={currentImageSrc}
              alt={dentalImages[currentImage].alt}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              style={{ 
                imageRendering: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)' // Hardware acceleration
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Simplified Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/15 via-teal-700 to-white/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Floating Particles */}
      {/* <FloatingParticles isMobile={isMobile} shouldReduceMotion={shouldReduceMotion} /> */}

      {/* Simplified Grid Pattern - only on desktop */}
      {/* {!isMobile && !shouldReduceMotion && (
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 0%, rgba(20, 184, 166, 0.1) 50%, transparent 100%),
                linear-gradient(0deg, transparent 0%, rgba(20, 184, 166, 0.1) 50%, transparent 100%)
              `,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
      )} */}

      {/* 3D Holographic Elements */}
      {/* <HolographicElements isMobile={isMobile} shouldReduceMotion={shouldReduceMotion} /> */}

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.2 }}
          className="relative mb-6 sm:mb-8"
        >
          {/* Simplified text glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 via-teal-300/5 to-white/5 rounded-2xl sm:rounded-3xl blur-2xl" />
          
          <h1 
            className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl font-black uppercase bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text text-transparent leading-tight px-2"
            style={{
              textShadow: shouldReduceMotion ? 'none' : '0 0 30px rgba(20, 184, 166, 0.3)',
              filter: shouldReduceMotion ? 'none' : 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.2))'
            }}
          >
            EXPERIENCE PERSONALIZED 
            <br />
            <span className="bg-gradient-to-r from-white via-teal-300 to-teal-200 bg-clip-text text-transparent">
            DENTAL CARE WITH ORAC DENTAL
            </span>
            <br />
            <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent mt-2 sm:mt-4 block">
              ACCESSIBLE • AFFORDABLE • ACCOUNTABLE
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.4 }}
          className="relative group mb-6 sm:mb-8 lg:mb-12"
        >
           {/* Feature Pills */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.6 }}
            className="grid grid-cols-2 mb-8 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 max-w-4xl"
          >
            {['Advanced Tech', '3D Scanning', 'Painless Treatment', 'Same-Day Appointment'].map((feature, index) => (
              <motion.div
                key={feature}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-full border border-teal-300/30 backdrop-blur-sm text-white font-semibold text-xs sm:text-sm lg:text-base text-center"
                style={{
                  boxShadow: '0 0 10px rgba(20, 184, 166, 0.1)'
                }}
              >
                <span className="whitespace-nowrap">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Simplified button glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/40 via-teal-300/40 to-white/40 rounded-xl sm:rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300" />
          
          <motion.button
            onClick={onBook}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-xl font-bold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 rounded-xl sm:rounded-2xl border border-teal-300/30 backdrop-blur-sm overflow-hidden w-full max-w-xs sm:max-w-sm lg:max-w-md"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.8), rgba(20, 184, 166, 0.8), rgba(94, 234, 212, 0.8))',
              boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl lg:text-2xl">⚡</span>
              <span className="whitespace-nowrap">BOOK APPOINTMENT NOW</span>
              <span className="text-lg sm:text-xl lg:text-2xl">🦷</span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Simplified Corner Accents */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32">
        <div className="w-full h-full bg-gradient-to-br from-teal-400/20 to-transparent rounded-br-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32">
        <div className="w-full h-full bg-gradient-to-tl from-white/20 to-transparent rounded-tl-full" />
      </div>
    </section>
  );
}