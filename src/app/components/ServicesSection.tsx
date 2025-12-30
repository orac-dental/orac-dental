import { motion } from "framer-motion";

interface ServicesSection  {
  onBook: () => void;
}

const services = [
  {
    name: "Regular Check-up",
    image: "/regularcheckup.jpeg",
    icon: "🦷",
    description: "Comprehensive oral health examination"
  },
  {
    name: "Tooth Replacement",
    image: "/implanting2.jpg",
    icon: "🦾",
    description: "Permanent tooth replacement solutions"
  },
  {
    name: "Kids Dentistry",
    image: "/checkup.jpg",
    icon: "👶",
    description: "Gentle care for little smiles"
  },
  {
    name: "Braces & Aligners",
    image: "/bracing.jpg",
    icon: "🦷",
    description: "Straighten teeth with modern technology"
  },
  {
    name: "Follow Appointment",
    image: "/appointment.jpeg",
    icon: "📅",
    description: "Scheduled follow-up care"
  },
  {
    name: "Tooth Pain",
    image: "/implanting.jpg",
    icon: "⚡",
    description: "Emergency pain relief treatment"
  },
  {
    name: "Tooth Cleaning",
    image: "/smile.jpg",
    icon: "✨",
    description: "Professional deep cleaning service"
  },
  {
    name: "Emergency Care",
    image: "/emer.jpeg",
    icon: "🚨",
    description: "24/7 urgent dental care"
  },
];

// Floating particles component
const ServicesParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`service-particle-${i}`}
          className="absolute w-1 h-1 bg-teal-300 rounded-full opacity-30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.6, 0.2],
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

export default function ServicesSection({ onBook }:ServicesSection) {
  return (
    <section 
      id="services" 
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
      <ServicesParticles />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 via-teal-300/20 to-white/20 rounded-full text-teal-300 text-sm font-semibold border border-teal-400/30 backdrop-blur-sm">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-6"
          >
            How can we help you today?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Select the service that best describes your need and experience the{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text font-semibold">
              future of dental care
            </span>
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-teal-400/30 group-hover:border-teal-300/50 transition-colors duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 via-teal-300/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Icon */}
                  <motion.div
                    className="self-start"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-xl backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-2xl group-hover:bg-gradient-to-r group-hover:from-teal-500/30 group-hover:to-white/30 transition-all duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm sm:text-base opacity-80 group-hover:opacity-100 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">
                      {service.description}
                    </p>
                    
                    {/* CTA Arrow */}
                    <motion.div
                      className="flex items-center gap-2 text-teal-300 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <button onClick={onBook} className="text-sm font-semibold">Check Now</button>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
                
                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(5)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-2 h-2 bg-teal-300 rounded-full"
                      style={{
                        left: `${20 + idx * 20}%`,
                        top: `${30 + idx * 10}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
