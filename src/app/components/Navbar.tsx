"use client";
import { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  { label: "Blogs", href: "/#blogs" },
];

const FloatingNavParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => ( // Reduced particles for better performance
        <motion.div
          key={`particle-${i}`} // Better key
          className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-40"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 8, // Reduced duration
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Optimized scroll handler
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Optimized close handler
  const closeMenu = useCallback(() => {
    if (!isAnimating) {
      setOpen(false);
    }
  }, [isAnimating]);

  // Handle backdrop click with proper event handling
  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget && !isAnimating) {
      closeMenu();
    }
  }, [closeMenu, isAnimating]);

  // Handle menu toggle
  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setOpen(prev => !prev);
    }
  }, [isAnimating]);


  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#08445c] backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-cyan-500/10' 
          : 'bg-gradient-to-r from-slate-900/80 via-[#08445c] to-slate-900/80 backdrop-blur-sm border-b border-purple-500/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating Particles */}
      <FloatingNavParticles />
      
      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10">
        {/* Logo */}
        <motion.a 
          href="/#" 
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
          <span className="relative text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-100 to-teal-400 bg-clip-text tracking-wide">
            ORAC 
            <span className="font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-teal-400 bg-clip-text mb-2">Dental</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative group px-4 py-2 text-white font-semibold text-sm lg:text-base transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-[#08445c] to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
              <span className="relative z-10 group-hover:text-cyan-300 transition-colors">
                {item.label}
              </span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-[#08445c] to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative group p-2 z-50"
          onClick={toggleMenu}
          disabled={isAnimating}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-2xl text-white"
          >
            {!open &&<FiMenu /> }
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setIsAnimating(false)}
      >
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleBackdropClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-gradient-to-br from-slate-900/98 via-[#08445c] to-slate-900/98 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4
              }}
            >
              {/* Simplified floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`drawer-particle-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 p-3n h-full flex flex-col">
                {/* Close button */}
                <motion.button
                  className="self-end   mr-8 py-4 p-2 text-2xl text-white hover:text-cyan-300 transition-colors relative group"
                  onClick={closeMenu}
                  disabled={isAnimating}
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                  <FiX className="relative z-10" />
                </motion.button>

                {/* Navigation items */}
                <nav className="p-6 bg-gradient-to-br from-teal-900  to-teal-700 " role="navigation">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label+'refg'}
                      href={item.href}
                      className="block relative group py-3"
                      onClick={() => {
                       setOpen(false);
                      }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                      
                      <span className="relative z-10 text-sm lg:text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {item.label}
                      </span>
                      
                      <motion.div
                        className="absolute left-0 bottom-1 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "60%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* Footer */}
                <div className="pb-4 bg-gradient-to-br from-slate-900 via-[#08445c] to-slate-900 ">
                  <motion.p
                    className="text-center text-sm text-gray-400 mt-4 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Future of Dental Care
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
