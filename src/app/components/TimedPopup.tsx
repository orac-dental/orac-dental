"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiClock, FiStar, FiZap } from "react-icons/fi";

interface TimedPopupProps {
  onBook: () => void;
}

// Floating particles component for the popup
const PopupParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => ( // Reduced for mobile performance
        <motion.div
          key={`popup-particle-${i}`}
          className="absolute w-1 h-1 bg-teal-300 rounded-full opacity-40"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function TimedPopup({ onBook }: TimedPopupProps) {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes countdown

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (!show) return;
    
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setShow(false);
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [show]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.5 
            }}
            className="relative w-full max-w-md max-h-[85vh] overflow-hidden rounded-2xl"
            style={{
              background: `linear-gradient(135deg, 
                 #08445c 0%, 
                  rgb(18,98,92) 30%,
                  #08445c 70%,
                  #08445c 100%
              )`
            }}
          >
            {/* Backdrop blur overlay */}
            <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-slate-800/20 via-teal-900/30 to-slate-900/20" />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl">
              <div className="absolute inset-0 rounded-2xl border-2 border-teal-400/30 shadow-2xl shadow-teal-400/20" />
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                style={{
                  background: `linear-gradient(45deg, 
                    transparent, 
                    rgba(20, 184, 166, 0.3), 
                    rgba(94, 234, 212, 0.3), 
                    rgba(255, 255, 255, 0.3),
                    transparent
                  ) border-box`,
                  mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor'
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Floating Particles */}
            <PopupParticles />

            {/* Scrollable Content */}
            <div className="relative z-10 max-h-[85vh] overflow-y-auto">
              <div className="p-6 sm:p-8 text-center">
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors group z-20"
                  onClick={() => setShow(false)}
                  aria-label="Close popup"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                  <FiX className="relative z-10 text-xl" />
                </motion.button>

                {/* Offer Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-full text-teal-300 text-xs sm:text-sm font-semibold border border-teal-400/30 backdrop-blur-sm mb-4"
                >
                  <FiStar className="text-yellow-400" />
                  Limited Time Offer
                  <FiZap className="text-white" />
                </motion.div>

                {/* Main Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-4 leading-tight"
                >
                  Get Your Premium Dental Cleaning
                </motion.h3>

                {/* Price Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-gray-400 text-lg sm:text-xl line-through">₹1,999</span>
                    <motion.span
                      className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-white to-teal-300 bg-clip-text"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ₹599
                    </motion.span>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full text-green-400 text-xs sm:text-sm font-bold border border-green-500/30">
                    Save 75% Today!
                  </div>
                </motion.div>

                {/* Features - Simplified for mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mb-1"
                >
                  <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                    {[
                      { icon: "🤖", text: "AI-Powered Deep Cleaning" },
                      { icon: "✨", text: "Nano Polishing Technology" },
                      { icon: "🦷", text: "3D Oral Health Scan" },
                      { icon: "💎", text: "Professional Grade Results" }
                    ].map((feature, idx) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + idx * 0.05 }}
                        className="flex items-center justify-center gap-2 text-gray-300 py-0.5"
                      >
                        <span className="text-base">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center justify-center gap-2 mb-2 p-1 sm:p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30"
                >
                  <FiClock className="text-red-400 text-sm" />
                  <span className="text-red-400 font-bold text-xs sm:text-sm">
                    Offer expires in: {formatTime(countdown)}
                  </span>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => { setShow(false); onBook(); }}
                  className="relative w-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-teal-300/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FiZap className="text-lg" />
                    Book Your Session Now
                    <FiZap className="text-lg" />
                  </span>

                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                {/* Trust Badges - Simplified for mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-center justify-center gap-3 sm:gap-4 mt-4 text-xs text-gray-400"
                >
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="hidden sm:inline">4.9/5 Rating</span>
                    <span className="sm:hidden">4.9/5</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center gap-1">
                    <span>🛡️</span>
                    <span>Safe</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center gap-1">
                    <span>💳</span>
                    <span>Secure</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
