import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

// Floating particles component for footer
const FooterParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`footer-particle-${i}`}
          className="absolute w-1 h-1 bg-teal-300 rounded-full opacity-20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0.5, 1.2, 0.5],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <FooterParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px">
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

      <div className="relative z-10 py-16 px-4">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-teal-400 bg-clip-text mb-2">
                  ORAC Dental
                </h3>
                <p className="text-gray-400 text-sm">
                  The Future of Dental Care
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { icon: FiInstagram, href: "https://www.instagram.com/theoracdental/", color: "from-teal-500 to-teal-400" },
                  { icon: FiTwitter, href: "https://x.com/theoracdental", color: "from-cyan-400 to-blue-500" },
                  // { icon: FiLinkedin, href: "#", color: "from-blue-500 to-teal-500" },
                  { icon: FiFacebook, href: "https://www.facebook.com/profile.php?id=61573742514663", color: "from-gray-400 to-gray-600" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    className="group relative"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur-sm`} />
                    <div className="relative w-10 h-10 bg-slate-800/50 rounded-lg border border-cyan-500/30 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-teal-300/50 transition-all duration-300">
                      <social.icon className="text-lg" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text mb-6">
                Contact Information
              </h4>
              
              <div className="space-y-4">
                {[
                  { icon: FiMapPin, text: "F-123, Platinum Plaza, Surat Navsari Main Road, Unn, Surat -394210", gradient: "from-green-400 to-cyan-400" },
                  { icon: FiPhone, text: "+91 8171910245", gradient: "from-blue-400 to-teal-400" },
                  { icon: FiMail, text: "theoracdental@gmail.com", gradient: "from-teal-400 to-red-400" }
                ].map((contact, idx) => (
                  <motion.div
                    key={contact.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${contact.gradient} bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}>
                      <contact.icon className="text-sm" />
                    </div>
                    <span className="text-sm sm:text-base">{contact.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Operating Hours */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-800/30 to-purple-900/30 border border-cyan-500/20"
              >
                <h5 className="text-cyan-400 font-semibold mb-2 text-sm">Operating Hours</h5>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>Mon - Sat: 3:30 PM - 8:30 PM</div>
                  <div>Sun: 11:00 AM - 2:00 PM</div>
                  <div className="text-teal-300 font-medium">🚨 24/7 Emergency Care</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text mb-6">
                Quick Links
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Services", href: "#services" },
                  { name: "Our Team", href: "#team" },
                  { name: "About Us", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ].map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + idx * 0.05 }}
                    className="group relative flex items-center gap-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300 hover:bg-clip-text transition-all duration-300 text-sm py-2"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-8 p-4 rounded-xl bg-gradient-to-r from-slate-800/30 to-purple-900/30 border border-cyan-500/20"
              >
                <h5 className="text-cyan-400 font-semibold mb-3 text-sm">Stay Updated</h5>
                <div className="flex justify-center sm:gap-2 gap-1" id='subscribebyemail'>
                  <input
                    id='subscribebyuseremail'
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-1 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-300 text-xs"
                  />
                 <a href="mailto:theoractdental@gmail.com?subject=New%20email%20subscriber">
                    <motion.button
                      className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg text-white text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
          >
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} ORAC Dental Clinic. All rights reserved.</p>
            </div>

            {/* Legal Links
            <div className="flex gap-6 text-xs">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, idx) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.6 + idx * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div> */}

            {/* Developer Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
              className="flex items-center gap-2 text-xs"
            >
              <span className="text-gray-500">Developed by</span>
              <motion.a
                href="https://www.linkedin.com/in/yadav-majersingh-ramsingh-0858aa211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text font-semibold hover:from-teal-300 hover:to-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Majersingh
              </motion.a>
              <FiLinkedin className="text-cyan-400 text-sm" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}