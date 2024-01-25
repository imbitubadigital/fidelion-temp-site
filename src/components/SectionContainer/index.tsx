'use client'

import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
export const section = tv({
  base: '',
})

type SectionContainerProps = ComponentProps<typeof motion.section> &
  VariantProps<typeof section> & {
    children: ReactNode
  }
export function SectionContainer({
  children,
  className,
  ...rest
}: SectionContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.965 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.965 }}
      className={section({ className })}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
