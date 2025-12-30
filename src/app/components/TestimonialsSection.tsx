"use client";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Satyam Gupta",
    text: "His clinic has very good facilities for dental treatment and his staff and Dr. Manan ji  himself are very helpful. In my family, I have got my mother, my father and my own dental treatment done by this Doctor MananJi and it has been more than 8 months and he is still absolutely fine and there has been no problem in his treatment. Anyone who needs to get their teeth treated can prefer these dr Manan ji 😊",
    rating: 5,
    treatment: "Root Canal",
    image: "male.jpg"
  },
  {
    name: "Kamini Singh",
    text: "Best place of denatal care. Very supportive and helpful atmosphere of staff. Good hygiene and sanitation. Best place for denatal care 😘",
    rating: 5,
    treatment: "Root Canal & Extraction",
    image: "/female.jpg"
  },
  {
    name: "Hansraj Mandal",
    text: "Good treatment, I got my wisdom tooth removed. There was no pain and everything went soo well.",
    rating: 5,
    treatment: "Extraction",
    image: "/hansraj.jpeg"
  },
  {
    name: "Prasun Upadhyay",
    text: "दांतों की सफाई अच्छी की गई. दर्द को आराम मिल गया. स्टाफ़ बहुत ही सहयोगी था।",
    rating: 5,
    treatment: "Dental Cleaning",
    image: "/prasun.jpeg"
  },
];

// Floating particles component
const TestimonialParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`testimonial-particle-${i}`}
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

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.2 }}
        >
          <svg
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section 
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
      <TestimonialParticles />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(94, 234, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
            `,
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

      <div className="relative z-10 max-w-6xl mx-auto">
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
              Patient Reviews
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-6"
          >
            Patient Testimonials
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover what our patients say about their{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text font-semibold">
              transformative dental experiences
            </span>{" "}
            with cutting-edge technology
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-teal-400/30 bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-900/50">
            {/* Carousel Container */}
            <div className="relative">
              {/* Custom Carousel Styling */}
              <style jsx global>{`
                .carousel .control-arrow {
                  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%) !important;
                  border-radius: 50% !important;
                  width: 50px !important;
                  height: 50px !important;
                  opacity: 0.8 !important;
                  transition: all 0.3s ease !important;
                }
                .carousel .control-arrow:hover {
                  opacity: 1 !important;
                  transform: scale(1.1) !important;
                }
                .carousel .control-arrow:before {
                  border-color: transparent transparent transparent white !important;
                  border-width: 8px 0 8px 12px !important;
                }
                .carousel .control-next.control-arrow:before {
                  border-color: transparent white transparent transparent !important;
                  border-width: 8px 12px 8px 0 !important;
                }
                .carousel .control-dots {
                  margin: 0 !important;
                  padding: 20px 0 !important;
                }
                .carousel .control-dots .dot {
                  background: linear-gradient(135deg, #14b8a6, #ffffff) !important;
                  width: 12px !important;
                  height: 12px !important;
                  border-radius: 50% !important;
                  margin: 0 8px !important;
                  opacity: 0.5 !important;
                  transition: all 0.3s ease !important;
                }
                .carousel .control-dots .dot.selected {
                  opacity: 1 !important;
                  transform: scale(1.3) !important;
                }
              `}</style>

              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={6000}
                showArrows={true}
                swipeable={true}
                emulateTouch={true}
                className="testimonial-carousel"
              >
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 sm:p-12 min-h-[400px] flex flex-col items-center justify-center text-center relative"
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-8 left-8 text-6xl text-teal-300/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      "
                    </motion.div>

                    {/* Patient Image */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-300 to-white p-1 bg-gradient-to-r from-teal-300 to-white">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Floating badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full flex items-center justify-center text-white text-xs"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        ✓
                      </motion.div>
                    </motion.div>

                    {/* Star Rating */}
                    <StarRating rating={testimonial.rating} />

                    {/* Testimonial Text */}
                    <motion.p
                      className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      "{testimonial.text}"
                    </motion.p>

                    {/* Patient Info */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <div className="text-xl font-bold text-transparent bg-gradient-to-r from-teal-300 to-white bg-clip-text">
                        {testimonial.name}
                      </div>
                      
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-white/20 rounded-full text-sm text-teal-300 border border-teal-400/30">
                        {testimonial.treatment}
                      </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-8 right-8 text-6xl text-teal-300/20 rotate-180">
                      "
                    </div>

                    {/* Floating particles for each testimonial */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, particleIdx) => (
                        <motion.div
                          key={particleIdx}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                          style={{
                            left: `${20 + particleIdx * 30}%`,
                            top: `${30 + particleIdx * 20}%`,
                          }}
                          animate={{
                            y: [-10, -30, -10],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: particleIdx * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </Carousel>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "100%", label: "Patient Satisfaction" },
              { number: "6000+", label: "Happy Patients" },
              { number: "4.9★", label: "Average Rating" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.2 + 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="group p-6 rounded-xl backdrop-blur-sm border border-teal-400/20 hover:border-teal-300/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-200 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base font-medium">
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
