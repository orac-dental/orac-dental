'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBook, FiArrowRight, FiClock, FiUser } from 'react-icons/fi';

// Floating particles component for blogs
const BlogParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`blog-particle-${i}`}
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

// Loading skeleton component
const BlogSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-teal-400/30"
        style={{
          background: `linear-gradient(135deg, 
             #08445c 0%, 
              rgb(18,98,92) 30%,
              #08445c 70%,
              #08445c 100%
          )`
        }}
      >
        <div className="p-6">
          {/* Skeleton header */}
          <motion.div
            className="h-4 bg-gradient-to-r from-teal-500/20 to-white/20 rounded mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Skeleton content */}
          <motion.div
            className="space-y-2 mb-4"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <div className="h-3 bg-gradient-to-r from-teal-300/20 to-teal-500/20 rounded w-full" />
            <div className="h-3 bg-gradient-to-r from-teal-300/20 to-teal-500/20 rounded w-3/4" />
          </motion.div>
          
          {/* Skeleton button */}
          <motion.div
            className="h-10 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-lg"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </motion.div>
    ))}
  </div>
);

export default function BlogList() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/getallfolder')
      .then((res) => res.json())
      .then((data) => {
        setSlugs(data.slugs);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load blog folders:', err);
        setLoading(false);
      });
  }, []);

  // Mock function to generate reading time (you can replace with actual logic)
  const getReadingTime = (slug: string) => {
    return Math.floor(Math.random() * 10) + 3; // 3-12 minutes
  };

  return (
    <section 
      id="blogs" 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
           #0f766e 0%, 
          #134e4a 30%,
          #0f766e 70%,
          #0f766e 100%
        )`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-900/50" />
      
      {/* Floating Particles */}
      <BlogParticles />
      
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
              <FiBook className="inline mr-2" />
              Knowledge Hub
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-6"
          >
            Dental Insights
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our latest articles on{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text font-semibold">
              cutting-edge dental technology
            </span>{" "}
            and oral health innovations
          </motion.p>
        </div>

        {/* Blog Content */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BlogSkeleton />
          </motion.div>
        ) : slugs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-full mb-6">
              <FiBook className="text-3xl text-teal-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No Blogs Available</h3>
            <p className="text-gray-400">Check back soon for exciting dental insights and articles!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {slugs.map((slug, i) => (
              <motion.div
                key={`${slug}-${i}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
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
                className="group relative cursor-pointer"
              >
                {/* Blog Card */}
                <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl border border-teal-400/30 group-hover:border-teal-300/50 transition-all duration-300">
                  {/* Background Gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, 
                          #0f766e 0%, 
                          #134e4a 30%,
                          #0f766e 70%,
                          #0f766e 100%
                      )`
                    }}
                  />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-teal-300/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Blog Icon */}
                    <motion.div
                      className="self-start mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-xl backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-2xl group-hover:bg-gradient-to-r group-hover:from-teal-500/30 group-hover:to-white/30 transition-all duration-300">
                        📚
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-white group-hover:bg-clip-text transition-all duration-300 mb-3 capitalize leading-tight">
                      {slug.replace(/[-_]/g, ' ')}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow leading-relaxed">
                      Discover the latest insights and innovations in dental care technology and treatment methods.
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <FiUser className="text-teal-300" />
                        <span>Dr. Team</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock className="text-white" />
                        <span>{getReadingTime(slug)} min read</span>
                      </div>
                    </div>
                    
                    {/* CTA Link */}
                    <Link
                      href={`/${slug}`}
                      className="group/link relative"
                    >
                      <motion.div
                        className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-300 rounded-xl text-white font-semibold text-center overflow-hidden group-hover:from-teal-400 group-hover:to-white transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Read Article
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiArrowRight />
                          </motion.div>
                        </span>
                        
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.div>
                    </Link>
                  </div>
                  
                  {/* Hover Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(4)].map((_, particleIdx) => (
                      <motion.div
                        key={particleIdx}
                        className="absolute w-2 h-2 bg-teal-300 rounded-full"
                        style={{
                          left: `${20 + particleIdx * 20}%`,
                          top: `${30 + particleIdx * 15}%`,
                        }}
                        animate={{
                          y: [-10, -25, -10],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: particleIdx * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
