'use client'

import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
export const footer = tv({
  base: '',
})

type FooterContainerProps = ComponentProps<typeof motion.footer> &
  VariantProps<typeof footer> & {
    children: ReactNode
  }
export function FooterContainer({
  children,
  className,
  ...rest
}: FooterContainerProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 80, scale: 0.9 }}
      className={footer({ className })}
      {...rest}
    >
      {children}
    </motion.footer>
  )
}
