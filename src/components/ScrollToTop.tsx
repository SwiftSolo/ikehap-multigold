'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useAppContext } from '@/contexts/AppContext'

const ScrollToTop: React.FC = () => {
  const { scrollY } = useAppContext()
  const isVisible = scrollY > 400

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8 z-40
            w-12 h-12
            bg-primary-green hover:bg-primary-green/90
            dark:bg-primary-gold dark:hover:bg-primary-gold/90
            text-white
            rounded-full
            shadow-lg hover:shadow-xl
            transition-all duration-300
            flex items-center justify-center
            group
          "
          aria-label="Scroll to top"
        >
          <ChevronUp 
            size={24} 
            className="group-hover:-translate-y-0.5 transition-transform duration-200" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop