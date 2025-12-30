import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheck } from "react-icons/fi";

// Helper to encode form data
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Floating particles component
const ContactParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`contact-particle-${i}`}
          className="absolute w-1 h-1 bg-teal-300 rounded-full opacity-30"
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
            duration: Math.random() * 12 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    try {
      await fetch("forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setSending(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setSending(false);
      alert("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 px-4 flex justify-center items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
           #08445c 0%, 
            rgb(18,98,92) 30%,
            #08445c 70%,
            #08445c 100%
        )`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <ContactParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
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

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-full text-teal-300 text-sm font-semibold border border-teal-400/30 backdrop-blur-sm">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-6"
          >
            Contact Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your smile? Get in touch with our{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text font-semibold">
              expert team
            </span>{" "}
            today
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-teal-400/30"
          style={{
            background: `linear-gradient(135deg, 
              #0f766e 30%, 
              #134e4a 30%,
              #0f766e 70%,
              #0f766e 100%
            )`
          }}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl">
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
              animate={{
                background: [
                  'linear-gradient(0deg, transparent, rgba(20, 184, 166, 0.3), rgba(94, 234, 212, 0.3), rgba(255, 255, 255, 0.3), transparent)',
                  'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.3), rgba(94, 234, 212, 0.3), rgba(255, 255, 255, 0.3), transparent)',
                  'linear-gradient(180deg, transparent, rgba(20, 184, 166, 0.3), rgba(94, 234, 212, 0.3), rgba(255, 255, 255, 0.3), transparent)',
                  'linear-gradient(270deg, transparent, rgba(20, 184, 166, 0.3), rgba(94, 234, 212, 0.3), rgba(255, 255, 255, 0.3), transparent)',
                  'linear-gradient(360deg, transparent, rgba(20, 184, 166, 0.3), rgba(94, 234, 212, 0.3), rgba(255, 255, 255, 0.3), transparent)'
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-teal-300/10 to-white/10 opacity-50 blur-sm" />

          <div className="relative z-10 p-8 sm:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full mb-6"
                >
                  <FiCheck className="text-white text-3xl" />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-4"
                >
                  Message Sent Successfully!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 text-lg"
                >
                  Thank you for reaching out! We'll get back to you within 24 hours.
                  <br />
                  <span className="text-teal-300 font-medium">Get ready for your smile transformation!</span>
                </motion.p>
              </motion.div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group"
                >
                  <label className="block text-teal-300 font-semibold mb-3 text-sm sm:text-base">
                    Full Name
                  </label>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                  <div className="relative flex items-center">
                    <FiUser className="absolute left-4 text-teal-300 z-10" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  <label className="block text-teal-300 font-semibold mb-3 text-sm sm:text-base">
                    Email Address
                  </label>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                  <div className="relative flex items-center">
                    <FiMail className="absolute left-4 text-teal-300 z-10" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm text-sm sm:text-base"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative group"
                >
                  <label className="block text-teal-300 font-semibold mb-3 text-sm sm:text-base">
                    Your Message
                  </label>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur-sm" />
                  <div className="relative flex items-start">
                    <FiMessageSquare className="absolute left-4 top-4 text-teal-300 z-10" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your dental needs and how we can help..."
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-teal-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20 transition-all backdrop-blur-sm resize-none text-sm sm:text-base"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  className="relative w-full mt-8 px-8 py-4 text-lg font-bold text-white rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)'
                  }}
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: sending ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/50 via-teal-300/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {sending ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FiSend className="text-xl" />
                        Send Message
                      </>
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
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {[
            { icon: "📞", title: "Call Us", info: "+91 8171910245", gradient: "from-teal-300 to-teal-400" },
            { icon: "📧", title: "Email Us", info: "theoracdental@gmail.com", gradient: "from-white to-teal-200" },
            { icon: "📍", title: "Visit Us", info: "F-123, Platinum Plaza, Surat Navsari Main Road, Unn, Surat -394210", gradient: "from-teal-200 to-teal-300" }
          ].map((contact, idx) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1 + 0.9,
                type: "spring",
                stiffness: 200
              }}
              className="group p-6 rounded-xl backdrop-blur-sm border border-teal-400/20 hover:border-teal-300/40 transition-all duration-300 text-center"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(15, 23, 42, 0.8) 0%, 
                  rgba(15, 118, 110, 0.4) 100%
                )`
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-3">{contact.icon}</div>
              <h3 className={`text-lg font-bold mb-2 text-transparent bg-gradient-to-r ${contact.gradient} bg-clip-text`}>
                {contact.title}
              </h3>
              <p className="text-gray-300 text-sm">{contact.info}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
