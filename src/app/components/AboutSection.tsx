import { motion } from "framer-motion";

interface AboutSection{
  onBook: () => void;
}

// Floating particles component
const AboutParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`about-particle-${i}`}
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
            duration: Math.random() * 10 + 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function AboutSection({onBook}:AboutSection) {
  return (
    <section 
      id="about" 
      className="relative py-20 px-4 overflow-hidden"
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
      <AboutParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
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
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-full text-teal-300 text-sm font-semibold border border-teal-400/30 backdrop-blur-sm">
              About Our Clinic
            </span>
          </motion.div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Image Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-teal-400/30 group-hover:border-teal-300/50 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="Futuristic dental clinic with advanced technology"
                  className="w-full max-w-lg object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Tech Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-teal-500/90 to-teal-600/90 rounded-full text-white text-sm font-bold backdrop-blur-sm border border-teal-300/50"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🚀 AI Powered
                </motion.div>
              </div>

              {/* Floating Particles around Image */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-300 rounded-full opacity-60"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                    animate={{
                      y: [-10, -25, -10],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8"
            >
              <span className="text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text">
                Experience the Art of Smiling
              </span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl">
                with ORAC Dental!
              </span>
            </motion.h2>

            {/* Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed font-medium"
            >
              Our mission is to provide{" "}
              <span className="text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text font-semibold">
                next-generation dental care
              </span>{" "}
              that combines cutting-edge AI technology with personalized attention. 
              Experience the future of dentistry today.
            </motion.p>

            {/* Core Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
              className="relative mb-8 group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-teal-400/30 group-hover:border-teal-300/50 transition-all duration-300">
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, 
                     #0f766e 30%, 
                    #134e4a 30%,
                    #0f766e 70%,
                    #0f766e 100%
                    )`
                  }}
                />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-teal-300/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-xl backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      💎
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text">
                      Our Core Values
                    </h3>
                  </div>

                  {/* Values List */}
                  <ul className="space-y-4">
                    {[
                      { 
                        title: "ACCESSIBLE", 
                        desc: "Advanced care for all, powered by AI diagnostics and virtual consultations",
                        icon: "🌐"
                      },
                      { 
                        title: "AFFORDABLE", 
                        desc: "Revolutionary treatments at transparent prices with flexible payment options",
                        icon: "💰"
                      },
                      { 
                        title: "ACCOUNTABLE", 
                        desc: "Data-driven results with real-time treatment tracking and guaranteed outcomes",
                        icon: "🎯"
                      }
                    ].map((value, idx) => (
                      <motion.li
                        key={value.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + idx * 0.1 
                        }}
                        className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors duration-300 group/item"
                      >
                        {/* Icon */}
                        <motion.div
                          className="flex-shrink-0 mt-1"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-lg backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-sm group-hover/item:bg-gradient-to-r group-hover/item:from-teal-500/30 group-hover/item:to-white/30 transition-all duration-300">
                            {value.icon}
                          </div>
                        </motion.div>
                        
                        {/* Content */}
                        <div>
                          <span className="font-bold text-teal-300 text-lg">
                            {value.title}
                          </span>
                          <p className="text-sm sm:text-base leading-relaxed mt-1">
                            {value.desc}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center lg:text-left"
            >
              <p className="text-lg sm:text-xl font-bold text-transparent bg-gradient-to-r from-white via-teal-300 to-teal-200 bg-clip-text mb-6">
                🚀 Ready to experience the future of dental care?
              </p>
              
              <motion.button
                className="relative px-8 py-4 text-lg font-bold text-white rounded-xl overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBook}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-teal-300/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                <span className="relative z-10">Schedule Your Transformation</span>
                
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "99.9%", label: "Success Rate", icon: "⚡" },
              { number: "24/7", label: "AI Support", icon: "🤖" },
              { number: "15min", label: "Avg Treatment", icon: "⏱️" },
              { number: "100%", label: "Satisfaction", icon: "😊" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1 + 1.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="group p-4 rounded-xl backdrop-blur-sm border border-teal-400/20 hover:border-teal-300/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
