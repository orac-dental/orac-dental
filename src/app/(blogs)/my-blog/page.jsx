'use client'
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AppointmentModal from "@/app/components/AppointmentModal";
import { FiCalendar, FiShield, FiHeart, FiTrendingUp, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

// Floating particles component
const BlogParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`blog-particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
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

export default  ()=> {
  const reasons = [
    {
      icon: FiShield,
      title: "Early Detection & Prevention",
      description: "AI-powered diagnostics can detect cavities, gum disease, and oral cancer in their earliest stages when treatment is most effective and less invasive.",
      gradient: "from-green-400 to-cyan-400"
    },
    {
      icon: FiHeart,
      title: "Overall Health Connection",
      description: "Oral health is directly linked to heart disease, diabetes, and stroke. Regular checkups help monitor these connections using advanced health analytics.",
      gradient: "from-pink-400 to-red-400"
    },
    {
      icon: FiTrendingUp,
      title: "Cost-Effective Care",
      description: "Preventive care costs significantly less than restorative treatments. Our data shows patients save 70% on dental expenses with regular visits.",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: FiCalendar,
      title: "Professional Cleaning",
      description: "Even with excellent home care, professional cleaning removes plaque and tartar buildup that regular brushing cannot eliminate.",
      gradient: "from-cyan-400 to-green-400"
    }
  ];

  const statistics = [
    { number: "85%", label: "of oral diseases are preventable", color: "text-green-400" },
    { number: "2x", label: "yearly visits recommended", color: "text-cyan-400" },
    { number: "50%", label: "of adults have gum disease", color: "text-pink-400" },
    { number: "90%", label: "early detection success rate", color: "text-purple-400" }
  ];
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <article 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
           #08445c 30%, 
          rgb(18,98,92) 30%,
          #08445c 70%,
          #08445c 100%
        )`
      }}
    > <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <BlogParticles />
      
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Blog Category */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full text-cyan-400 text-sm font-semibold border border-cyan-500/30 backdrop-blur-sm">
              Preventive Care
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text mb-6 leading-tight"
          >
            Why Regular Dental Checkups Are Essential
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Discover how modern dental technology and preventive care can{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text font-semibold">
              transform your oral health
            </span>{" "}
            and overall well-being
          </motion.p>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">OD</span>
              </div>
              <span>ORAC Dental Team</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-1">
              <FiCalendar className="text-cyan-400" />
              <span>5 min read</span>
            </div>
          </motion.div>
        </motion.header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl backdrop-blur-xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50">
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <FiAlertTriangle className="text-2xl text-yellow-400" />
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text">
                The Hidden Truth About Oral Health
              </h2>
            </motion.div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Many people only visit the dentist when they experience pain or discomfort. However, by the time symptoms appear, dental problems may have already progressed significantly. Regular dental checkups are your first line of defense against oral health issues, utilizing cutting-edge technology to detect problems before they become painful and expensive to treat.
            </p>
          </div>
        </motion.section>

        {/* Key Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1 + 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="group p-6 rounded-xl backdrop-blur-sm border border-cyan-500/20 hover:border-pink-400/40 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`text-3xl sm:text-4xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Reasons */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Top Reasons for Regular Checkups
          </h2>
          
          <div className="space-y-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-cyan-500/30 group-hover:border-pink-400/50 transition-all duration-300">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(15, 23, 42, 0.9) 0%, 
                        rgba(88, 28, 135, 0.6) 50%,
                        rgba(15, 23, 42, 0.9) 100%
                      )`
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  
                  <div className="relative z-10 p-8 flex items-start gap-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} bg-opacity-20 rounded-xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <reason.icon className="text-2xl text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recommended Frequency */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl backdrop-blur-xl border border-green-500/30 bg-gradient-to-r from-green-900/20 via-cyan-900/20 to-green-900/20">
            <div className="flex items-center gap-3 mb-6">
              <FiCheckCircle className="text-3xl text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
                Our Professional Recommendation
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">General Patients</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Every 6 months for routine cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Annual comprehensive examination
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    X-rays every 1-2 years
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">High-Risk Patients</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    Every 3-4 months for gum disease
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Diabetic patients need frequent monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Smokers require intensive care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What to Expect */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            What to Expect During Your Visit
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Examination",
                items: [
                  "3D digital imaging and scanning",
                  "AI-powered cavity detection",
                  "Gum health assessment",
                  "Oral cancer screening",
                  "Bite analysis"
                ]
              },
              {
                title: "Professional Cleaning",
                items: [
                  "Ultrasonic plaque removal",
                  "Stain removal and polishing",
                  "Fluoride treatment",
                  "Personalized oral hygiene tips",
                  "Treatment planning if needed"
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 1 }}
                className="p-6 rounded-xl backdrop-blur-xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/50 via-purple-900/20 to-slate-900/50"
              >
                <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + itemIdx * 0.1 + 1.2 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="p-8 rounded-2xl backdrop-blur-xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait for problems to develop. Schedule your preventive dental checkup today and experience the future of oral healthcare with our AI-powered diagnostics and personalized treatment plans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="relative px-8 py-4 text-lg font-bold text-white rounded-xl overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                <motion.button onClick={()=>setModalOpen(true)} className="relative z-10">Schedule Your Checkup</motion.button>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <Link href='/#services'
                className="px-8 py-4 text-lg font-bold text-cyan-400 border-2 border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More About Our Services
              </Link >
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
}
