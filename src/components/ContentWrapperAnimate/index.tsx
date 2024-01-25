'use client'
import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { motion } from 'framer-motion'
export const content = tv({
  base: 'relative  py-10 px-10 z-1 max-w-[1440px] mx-auto max-xl:px-20 max-md:p-5',
})
type ContentWrapperProps = ComponentProps<typeof motion.div> &
  VariantProps<typeof content> & {
    children: ReactNode
  }
export function ContentWrapperAnimate({
  children,
  className,
  ...rest
}: ContentWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 1 }}
      exit={{ opacity: 0, y: 50 }}
      className={content({ className })}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
