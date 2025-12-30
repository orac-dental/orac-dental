"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiUser, FiPhone, FiMail, FiMessageSquare, FiCheck } from "react-icons/fi";

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

// Helper to encode form data for x-www-form-urlencoded
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Floating particles component for the modal
const ModalParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => ( // Reduced for mobile performance
        <motion.div
          key={`modal-particle-${i}`}
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
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function AppointmentModal({ open, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    setSending(true);
    e.preventDefault();
    
    fetch("forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "appointment", ...form }),
    })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Form successfully submitted");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
      setSending(false);
      setForm({ name: "", phone: "", email: "", message: "" });
    })
    .catch((error: Error) => {
      setSending(false);
      setSubmitted(false);
      onClose();
      alert(error.message);
    });
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.4 
            }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-2xl"
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
            <ModalParticles />

            {/* Scrollable Content */}
            <div className="relative z-10 max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8">
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors group z-20"
                  onClick={onClose}
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                  <FiX className="relative z-10 text-xl" />
                </motion.button>

                {submitted ? (
                  <motion.div 
                    className="text-center py-8 sm:py-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-6"
                    >
                      <FiCheck className="text-white text-2xl" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-3"
                    >
                      Thank You!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 text-sm sm:text-base"
                    >
                      Your appointment request has been received.
                      <br />
                      <span className="text-teal-300">We'll contact you soon!</span>
                    </motion.p>
                  </motion.div>
                ) : (
                  <form
                    name="appointment"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    <input type="hidden" name="form-name" value="appointment" />
                    <input type="hidden" name="bot-field" />

                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8">
                      <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg sm:text-3xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-2"
                      >
                        Book Appointment
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-sm"
                      >
                        Schedule your visit with us
                      </motion.p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4 sm:space-y-5">
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                        <div className="relative flex items-center">
                          <FiUser className="absolute left-4 text-teal-300 z-10" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                          />
                        </div>
                      </motion.div>

                      {/* Phone Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                        <div className="relative flex items-center">
                          <FiPhone className="absolute left-4 text-teal-300 z-10" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                          />
                        </div>
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                        <div className="relative flex items-center">
                          <FiMail className="absolute left-4 text-teal-300 z-10" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                          />
                        </div>
                      </motion.div>

                      {/* Message Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                        <div className="relative flex items-start">
                          <FiMessageSquare className="absolute left-4 top-4 text-teal-300 z-10" />
                          <textarea
                            name="message"
                            placeholder="Additional message (optional)"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm resize-none text-sm sm:text-base"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={sending}
                      className="relative w-full mt-6 sm:mt-8 px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)'
                      }}
                      whileHover={{ scale: sending ? 1 : 1.02 }}
                      whileTap={{ scale: sending ? 1 : 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-teal-300/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {sending ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Submitting...
                          </>
                        ) : (
                          'Book Appointment'
                        )}
                      </span>

                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
