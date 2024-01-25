'use client'

import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
export const image = tv({
  base: 'flex-1 flex',
})

type EffectImageContainerProps = ComponentProps<typeof motion.div> &
  VariantProps<typeof image> & {
    children: ReactNode
  }
export function EffectImageContainer({
  children,
  className,
  ...rest
}: EffectImageContainerProps) {
  return (
    <motion.section
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      className={image({ className })}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
