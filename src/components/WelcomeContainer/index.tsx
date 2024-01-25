'use client'

import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
export const container = tv({
  base: 'flex flex-col md:flex-row',
})

type WelcomeContainerProps = ComponentProps<typeof motion.article> &
  VariantProps<typeof container> & {
    children: ReactNode
  }
export function WelcomeContainer({
  children,
  className,
  ...rest
}: WelcomeContainerProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 1 }}
      exit={{ opacity: 0, y: 50 }}
      className={container({ className })}
      {...rest}
    >
      {children}
    </motion.article>
  )
}
