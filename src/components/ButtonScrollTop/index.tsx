'use client'

import { MoveUp } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
export function ButtonScrollTop() {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000 && !showButton) {
        setShowButton(true)
      }
      if (window.scrollY <= 1000 && showButton) {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showButton])

  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: 180,
            x: 40,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            rotate: 180,
            x: 40,
            y: 40,
          }}
          transition={{ duration: 0.3 }}
          type="button"
          onClick={scrollToTop}
          className="text-2xl rounded-full p-2 bg-black/40 hover:bg-fd-red-600/80 transition-all text-white fixed bottom-10 right-10 cursor-pointer max-sm:bottom-5 max-sm:right-5"
        >
          <MoveUp size={26} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
