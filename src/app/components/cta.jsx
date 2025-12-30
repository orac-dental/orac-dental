'use client'
import { useScroll, useTransform, motion } from "framer-motion"
import { FaWhatsapp } from 'react-icons/fa'

export default () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])

  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/918171910245?text=Hello, I'm interested in your services`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <motion.div
        style={{ opacity, y }}
        className="fixed flex items-center justify-evenly space-x-2 bottom-16 right-8 z-50 hover:scale-110 transition duration-200"
      >
        {/* <p className="bg-slate-100 shadow-2xl shadow-black rounded-full p-1 pr-2">Book Now</p> */}
        <button
          className="gap-2 lg:p-4 p-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-400 text-white shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/40 transition-all duration-300"
          onClick={handleWhatsApp}
        >
          <FaWhatsapp className="h-6 w-6" />
        </button>
      </motion.div>
    </div>
  )
}
